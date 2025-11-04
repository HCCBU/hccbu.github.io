---
layout: post
title: Papers accepted by IEEE TVCG/ VIS2024
categories: news
tags:
  - XR
  - WebXR
  - IEEE
  - "glyphs"
  - "situated analytics"
  - toolkits
  - "visualization authoring"
related:
list: true
type: home
---

<img src="{{ site.baseurl }}/assets/images/vi2024_logo.png" class="prjImgFlt"  alt="IEEE VIS2024 Banner and Logo">


We presented two papers in [IEEE VIS2024](https://ieeevis.org/year/2024/welcome), published in [IEEE Transactions on Visualization and Computer Graphics](https://www.computer.org/csdl/journal/tg), in 2025.

In our paper [Attention-Aware Visualization: Tracking and Responding to User Perception Over Time]({{site.baseurl}}/publicationsYear#Srinivasan-et-al-TVCG-2025), we propose the notion of Attention-Aware Visualizations (AAVs) that track the user's perception of a visual representation over time and feed this information back to the visualization. We present two separate implementations of AAV: a 2D data-agnostic method for web-based visualizations that can use an embodied eyetracker to capture the user's gaze, and a 3D data-aware one that uses the stencil buffer to track the visibility of each individual mark in a visualization.


In our paper [Path-based Design Model for Constructing and Exploring Alternative Visualisations]({{site.baseurl}}/publicationsYear#Jackson-et-al-TVCG-2025), we present a path-based design model and system for designing and creating visualisations. Our model represents a systematic approach to constructing visual representations of data or concepts following a predefined sequence of steps. Through our implementation we showcase the model in action. We (1) introduce, define and explain the path model and discuss possibilities for its use, (2) present our implementation, results, and evaluation, and (3) demonstrate and evaluate an application of its use on a mobile watch.

You can find more details on these papers following the reference links below.

### Reference

{% bibliography -f journals --query @*[key=Srinivasan-et-al-TVCG-2025] %}

{% bibliography -f journals --query @*[key=Jackson-et-al-TVCG-2025] %}
