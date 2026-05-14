---
layout: post
title: Papers for presentation at IEEE VIS2025
description: This year, at IEEE VIS2025 we will present one VIS paper, one TVCG paper, one tutorial, and one workshop paper.
image: /assets/images/vis2025_logo.png
author: Panagiotis Ritsos
categories: news
type: post
locale: en 
tags:
  - XR
  - WebXR
  - situated 
  - analytics
  - visualization 
  - authoring
  - literacy
related:
list: true
type: home
---

<img src="{{ site.baseurl }}/assets/images/vis2025_logo.png" class="prjImgFlt"  alt="IEEE VIS2025 Banner and Logo">


We are participating, with several works, at [IEEE VIS2025](https://ieeevis.org/year/2025/welcome), to be held in Vienna, Austria. 

We will be presenting our VIS paper ["Critical Thinking in Data Visualisation: A Framework for Contextual Scenarios"]({{site.baseurl}}/publicationsYear#Roberts-et-al-TVCG-2026), which introduces the Critical Design Strategy (CDS)---a structured heuristic evaluation method designed to facilitate the examination of visualisation designs through reflection and critical thought. 

We will also be presenting our IEEE TVCG Paper ["DashSpace: A Cross-Reality Toolkit for Immersive Analytics"]({{site.baseurl}}/publicationsYear#Borowski-et-al-TVCG-2025), which introduces DashSpace, a cross-reality toolkit designed to support immersive analytics. This toolkit allows users to create and manipulate visualizations in both 2D and 3D environments, facilitating a more integrated approach to data analysis across different platforms. DashSpace is part of our ongoing collaboration with Aarhus Unniversity on anywhere, anytime analytics toolkits, along with our recent UIST'25 paper ["Spatialstrates: Cross-Reality Collaboration through Spatial Hypermedia"]({{site.baseurl}}/publicationsYear#Borowski-et-al-UIST-2025).

Related to our DashSpace project, we will be presenting a tutorial on ["Live Collaborative Immersive Analytics Development with DashSpace"]({{site.baseurl}}/publicationsYear#Borowski-et-al-IEEEVIS205-Tutorial). This tutorial will cover the DashSpace/SpatialStrate platform's architecture, its use of web technologies, and how it supports cross-reality collaboration.

We are also presenting two workshop papers and one poster:

In the EduVis workshop, we present a paper titled ["From Data to Insight: Using Contextual Scenarios to Teach Critical Thinking in Data Visualisation"]({{site.baseurl}}/publicationsYear#Roberts-et-al-EduVis-2025), which discusses the use of contextual scenarios to enhance data visualization education.

In the workshop on Visual Analytics in Healthcare (VAHC), we present a paper titled ["Embedding Empathy into Visual Analytics: A Framework for Person-Centred Dementia Care"]({{site.baseurl}}/publicationsYear#Owen-et-al-VAHC-2025), which introduces an empathy-centred visualisation framework designed to support person-centred dementia care.


Lastly, we present a poster titled ["Explanatory Visualization with LLMs for Employment Law"]({{site.baseurl}}/publicationsYear#Ogbonda-et-al-Poster-VIS2025), which explores the use of visualization as means of explaining complex legal concepts in employment law, leveraging large language models (LLMs).


You can find more details on these papers following the reference links below.

### Reference

{% bibliography -f journals --query @*[key=Roberts-et-al-TVCG-2026] %}

{% bibliography -f journals --query @*[key=Borowski-et-al-TVCG-2025] %}

{% bibliography -f tutorials --query @*[key=Borowski-et-al-IEEEVIS205-Tutorial] %}

{% bibliography -f workshops --query @*[key=Roberts-et-al-EduVis-2025] %}

{% bibliography -f workshops --query @*[key=Owen-et-al-VAHC-2025] %}

{% bibliography -f posters --query @*[key=Ogbonda-et-al-Poster-VIS2025] %}