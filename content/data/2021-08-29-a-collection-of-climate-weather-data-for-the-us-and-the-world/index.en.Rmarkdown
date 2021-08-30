---
title: A collection of climate/weather data for the US and the world
author: admin
date: '2021-08-29'
slug: a-collection-of-climate-weather-data-for-the-us-and-the-world
categories:
  - Data
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2021-08-29T21:51:18-05:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []

output:
  blogdown::html_page:
    toc: true




---

This post is to collect the climate/weather data I have seen in the literature for the United States and probably the world. This collection differs from the data sources that are well known by scholars, such as data from NOAA (mostly observations from ground stations). Instead, it covers gridded data that are climate model output. I will also attach the associated paper that uses the data. 

In addition to the climate and weather data, I will also post some natural disaster data, such as storm, wildfire, hail, tornado, etc. The ideal data should not only include the information of the disasters, but the associated damages. 

# Historical climate/weather data

## gridMET

gridMET is a dataset of daily high-spatial resolution (~4-km, 1/24th degree) surface meteorological data covering the contiguous US from 1979-yesterday (updated daily). The dataset blends the [PRISM](https://prism.oregonstate.edu/) with the high temporal resolution data from the National Land Data Assimilation System ([NLDAS](https://ldas.gsfc.nasa.gov/)). See the [website](http://www.climatologylab.org/gridmet.html)

- Coverage: The Contiguous United States
- Temporal resolution: Daily
- Spatial resolution: 4km * 4km (1/25 degree)
- Variables: Maximum temperature, minimum temperature, precipitation accumulation, downward surface shortwave radiation, wind-velocity, humidity (maximum and minimum relative humidity and specific humidity and other derived variables.

Related reference

- Noah S. Diffenbaugh, Frances V. Davenport and Marshall Burke, 2021. Historical warming has increased US crop insurance losses. Environmental Research Letters. [Link](https://iopscience.iop.org/article/10.1088/1748-9326/ac1223/pdf). 
- David B. Lobell and Jennifer A. Burney, 2021. Cleanter air has contributed one-fifth of US maize and soybean yield gains since 1999. Environmental Research Letters. [Link](https://iopscience.iop.org/article/10.1088/1748-9326/ac0fa4/pdf).


# Projected climate/weather data

## MACA

Multivariate Adaptive Constructed Analogs (MACA) is a statistical method for downscaling Global Climate Models (GCMs) from their native coarse resolution to a higher spatial resolution that reflects observed patterns of daily near-surface meteorology and simulated changes in GCMs experiments. This method has been shown to be slightly preferable to direct daily interpolated bias correction in regions of complex terrain due to its use of a historical library of observations and multivariate approach. 

The dataset embraces 20 CMIP5 GCMs that provided daily output for historical (1950-2005) and future projections (2006-2100) under RCP4.5 and RCP8.5. See its [website](https://climate.northwestknowledge.net/MACA/index.php).

- Coverage: The Contiguous United States
- Temporal resolution: Daily
- Spatial resolution: 4km * 4km (1/25 degree)
- Variables: Maximum temperature, minimum temperature, maximum daily relative humidity, minimum, average daily specific humidity near surface, average daily precipitation, average daily downward shortwave radiation, average daily wind speed, average daily eastward component of wind, and average daily northward component of wind. 


**Note that** Although the dataset has performed bias-corrections, these corrections are just to downscale the GCMs outputs to high-resolution data. When these data are used in emprical climate change assessments, they cannot be directly compared with historical observations that are used to estimate your model. This will cause inconsistency because you are comparing GCMs-based data with observed data. Instead, you have to compare the GCMs-based projected data with GCMs-based historical data and calculate the changes (i.e., delta). 



# Natural disaster data

I just read a paper by Dr. Tatyana Deryugina and her coauthor about charitable donations and deadly tornadoes. The question is do those tornadoes trigger a relocation of existing donations or increase the donations? In the paper, they used an informative disaster dataset provided by NOAA. 

The database covers overall 48 disasters spanning from January 1950 to May 2021, as entered by NOAA's National Weather Service (NWS). More importantly, it also covers the damages caused by the disaster, such as deaths, injuries, damages on property and a lot of others. 

Check the website [here](https://www.ncdc.noaa.gov/stormevents/). 


