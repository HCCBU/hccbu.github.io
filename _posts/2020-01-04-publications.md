---
layout: post
title: [Journal paper in IEEE TVCG]
categories: news
tags:
  - IEEE
  - XR
  - InfoVis
  - WebXR
  - immersive 
  - analytics
related:
list: true
type: home
---

<img src="{{ site.baseurl }}/assets/images/vria_out_s.png" alt="WebVR-based visualizations built with VRIA" style="margin: 0 auto; width: 800px;">

Our journal article ["VRIA: A Web-based Framework for Creating Immersive Analytics Experiences"]({{site.baseurl}}/publications#Butcher-et-al-TVCG-2020) has been accepted in [_IEEE Transactions of Visualization and Computer Graphics (TVCG)_](https://www.computer.org/web/tvcg).

&#60;VRIA&#62; is a framework for building Immersive Analytics solutions in VR, using standards-based Web-technologies. It is built using WebVR, A-Frame and React and the resulting VR solutions can be experienced through a WebVR-compliant browser on a variety of devices, ranging from smartphones to HMD-equipped desktop computers. &#60;VRIA&#62; uses a declarative format for specifying visualization types through simple configuration files, simplifying visualization prototyping, data binding and interaction configuration.

&#60;VRIA&#62;’s visualization creation workflow (below, Figure 1.) provides different development paths for novice, intermediate and expert developers, and makes (optional) use of a dedicated visualization builder (show at the top), a Web-based interface that enables developers to easily prototype IA experiences and export their visualization configurations. These configurations can be further customized via the &#60;VRIA&#62; API to create new immersive depictions. Our paper presents a series of use cases that demonstrate the functionality and versatility of &#60;VRIA&#62;, including early extensions to MR space.

{% figure process_v2-final png 'Visualization creation workflow demonstrating how &#60;VRIA&#62;  is suitable for users with different levels of programming experience. Novice users can upload datasets to the &#60;VRIA&#62;  builder tool and quickly produce immersive visualizations without coding. Intermediate users can use the builder to create a visualization config file or write one from scratch to use in their application. Finally, advanced users can make use of &#60;VRIA&#62; ’s API to develop additional features.'  %}

More information on the VRIA framework can be found [here](https://github.com/vriajs).

### Reference

{% bibliography -f journals --query @*[key=Butcher-et-al-TVCG-2021] %}
