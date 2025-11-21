---
layout: page
title: Articles & Publications
description: Articles & Publications Page
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

## {{ site.data.project.name }} Articles & Publications

Here we have a list of articles and publications about NuttX.
If you have a suggestion of article to be included to this page,
please send an email to: private@nuttx.apache.org


### Low power embedded software optimization for the NuttX RTOS

Abstract
========

This paper presents the study of the implementation for a new feature that
allows the NuttX RTOS, handling the power consumption in order to optimize it.
The project was focused on controlling different power states, following the
global trend in portable devices.

In this document, it’s explained all the necessary information that was
necessary before to start developing all the modules, and also contains all
the steps that were followed in order to get the ﬁnal system. After this
project, NuttX is able to handle 4 different power modes, this power modes
were designed in order to reduce the power consumption gradually when the
RTOS is idle, and also the system is able to return to its higher performance
mode when it’s required.

Part of the requirements in this project was to built a benchmark application
in order to verify the functionality of this new feature, in the document is
explained not only how this application works, but also all the hardware used
in order to acquire the data that were used in the analysis

Author(s)
=========

Diego Sánchez López

[Download](./files/nuttx_pm.pdf)

### iplite: a lightweight packet filter for NuttX

Abstract
========

The project proposes a lightweight packet filter in a Real-Time
Operating System (RTOS), aiming to provide an additional security layer to
embedded systems, allowing the users to create their security policies
through the filtering process of the ingress network packets. The iplite
firewall was implemented on NuttX OS based on the best practices of the
Linux Netfilter firewall and consists basically of two parts: an
application on user space, homonymously called iplite, which serves to
provide the user CLI, besides a module on kernel space, netfilterlite,
responsible for providing the APIs. As an open-source project, our solution
allows the reproducibility of the experiments and the firewall core adaptation
to other operating systems.

Author(s)
=========

Eduardo Menezes Moraes
Rodrigo Teixeira de Souza
Rafael Oliveira da Rocha
Lourenc¸o Alves Pereira Jr.

[Download](./files/iplite.pdf)

### NuttX RTOS Driver for Single Unshielded Twisted Pair Communication

Abstract
========

The thesis aims to evaluate and integrate a low-cost solution for a small
area multidrop communication with focus on reliability and real-time
predictability usable in embedded systems. Based on a review of applicable
standards, an integration of cheap MCU devices with 10BASE-T1S Ethernet SPI
MAC-PHYs is proposed.

The Apache NuttX RTOS is proposed as a suitable operating system for the MCU
devices. An overview of NuttX network driver internals is provided in a
dedicated chapter to provide background for the major outcome of the project
– the implementation of Onsemi NCV7410 SPI MAC-PHY NuttX driver for the NuttX
operating system.

At the end, the methods used for an evaluation and testing of the implemented
driver are discussed. The system properties are then verified on a simple
drive-by-wire demonstrator.

Author(s)
=========

Michal Matiáš

[Download](./files/nuttx_10baset1s.pdf)
