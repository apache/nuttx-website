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

## {{ site.data.project.name }} Articles & Publications

Here we have a list of articles and publications about NuttX.
If you have a suggestion of article to be included to this page,
please send an email to: private@nuttx.apache.org .


### NXDART: Distributed Automated Build and Runtime Test Environment for Apache NuttX RTOS

#### Abstract

This paper presents the concept and initial implementation of a distributed
automated build and runtime test environment for NuttX, called NXDART.
NuttX is Apache 2.0 licensed Free and Open-Source (FOSS) Real-Time Operating
System (RTOS), created by Gregory Nutt and released to the public in 2007,
with strong focus on portability, small footprint, scalability,
and compatibility with POSIX, ANSI, and other standards commonly used
by Unix and other RTOSes (e.g. VxWorks).

NuttX community consists of volunteering hobbyists, academia,
and small/medium/large enterprise professionals from around the world.
NuttX supports over 15 different 8..64-bit CPU architectures (RISC-V, ARM,
ARM64, AVR, CEVA, HC, MIPS, Misoc, OpenRISC, Renesas, SPARC, TriCore, x86,
AMD64, Xtensa, Z16, Z80, FPGA) on over 340 unique hardware boards
with over 1600 example target firmware configurations.
Project development intensity is measured in thousands of files changed
every month with hundreds thousands of code lines modifications.

In order to assure self-compatibility and long term maintenance
for supported platform all new source code contributions are always processed
manually by independent reviewers and automated Continuous Integration (CI)
software tools.
Unfortunately, not all breaking changes can be detected that way.
Code may build for various architectures and even run correctly
on emulators but it may still not work as expected on real world hardware.
Therefore, comprehensive runtime tests are required.

Hardware testing of hundreds of different devices in one place turned out
impossible for our free and community driven project. To address this problem
we have invented distributed hardware-in-the-loop (HIL) test environment
that is easy to set up and maintain as it reuses hardware components
already owned by hundreds of users around the world.
This approach assures maximum coverage of possible boards
and build environments, independence and uninterrupted redundant availability
of build and runtime test automation, with feedback logs reporting directly
to the project upstream, at virtually zero cost.

#### Author(s)

Tomasz CEDRO, Gregory NUTT, Lup Yuen LEE, Grzegorz POŁUDNIEWSKI, Szymon WILK,
Wojciech GLINKOWSKI.

[PDF]({{ site.baseurl }}/static/articles/NuttX-2026-CedroNuttLeePoludniewkiWilkGlinkowski-NXDART-DistributedAutomatedBuildAndRuntimeTestEnvironmentForApacheNuttXRTOS-IJET-10_5571_Cedro_L_sk.pdf)
/
[IJET](https://ijet.pl/index.php/ijet/article/view/10.24425-ijet.2026.157953)
/
[DOI](https://doi.org/10.24425/ijet.2026.157953)

---


### NuttX RTOS Driver for Single Unshielded Twisted Pair Communication

#### Abstract

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

#### Author(s)

Michal Matiáš.

[PDF]({{ site.baseurl }}/static/articles/NuttX-2025-Matias-NuttXRTOSDriverForSingleUnshieldedTwistedPairCommunication.pdf)
/
[CVUT](https://dspace.cvut.cz/handle/10467/123231)

---


### iplite: a lightweight packet filter for NuttX

#### Abstract

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

#### Author(s)

Eduardo Menezes Moraes, Rodrigo Teixeira de Souza, Rafael Oliveira da Rocha,
Lourenc¸o Alves Pereira Jr. .

[PDF]({{ site.baseurl }}/static/articles/NuttX-2022-MoraesSouzaRochaPereira-IpliteALightweightPacketFilterForNuttX.pdf)
/
[DOI](https://doi.org/10.5753/sbseg_estendido.2022.227059)

---


### mnemofs: A NAND flash file-system for Apache NuttX

#### Abstract

NAND flash memory is a key enabler for modern sensor systems due to its low cost,
compact size, and low power consumption. However, its unique characteristics such
as erase-before-write requirements, bad block management and randomized bit-flips
demand a specialized file system design. This letter proposes mnemofs, a file
system that incorporates wear leveling, power-loss resilience, block garbage
collection, low RAM consumption and small binary size to maintain reliability
while utilizing NAND flash’s advantages in embedded systems. We analyze tradeoffs
propose enhancements for sensor applications where robust, long-term data storage
is critical.

#### Author(s)

Saurav Pal, Alan C. Assis.

[PDF]({{ site.baseurl }}/static/articles/NuttX-2021-PalAssis-MenmofsANANDFlashFilesystemForApacheNuttX.pdf)

---


### Low power embedded software optimization for the NuttX RTOS

#### Abstract

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

#### Author(s)

Diego Sánchez López.

[PDF]({{ site.baseurl }}/static/articles/NuttX-2013-Lopez-LowPowerEmbeddedSoftwareOptimizationForTheNuttXRTOS.pdf)
/
[CorpusID](https://api.semanticscholar.org/CorpusID:67682927)

