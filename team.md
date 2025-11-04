---
layout: page
title: Team 
type: team
menu: main
order: 3
---






## Academic Staff

{% assign faculty_pages = site.faculty | where: 'list', true | sort:"order" %}
{% for faculty in faculty_pages %}
{{ faculty.output }}
{% endfor %}






<!-- Research Assistants (works only if members in list) -->
{% assign ras_pages = site.ras | where: 'list', true | sort:"order" | reverse %}
{% unless ras_pages == empty %}

&nbsp;

## Research Assistants

{% for ra in ras_pages %}
{{ ra.output }}
{% endfor %} 
{% endunless %}





<!-- Research Students (works only if members in list) -->
{% assign phd_pages = site.phd | where: 'list', true | sort:"order" | reverse %}
{% unless phd_pages == empty %}

&nbsp;

## Research Students

{% for phd in phd_pages %}
{{ phd.output }}
{% endfor %} 
{% endunless %}




<!-- Former Staff and Students (works only if members in list) -->
{% assign former_pages = site.former | where: 'list', true | sort:"order" | reverse %}
{% unless former_pages == empty %}

&nbsp;

## Former Staff and Students

{% for node in former_pages %}
{{ node.output }}
{% endfor %}
{% endunless %}



 

