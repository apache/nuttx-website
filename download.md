---
layout: page
title: Downloads
description: Project Downloads page
group: nav-right
---
<!--
{% comment %}
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to you under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}
-->
{% include JB/setup %}

## {{ site.data.project.name }} Downloads

{{ site.data.project.name }} is released as two source artifacts one for the OS
and another for the integrated Apps.

### Release Artifacts

{% assign releases = site.releases  | where: 'released', 'true' | where: 'apache', 'true' | sort: 'date' %}
{% if releases.size > 0 %}
<table class="table">
    <tr>
        <th class="col-md-1">Version</th>
        <th>Summary</th>
        <th class="col-md-1 text-right">Archive</th>
        <th class="col-md-1 text-right">SHA-512</th>
        <th class="col-md-1 text-right">Signature</th>
        <th class="col-md-2 text-right">Release&nbsp;Date</th>
    </tr>
    {% for release in releases reversed %}
        {% if release.title %}
            <tr>
                <td style="vertical-align: middle; line-height: 2.5em;" class="col-md-1"><a href="{{ release.url | prepend: site.baseurl }}">{{ release.title }}</a></td>
                <td style="vertical-align: middle;" >{{ release.summary }}</td>
                <td style="vertical-align: middle;" class="col-md-1 text-right"><a href="{{release.artifact-root}}/{{release.source-os-dist}}">OS</a>/<a href="{{release.artifact-root}}/{{release.source-app-dist}}">Apps</a></td>
                <td style="vertical-align: middle;"><a href="{{release.artifact-root}}/{{release.source-os-dist}}.sha512">OS</a>/<a href="{{release.artifact-root}}/{{release.source-app-dist}}.sha512">Apps</a></td>
                <td style="vertical-align: middle;"><a href="{{release.artifact-root}}/{{release.source-os-dist}}.asc">OS</a>/<a href="{{release.artifact-root}}/{{release.source-app-dist}}.asc">Apps</a></td>
                <td style="vertical-align: middle;" class="col-md-2 text-right">{{ release.date | date: "%Y-%m-%d" }}</td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

Choose a source distribution in *tar.gz* format,
and [verify](http://www.apache.org/dyn/closer.cgi#verify)
using the corresponding *pgp* signature (using the committer file in
[KEYS](https://downloads.apache.org/{{ site.data.project.incubator_slash_name }}/KEYS)).
If you cannot do that, the *sha512* hash file may be used to check that the
download has completed OK.

For fast downloads, current source distributions are hosted on mirror servers.

For security, hash and signature files are always hosted at
[Apache](https://downloads.apache.org/incubator/nuttx/).
{% else %}
<div class="alert alert-warning">
No official Apache releases have been made yet!
</div>
{% endif %}

<div class="alert alert-warning">
    All releases below are from prior to Apache NuttX's acceptance into the
    Incubator. They are not Apache Software Foundation releases, and are
    licensed primarily under the
    <a href="https://opensource.org/licenses/BSD-3-Clause">BSD-3-Clause license </a>.
    See COPYING file for more details on a specific releases licensing.
</div>

{% assign releases = site.releases  | where: 'released', 'true' | where: 'apache', 'false' | sort: 'date' %}
<table class="table">
    <tr>
        <th class="col-md-1">Version</th>
        <th>Summary</th>
        <th class="col-md-1 text-right">Archive</th>
        <th class="col-md-2 text-right">Release&nbsp;Date</th>
    </tr>
    {% for release in releases reversed %}
        {% if release.title %}
            <tr>
                <td style="vertical-align: middle; line-height: 2.5em;" class="col-md-1"><a href="{{ release.url | prepend: site.baseurl }}">{{ release.title }}</a></td>
                <td style="vertical-align: middle;" >{{ release.summary }}</td>
                <td style="vertical-align: middle;" class="col-md-1 text-right"><a href="{{release.artifact-root}}{{release.source-os-dist}}">OS</a>/<a href="{{release.artifact-root}}{{release.source-app-dist}}">Apps</a></td>
                <td style="vertical-align: middle;" class="col-md-2 text-right">{{ release.date | date: "%Y-%m-%d" }}</td>
            </tr>
        {% endif %}
    {% endfor %}
</table>
