---
layout: page
title: Community
description: Project Community Page
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

<br/><br/><br/>

## {{ site.data.project.name }} Community

Every volunteer project obtains its strength from the people involved in it. We invite you to participate as much or as little as you choose.

You can:

* Use our project and provide feedback.
* Provide us with use-cases.
* Report bugs and submit patches.
* Contribute code or documentation.

Visit the [Contributing] page for more information.


### Mailing list

Get help using {{ site.data.project.short_name }} or contribute to the project on our mailing lists. This is our preferred communication channel and all important discussions take place here.

{% if site.data.project.user_list %}
* [site.data.project.user_list](mailto:{{ site.data.project.user_list }}) is for usage questions, help, and announcements. [subscribe](mailto:{{ site.data.project.user_list_subscribe }}?subject=send this email to subscribe),     [unsubscribe](mailto:{{ site.data.project.dev_list_unsubscribe }}?subject=send this email to unsubscribe), [archives]({{ site.data.project.user_list_archive_mailarchive }})
{% endif %}
* [{{ site.data.project.dev_list }}](mailto:{{ site.data.project.dev_list }}) is for people who want to contribute code to {{ site.data.project.short_name }}. [subscribe](mailto:{{ site.data.project.dev_list_subscribe }}?subject=send this email to subscribe), [unsubscribe](mailto:{{ site.data.project.dev_list_unsubscribe }}?subject=send this email to unsubscribe), [archives]({{ site.data.project.dev_list_archive_mailarchive }})
* [{{ site.data.project.commits_list }}](mailto:{{ site.data.project.commits_list }}) is for commit messages and patches to {{ site.data.project.short_name }}. [subscribe](mailto:{{ site.data.project.commits_list_subscribe }}?subject=send this email to subscribe), [unsubscribe](mailto:{{ site.data.project.commits_list_unsubscribe }}?subject=send this email to unsubscribe), [archives]({{ site.data.project.commits_list_archive_mailarchive }})


### Social Media

The mailing list and project website is our central hub of information, but there are several social media channels where you can find interesting videos, updates, DIY projects that may help you work with NuttX RTOS.

* YouTube: https://www.youtube.com/@nuttxchannel.
* Hackster: https://www.hackster.io/nuttx.
* LinkedIn: https://www.linkedin.com/company/nuttx , https://www.linkedin.com/groups/12002792.


### Issue tracker

#### Bug Reports

Found a bug? Send an email to the dev list {{ site.data.project.dev_list }}.

Before submitting an issue, please:

* Verify that the bug does in fact exist.
* Search the mailing list [archives]({{ site.data.project.dev_list_archive_mailarchive }}) to verify there is no existing issue reporting the bug you've found.
* Consider tracking down the bug yourself in the NuttX's source and submitting a patch along with your bug report. This is a great time saver for the NuttX developers and helps ensure the bug will be fixed quickly.

#### Feature Requests

Enhancement requests for new features are also welcome. The more concrete and rational the request is, the greater the chance it will be incorporated into future releases.

Please note that all important changes must be first discussed on our mailing list!


### Source Code

The project sources are in two repositories:
* Core OS accessible via the [source code repository]({{ site.data.project.source_repository_os }}) which is also mirrored in [GitHub]({{ site.data.project.source_repository_os_mirror }})
* Apps accessible via the [source code repository]({{ site.data.project.source_repository_apps }}) which is also mirrored in [GitHub]({{ site.data.project.source_repository_apps_mirror }})


### Website Source Code

The project website sources are accessible via the [website source code repository]({{ site.data.project.website_repository }}) which is also mirrored in [GitHub]({{ site.data.project.website_repository_mirror }})
