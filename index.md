---
layout: page
title: Home
tagline: Apache Project !
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

## Apache NuttX

NuttX is a free and open-source (FOSS) real-time operating system (RTOS)
with an emphasis on standards compliance and small footprint.
Scalable from 8-bit to 64-bit microcontroller environments,
the primary governing standards in NuttX are POSIX and ANSI standards.
Additional standard APIs from Unix and other common RTOS's (such as VxWorks)
are adopted for functionality not available under these standards,
or for functionality that is not appropriate for deeply-embedded environments
(such as fork()).


## Get NuttX

Release packages are available [here]({{ site.baseurl }}/download).
We use three GIT repositories to develop the project:
[RTOS]({{ site.data.project.source_repository_os_mirror }}),
[Applications]({{ site.data.project.source_repository_apps_mirror }}),
and [Website]({{ site.data.project.source_repository_website_mirror }}).
Documentation is part of the RTOS repository and then built and hosted online.


## Join Us

NuttX is developed and maintained by an international
[group of volunteers]({{ site.baseurl }}/community-members) from all around the
world.  Please take a look at our [community]({{ site.baseurl }}/community)
page to see how to join us and contribute to the project.

[Mailing list]({{ site.data.project.dev_list_archive_mailarchive }}) is our
main communication channel, but we are also present on various social media
platforms such as
[Discord]({{ site.data.project.socialmedia_discord }}),
[Hackster]({{ site.data.project.socialmedia_hackster }}),
[LinkedIn]({{ site.data.project.socialmedia_linkedin_company }}),
[Reddit]({{ site.data.project.socialmedia_reddit }}).

[NuttX Channel on YouTube]({{ site.data.project.socialmedia_youtube }}) contains
many demos, tutorials, and hands-on exercises, as well as events videos.


## Documentation

Full project documentation can be found [here]({{ site.baseurl }}/docs/latest).
Scientific papers are [here]({{ site.baseurl }}/articles).


## Online Demo

NuttX is incredibly portable. It runs on over 15 different CPU architectures,
over 300 popular embedded hardware boards and development kits, provides
more than 1500 ready to use firmware configuration templates for your project.
See yourself, try out the [NuttX WebAssembly demo]({{ site.baseurl }}/demo).


## Community Events

### International Workshop 2025

The [Apache NuttX International Workshop]({{ site.data.project.community_events }})
is organized every year. You can attend online or in person for free.
This year we meet on 16-17th October 2025 in Costa Rica.
We hope to meet with Gregory Nutt on site. See you there!

Please visit [events website]({{ site.data.project.community_events }}) for more details.
You can join the event at [LinkedIn]({{ site.data.project.community_events_workshop_2025_linkedin_event }}).
[Call For Papers]({{ site.data.project.community_events_workshop_2025_cfp }}) is now open!

The scope of the workshop is the Apache Nuttx® Real Time Operating System, the
tools used for its design, development, deployment, debugging, and maintenance,
the applications that use it, and the hardware on which it typically runs.
The target audience is embedded systems practitioners across both industry and
academia.
