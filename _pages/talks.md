---
layout: page
permalink: /talks/
title: talks
description: Ye Ji's talks in reversed chronological order.
nav: true
nav_order: 2
disable_badges: true
---

{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>

{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}