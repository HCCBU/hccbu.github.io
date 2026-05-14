---
layout: page
title: Team 
type: team
menu: main
order: 3
permalink: /team/
---

&nbsp;

## Academic Staff

{% assign faculty_pages = site.people | where:"type","faculty" | where:"list",true | sort:"order" %}
{% for faculty in faculty_pages %}
<article class="pplCard">
	<div class="pplMedia">
		<img class="pplImg" src="{{ site.baseurl }}/assets/people/{{ faculty.img }}" alt="{{ faculty.title }}" />
	</div>

	<div class="pplDesc">
		<h3 class="pplName">{{ faculty.title }}</h3>
		<div class="pplBody">{{ faculty.content | markdownify }}</div>
	</div>
</article>
{% endfor %}

## Research Students

{% assign phd_pages = site.people | where:"type","research-student" | where:"list",true | sort:"order" | reverse %}
{% for phd in phd_pages %}
<article class="pplCard">
	<div class="pplMedia">
		<img class="pplImg" src="{{ site.baseurl }}/assets/people/{{ phd.img }}" alt="{{ phd.title }}" />
	</div>

	<div class="pplDesc">
		<h3 class="pplName">{{ phd.title }}</h3>
		<div class="pplBody">{{ phd.content | markdownify }}</div>
	</div>
</article>
{% endfor %}

## Interns

{% assign intern_pages = site.people | where:"type","intern" | where:"list",true | sort:"order" | reverse %}
{% for intern in intern_pages %}
<article class="pplCard">
	<div class="pplMedia">
		<img class="pplImg" src="{{ site.baseurl }}/assets/people/{{ intern.img }}" alt="{{ intern.title }}" />
	</div>

	<div class="pplDesc">
		<h3 class="pplName">{{ intern.title }}</h3>
		<div class="pplBody">{{ intern.content | markdownify }}</div>
	</div>
</article>
{% endfor %}
