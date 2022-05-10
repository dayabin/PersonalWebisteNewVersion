---
title: A collection of climate, disaster, and nature resources data for the US and the world
author: Yabin Da
date: '2021-08-29'
slug: a-collection-of-climate-weather-data-for-the-us-and-the-world
categories:
  - Data
tags: []
subtitle: ''
summary: ''
authors: [Yabin Da]
lastmod: '2022-05-10T16:00:18-05:00'
featured: no
draft: false
math: true
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []

output:
  blogdown::html_page:
    toc: true
    toc_depth: 4
---

 `{{< toc >}}`

This post is to collect the climate/weather data I have seen in the literature for the United States and the world. Additionally, I will also post some natural disaster data, such as storm, wildfire, hail, tornado, etc. The ideal data should not only include the information of the disasters, but the associated (economic) damages. 

# **Climate data**

## **gridMET (historical)**

gridMET is a dataset of daily high-spatial resolution (~4-km, 1/24th degree) surface meteorological data covering the contiguous US from 1979-yesterday (updated daily). The dataset blends the [PRISM](https://prism.oregonstate.edu/) with the high temporal resolution data from the National Land Data Assimilation System ([NLDAS](https://ldas.gsfc.nasa.gov/)). See the [website](http://www.climatologylab.org/gridmet.html)

- Coverage: The Contiguous United States
- Temporal resolution: Daily
- Spatial resolution: 4km * 4km (1/25 degree)
- Variables: Maximum temperature, minimum temperature, precipitation accumulation, downward surface shortwave radiation, wind-velocity, humidity (maximum and minimum relative humidity and specific humidity and other derived variables.

Related reference

- Noah S. Diffenbaugh, Frances V. Davenport and Marshall Burke, 2021. Historical warming has increased US crop insurance losses. Environmental Research Letters. [Link](https://iopscience.iop.org/article/10.1088/1748-9326/ac1223/pdf). 
- David B. Lobell and Jennifer A. Burney, 2021. Cleanter air has contributed one-fifth of US maize and soybean yield gains since 1999. Environmental Research Letters. [Link](https://iopscience.iop.org/article/10.1088/1748-9326/ac0fa4/pdf).

## **MACA (projected)**

Multivariate Adaptive Constructed Analogs (MACA) is a statistical method for downscaling Global Climate Models (GCMs) from their native coarse resolution to a higher spatial resolution that reflects observed patterns of daily near-surface meteorology and simulated changes in GCMs experiments. This method has been shown to be slightly preferable to direct daily interpolated bias correction in regions of complex terrain due to its use of a historical library of observations and multivariate approach. 

The dataset embraces 20 CMIP5 GCMs that provided daily output for historical (1950-2005) and future projections (2006-2100) under RCP4.5 and RCP8.5. See its [website](https://climate.northwestknowledge.net/MACA/index.php).

- Coverage: The Contiguous United States
- Temporal resolution: Daily
- Spatial resolution: 4km * 4km (1/25 degree)
- Variables: Maximum temperature, minimum temperature, maximum daily relative humidity, minimum, average daily specific humidity near surface, average daily precipitation, average daily downward shortwave radiation, average daily wind speed, average daily eastward component of wind, and average daily northward component of wind. 

**Note that** Although the dataset has performed bias-corrections, these corrections are just to downscale the GCMs outputs to high-resolution data. When these data are used in emprical climate change assessments, they cannot be directly compared with historical observations that are used to estimate your model. This will cause inconsistency because you are comparing GCMs-based data with observed data. Instead, you have to compare the GCMs-based projected data with GCMs-based historical data and calculate the changes (i.e., delta). 

## **WorldClim (historical + projected)**

WorldClim is a database of high spatial resolution **global** weather and climate data. You can download gridded weather and climate data for [historical](https://www.worldclim.org/data/worldclim21.html) (near current) and [future](https://www.worldclim.org/data/cmip6/cmip6climate.html) conditions.

### **Historical data**

The newest version was released in Jan 2020. Download [here](https://www.worldclim.org/data/worldclim21.html).

- Coverage: Global
- Temporal resolution: Monthly
- Spatial resolution: Available at four spatial resolutions, between 1km * 1km (30 seconds) to 340km * 340km (10 minutes). 
- Variables: Maximum temperature, minimum temperature, total precipitation, solar radiation, wind speed, and water vapor pressure.

### **Projected data**

The projected data are CMIP6 downscaled future climate projections. The [downscaling](https://www.worldclim.org/data/downscaling.html) and calibration (bias correction) was done with WorldClim v2.1 as baseline climate.

The monthly values were averages over 20 year periods (2021-2040, 2041-2060, 2061-2080, 2081-2100). The following spatial resolutions are available (expressed as minutes of a degree of longitude and latitude): [10 minutes](https://www.worldclim.org/data/cmip6/cmip6_clim10m.html), [5 minutes](https://www.worldclim.org/data/cmip6/cmip6_clim5m.html), [2.5 minutes](https://www.worldclim.org/data/cmip6/cmip6_clim2.5m.html), and [30 seconds](https://www.worldclim.org/data/cmip6/cmip6_clim30s.html) (click the links to download).

- Coverage: Global
- Temporal resolution: Monthly
- Spatial resolution: Available at four spatial resolutions, between 1km * 1km (30 seconds) to 340km * 340km (10 minutes). 
- Variables: Maximum temperature, minimum temperature, and total precipitation
- Scenarios: SSP126, SSP245, SSP370, and SSP585.
- GCMs: 23 models.

Related Reference

- Shuai Chen and Binlei Gong, 2021. Response and adaptation of agriculture to climate change: Evidence from China. Journal of Development Economics. [Link](https://www.sciencedirect.com/science/article/pii/S0304387820301322). 



# **Natural disaster data**

This collection includes data on but not limited to storms, wildfires, floods, hurricanes, hail, tornado, etc.

## **NOAA NCEI Storm Events Database**

The Storm Events Database covers overall **48 disasters** (mostly storms) spanning from **January 1950 to January 2022**, as entered by NOAA's National Weather Service (NWS). More importantly, it also covers the damages caused by the disaster, such as deaths, injuries, damages on property and a lot of others. Refer to the [Database Details](https://www.ncdc.noaa.gov/stormevents/) page for more information. 

- Coverage: US
- Time period: Jan 1950 to Jan 2022 (regularly updated)

Related Reference

- Deryugina, T., & Marx, B. 2021. Is the Supply of Charitable Donations Fixed? Evidence from Deadly Tornadoes. American Economic Review: Insights. [Link](https://www.aeaweb.org/articles?id=10.1257/aeri.20200230). 

## **FireCCILT11 Long-term Burned Area Dataset**

This dataset provides the long-term beta global burned area (BA) dataset generated by the [Fire_cci project](https://climate.esa.int/en/projects/fire/). The scope of the project is to provide long-term burned area information for global vegetation and atmospheric modellers. Go to this [link](https://geogra.uah.es/fire_cci/fireccilt11.php) to download.

- Coverage: Global
- Time period: 1982 to 2018
- Temporal resolution: 5km * 5km and 25km * 25km

Related Reference

- Hemant Pullabhotla, Mustafa Zahid, Sam Heft-Neal, Vaibhav Rathi, Marshall, Burke. 2022. Global biomass fires and infant mortality. Submitted to Nature.

# **Natural Resource Data**

## **FAO Land Data - Global Agro-Ecological Zones (GAEZ v4)**

**The Food and Agriculture Organization of the United Nations (FAO)** and the **International Institute for Applied Systems Analysis (IIASA)** have cooperated over several decades to develop and implement the Agro-Ecological Zones (AEZ) modelling framework and databases. The GAEZ v4 spatial data are organized in six themes: (1) Land and Water Resources, (2) Agro-climatic Resources, (3) Agro-climatic Potential Yield, (4) Suitability and Attainable Yield, (5) Actual Yields and Production, and (6) Yield and Production Gaps. There are a list of variables available in the dataset, including land quality, land cover, soil resources, soil suitability, terrain resources, water resources, etc. See this [link](https://gaez.fao.org/) for more details. 

- Coverage: Global
- Time period: Most recent
- Temporal resolution: 1km * 1km and 10km * 10km

Related Reference

- Adamopoulos, T. and Restuccia, D. 2021. Geography and agricultural productivity: Cross-country evidence from micro plot-level data. Review of Economic Studies. [Link](https://academic.oup.com/restud/advance-article-abstract/doi/10.1093/restud/rdab059/6374503?redirectedFrom=fulltext).
- Adamopoulos, T., Brandt L., and Leight Jessica. 2022. Misallocation, selection and productivity: A quantitative analysis with panel data from China. Econometrica.  

