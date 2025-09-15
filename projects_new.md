---
layout: page
title: Research
type: research
menu: none
---

<p>Here you can find information about the main current research projects and themes I am involved with. You can also have a look at my <a href="{{site.url}}/publications/">publications</a> page for recent papers, projects, videos, book chapters and demos.</p>

{% include tags.html %}

{% assign current_projects = site.projects | where: 'current', true | sort:"order"   %}

{% assign past_projects = site.projects | where: 'current', false | sort:"order" %}

{% assign my_projects = site.projects | sort:"order" %}

<div class="mysmallmargin">

<h2>Ongoing</h2>

<div class="mygrid">
{% for project in current_projects reversed %}
<div class="{%for tag in project.tags %}{{ tag | append: ' ' }}{% endfor %}">
  <!--------->
  <div class="project-card" style="border-left: 2px red solid; padding-left: 1em;">
    <div class="project-image">
      <a href="{{ project.url }}"><img src="{{ site.baseurl }}{{ project.image.url }}" alt="{{ project.image.alt }}" title="{{ project.image.title }}" style="width:10em;"></a>
    </div>
    <div class="project-text">
      <span style="">{{ project.image.title }}</span>
      <p>{{ project.desc }}</p>

      <p>Example Publications</p>


  {% for pub in project.pubs %}


  {% bibliography -f journals --query @*[key={{ pub }}] %}

{% bibliography -f posters --query @*[key=Williams-et-al-VIS-2020] %}

  {% endfor %}


    </div>
  </div>
  <!--------->
</div>
{% endfor %}
</div>

<h2>Completed</h2>

<div class="mygrid">
{% for project in past_projects reversed %}
<div class="projects-project {%for tag in project.tags %}{{ tag | append: ' ' }} {% endfor %}">
<div class="projects-photo">
  <a href="{{ project.url }}">
      <img src="{{ project.image.url }}" alt="{{ project.image.alt }}" title="{{ project.image.title }}">
      <div class="projects-name">
      <p>{{ project.image.title }}</p>
    </div>
  </a>
</div><!-- .projects-photo -->
</div>
{% endfor %}
</div>

</div>
