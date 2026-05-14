---
layout: project
title: "LUCST: A novel toolkit for Land Use Land Cover change assessment in the SWAT+ model to support flood management decisions <span class='fundingInfo '> - (09/2020 - 06/2023, KESS + WDNA)</span>"
project_status: funded
order: 7
type: research
tags:
  - Environment
  - InfoVis
  - Analytics
  - AI
  - UrbanPlan
image:
  url: /assets/images/LUCSTthumb.png
  title: "LUCST"
  alt: "LUCST - Land Use Change SWAT+ Toolkit"
---

<img src="{{ site.baseurl }}/assets/images/LUCSTc.png" class="prjImgFlt"  alt="LUCST">


Land Use Land Cover (LULC) change is widely recognised as one of the most important factors impacting river basin hydrology. It is therefore imperative that the hydrological impacts of various LULC changes are considered for effective flood management strategies and future infrastructure decisions within a catchment. LULC changes in a catchment are typically modelled by the Soil and Water assessment Tool (SWAT) through alterations to the input files that define the properties of these HRUs. However, to our knowledge at least, the process of making such changes to the SWAT input files is often cumbersome and non-intuitive. This affects the usability of SWAT as a decision support tool amongst a wider pool of applied users (e.g., engineering teams in environmental regulatory agencies and local authorities).  

In this study, we address this issue by developing a user-friendly toolkit that:  

- allows the end user to specify, through a Graphical User Interface (GUI), various types of LULC changes at multiple locations within their study catchment, 
- runs the SWAT+ model (the latest version of SWAT) with the specified LULC changes, and
- enables interactive visualisation of the different SWAT+ output variables to quantify the hydrological impacts of these scenarios.  

Importantly, our toolkit does not require the end user to have any operational knowledge of the SWAT+ model to use it as a decision support tool. 

The work is done in collaboration with the [School of Natural Sciences](https://www.bangor.ac.uk/natural-sciences/index.php.en) and Gwynedd Council’s consultancy arm [Ymgynghoriaeth Gwynedd Consultancy (YGC)](https://ygc.cymru/), and  was funded by YGC and [Knowledge Economy Skills Scholarships (KESS 2)](http://kess2.ac.uk/), a pan-Wales higher level skills initiative led by Bangor University on behalf of the HE sector in Wales. It is part funded by the Welsh Government’s European Social Fund (ESF) convergence programme for West Wales and the Valleys. 

In February 2022 AI extensions to the project received funding from the [Wales Data Nation Accelerator](https://www.cardiff.ac.uk/__data/assets/pdf_file/0006/2520393/Wales-Data-Nation-Accelerator.pdf), as a Sprint Project.

### Publicity

Our work on LUCST has appeared in the [North Wales Chronicle](https://www.northwaleschronicle.co.uk/news/19802617.bangor-researchers-gwynedd-council-manage-flood-risk-using-visual-analytics/).

### Related Publications  
  
{% bibliography -f journals --query @*[key=Rigby-et-al-EnvModSoft-2022] %}

{% bibliography -f posters --query @*[key=Rigby-et-al-Poster-WDNA-2022] %}

{% bibliography -f posters --query @*[key=Rigby-et-al-Poster-EGU-2021] %}
