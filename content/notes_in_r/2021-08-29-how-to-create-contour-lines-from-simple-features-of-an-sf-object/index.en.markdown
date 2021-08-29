---
title: How to create contour lines from simple features of an sf object
author: admin
date: '2021-08-29'
slug: how-to-create-contour-lines-from-simple-features-of-an-sf-object
categories:
  - Data
tags:
  - Spatial Analysis in R
subtitle: ''
summary: ''
authors: []
lastmod: '2021-08-29T11:27:53-05:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
---

I had a task to draw counter lines from a simple feature of an `sf` object of polygons. The question is: Can we directly draw contour lines from polygons? 

In what follows, I first convert the polygons to lines and you will see this will not do the trick. Then I provide an alternative way to do so. 

The basic idea is that we first convert the polygons to points and then we interpolate the points to a raster. Finally, we draw contour lines from that raster. The workhorse is the `st_contour` function in the `stars` package.

## Prepare the data

Here I use the Agricultural Statistics Districts (ASD) for the entire U.S. as our spatial data. 

An ASD is defined as a contiguous group of counties having relatively similar agricultural characteristics. The raw data (shapefiles) can be downloaded from [here](https://data.nal.usda.gov/dataset/nass-quick-stats/resource/5f1173c1-bcb4-4f88-aec0-3bbfee75657f).

I have already converted the shapefile to a `gpkg` file.


```r
library(tidyverse)
library(sf)
library(stars)
library(gstat)
library(tmap)
library(automap)

dataMap <- st_read(dsn = 'contour.gpkg')
```

```
## Reading layer `contour' from data source 
##   `C:\work\PersonalWebsite\mywebsite\content\notes_in_r\2021-08-29-how-to-create-contour-lines-from-simple-features-of-an-sf-object\contour.gpkg' 
##   using driver `GPKG'
## Simple feature collection with 303 features and 4 fields
## Geometry type: MULTIPOLYGON
## Dimension:     XY
## Bounding box:  xmin: -124.7332 ymin: 24.5447 xmax: -66.9499 ymax: 49.38435
## Geodetic CRS:  NAD83
```

```r
# Here I use the ESRI:102004 projection

dataMap <- st_transform(dataMap, "ESRI:102004")
```

I created a `contour` column which contains arbitrary values. 


```r
head(dataMap)
```

```
## Simple feature collection with 6 features and 4 fields
## Geometry type: MULTIPOLYGON
## Dimension:     XY
## Bounding box:  xmin: 708708.4 ymin: -940047.8 xmax: 1052223 ymax: -389495.9
## Projected CRS: USA_Contiguous_Lambert_Conformal_Conic
##   STATE STASD_N STASD_A contour                           geom
## 1    01     110    0110     141 MULTIPOLYGON (((733752.1 -4...
## 2    01     120    0120     190 MULTIPOLYGON (((945896.1 -3...
## 3    01     130    0130      76 MULTIPOLYGON (((745661.9 -5...
## 4    01     140    0140      70 MULTIPOLYGON (((760374.9 -6...
## 5    01     150    0150     112 MULTIPOLYGON (((765076.4 -9...
## 6    01     160    0160     167 MULTIPOLYGON (((1032953 -65...
```

```r
tm_shape(dataMap) + tm_polygons(col = 'contour')
```

<img src="{{< blogdown/postref >}}index.en_files/figure-html/unnamed-chunk-1-1.png" width="672" />

## First we try converting polygons to lines

Let's see what it looks like if we convert the polygons to lines. Note that the `tmap` package provides a `tm_iso` which, according to the documentation, should be used to draw contour lines. The function is essentially a combination of `tm_lines` and `tm_text`. In the code below, we just use `tm_lines`. 


```r
dataLines <- st_cast(dataMap, 'MULTILINESTRING')

tm_shape(dataLines) + tm_lines(col = 'contour')
```

<img src="{{< blogdown/postref >}}index.en_files/figure-html/unnamed-chunk-2-1.png" width="672" />

We end up getting a map of 'border' with the color indicating the value. 

## An alternative way to do the task

It turns out that contour lines need to be drawn from raster objects to make the lines smooth. In cases of polygons, we can directly rasterize the polygons and draw contour lines. But you will see that this is not we want. Another way is to first convert the polygons to points and then interpolate the points to a raster object and we draw contour lines from there. The interpolation acts as a smoothing process. 

After the raster object is created, we will use the `st_contour` function from the `stars` package to draw contour lines. We will also need to define the breaks where contour lines are made. 

Let us first examine how it looks like if we draw the contour lines from rasterized polygons. 



```r
# rasterize the polygons
dataRaster <- st_rasterize(dataMap['contour'])

# Define the breaks for drawing contour lines
breaks = seq(0, 200, 5)

dataRasterLines <- st_contour(dataRaster, breaks = breaks, contour_lines = T)

tm_shape(dataRasterLines) + tm_lines(col = 'contour')
```

<img src="{{< blogdown/postref >}}index.en_files/figure-html/unnamed-chunk-3-1.png" width="672" />

This map looks no different from the "border" map above. Next let us try the second approach. 




```r
# We first convert the polygon object to points (i.e., centroids). 

dataPoints <- st_point_on_surface(dataMap)
```

```
## Warning in st_point_on_surface.sf(dataMap): st_point_on_surface assumes
## attributes are constant over geometries of x
```

```r
# We prepare the empty raster that we will interpolate the data to.
# Note that the resulted raster is regular.

dataRasterBase <- st_bbox(dataMap) %>% 
            st_as_stars(dx = 10000) %>% 
            st_crop(dataMap)
            
# Here we run a simple kriging interpolation

v_mod_ok = autofitVariogram(contour ~ 1, as(dataPoints, 
            "Spatial"))

gg = gstat::gstat(formula = contour ~ 1, model = v_mod_ok$var_model, 
            data = dataPoints)
zz = predict(gg, dataRasterBase)
```

```
## [using ordinary kriging]
```

```r
zz = zz["var1.pred", ]
names(zz) = "contour"

# Let us take a look at the raster object we just created 

plot(zz)
```

<img src="{{< blogdown/postref >}}index.en_files/figure-html/unnamed-chunk-4-1.png" width="672" />

```r
# Then we convert to contour lines using st_contour

breaks1 <- seq(80, 120, 1)

contourline <- st_contour(zz, contour_lines = T, na.rm = T, breaks = breaks1)

tm_shape(dataMap) + tm_borders(col = "gray80") + 
  tm_shape(contourline) + tmap::tm_lines(col = "contour", 
            lwd = 3, palette = "viridis") +
            tm_layout(legend.title.size = 1.5, legend.text.size = 1, 
            legend.position = c("left", "bottom"), legend.format = list(digits = 0))
```

<img src="{{< blogdown/postref >}}index.en_files/figure-html/unnamed-chunk-4-2.png" width="672" />

This map looks much better. Note that the more detailed you define the breaks in `st_contour`, the more lines you will get. 


Please note that there may exist more efficiency ways to draw contour lines from polygons. Please do not hesitate to let me know if you find some. 


