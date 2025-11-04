---
layout: post
title: Paper published in IEEE TVCG, to be presented at IEEE VIS 2025
description: Our paper "DashSpace A Live Collaborative Platform for Immersive and Ubiquitous Analytics" has been published in IEEE TVCG, and will be presented at IEEE VIS 2025 in Vienna, Austria.
image: /assets/images/dashspace.png
author: Panagiotis Ritsos
categories: news
type: post
locale: en 
tags:
  - XR
  - WebXR
  - IEEE
  - "collaborative visualization"
  - "situated analytics"
  - toolkits
related:
list: true
type: home
---

<img src="{{ site.baseurl }}/assets/images/dashspace.png" class="prjImgFlt"  alt="Dashspace">


Our paper [DashSpace: A Live Collaborative Platform for Immersive and Ubiquitous Analytics]({{site.baseurl}}/publicationsYear#Borowsky-et-al-TVCG-2025) has been published in [IEEE Transactions on Visualization and Computer Graphics](https://www.computer.org/csdl/journal/tg) and will be presented in [IEEE VIS 2025](https://ieeevis.org/year/2025/welcome) in Vienna, Austria.

DashSpace is a live collaborative immersive and ubiquitous analytics (IA/UA) platform designed for handheld and head-mounted Augmented/Extended Reality (AR/XR) implemented using WebXR and open standards. To bridge the gap between existing web-based visualizations and the immersive analytics setting, DashSpace supports visualizing both legacy D3 and Vega-Lite visualizations on 2D planes, and extruding Vega-Lite specifications into 2.5D. It also supports fully 3D visual representations using the Optomancy grammar.

To facilitate authoring new visualizations in immersive XR, the platform provides a visual authoring mechanism where the user groups specification snippets to construct visualizations dynamically. The approach is fully persistent and collaborative, allowing multiple participants—whose presence is shown using 3D avatars and webcam feeds—to interact with the shared space synchronously, both co-located and remotely. In our paper, we present three examples of DashSpace in action: immersive data analysis in 3D space, synchronous collaboration, and immersive data presentations.

You can find DashSpace on [Girhub](https://github.com/Webstrates/DashSpace).

### Reference

{% bibliography -f journals --query @*[key=Borowsky-et-al-TVCG-2025] %}

