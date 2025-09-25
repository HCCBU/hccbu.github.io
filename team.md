---
layout: page
title: Team 
type: team
menu: main
order: 3
---




&nbsp;

## Academic Staff

{% assign faculty_pages = site.faculty | sort:"order" %}
{% for faculty in faculty_pages %}
  {{ faculty.output }}
{% endfor %}

---
&nbsp;

## Research Assistants

{% assign ras_pages = site.ras | sort:"order" | reverse %}
{% for ra in ras_pages %}
  {{ ra.output }}
{% endfor %}


---
&nbsp;

## Research Students

{% assign phd_pages = site.phd | sort:"order" | reverse %}
{% for phd in phd_pages %}
  {{ phd.output }}
{% endfor %}

---
&nbsp;

## Former Staff and Students

{% assign former_pages = site.former | sort:"order" | reverse %}
{% for node in former_pages %}
  {{ node.output }}
{% endfor %}




 

 
 

