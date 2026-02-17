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

<!-- FEATURE HIGHLIGHTS SECTION -->
<section class="features-section">
  <div class="section-container">
    <div class="section-header">
      <h2 class="section-title">Key Features</h2>
      <p class="section-subtitle">A real-time operating system designed for embedded systems</p>
    </div>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card-header">
          <div class="feature-icon">
            <img src="{{ site.baseurl }}/static/icons/cpu-architecture.svg" alt="CPU Architecture" width="24" height="24">
          </div>
          <h3 class="feature-title">15+ CPU Architectures</h3>
        </div>
        <p class="feature-description">Runs on ARM, RISC-V, x86, Xtensa, and more. Supports multiple CPU architectures and hardware platforms.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-card-header">
          <div class="feature-icon">
            <img src="{{ site.baseurl }}/static/icons/hardware-boards.svg" alt="Hardware Boards" width="24" height="24">
          </div>
          <h3 class="feature-title">300+ Hardware Boards</h3>
        </div>
        <p class="feature-description">Extensive board support from popular development kits to custom hardware.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-card-header">
          <div class="feature-icon">
            <img src="{{ site.baseurl }}/static/icons/configuration.svg" alt="Configuration Templates" width="24" height="24">
          </div>
          <h3 class="feature-title">1500+ Configuration Templates</h3>
        </div>
        <p class="feature-description">Pre-configured builds for rapid prototyping and production deployment.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-card-header">
          <div class="feature-icon">
            <img src="{{ site.baseurl }}/static/icons/community-people.svg" alt="Open Community" width="24" height="24">
          </div>
          <h3 class="feature-title">Open Community</h3>
        </div>
        <p class="feature-description">Developed and maintained by an active open-source community.</p>
      </div>
    </div>
  </div>
</section>

<!-- DOCUMENTATION SECTION -->
<section class="resources-section">
  <div class="section-container">
    <div class="section-header">
      <h2 class="section-title">Documentation</h2>
      <p class="section-subtitle">Complete guides, security information, and research papers</p>
    </div>
    
    <div class="resource-grid">
      <a href="https://nuttx.apache.org/docs/latest" class="resource-card" target="_blank" rel="noopener noreferrer">
        <div class="resource-card-header">
          <div class="resource-icon">
            <img src="{{ site.baseurl }}/static/icons/document-full.svg" alt="Full Documentation" width="24" height="24">
          </div>
          <h3 class="resource-title">Full Documentation</h3>
        </div>
        <p class="resource-description">
          Complete API reference, user guides, and developer documentation for Apache NuttX RTOS.
        </p>
      </a>
      
      <a href="https://nuttx.apache.org/docs/latest/security.html" class="resource-card" target="_blank" rel="noopener noreferrer">
        <div class="resource-card-header">
          <div class="resource-icon">
            <img src="{{ site.baseurl }}/static/icons/security-shield.svg" alt="Security Documentation" width="24" height="24">
          </div>
          <h3 class="resource-title">Security Documentation</h3>
        </div>
        <p class="resource-description">
          Security guidelines, best practices, and vulnerability reporting information.
        </p>
      </a>
      
      <a href="{{ site.baseurl }}/articles" class="resource-card">
        <div class="resource-card-header">
          <div class="resource-icon">
            <img src="{{ site.baseurl }}/static/icons/articles-papers.svg" alt="Scientific Papers & Articles" width="24" height="24">
          </div>
          <h3 class="resource-title">Scientific Papers & Articles</h3>
        </div>
        <p class="resource-description">
          Research papers, technical articles, and publications about Apache NuttX.
        </p>
      </a>
    </div>
  </div>
</section>

<!-- TECHNICAL STRUCTURE SECTION -->
<section class="technical-section">
  <div class="section-container">
    <div class="section-header">
      <h2 class="section-title">Technical Structure</h2>
      <p class="section-subtitle">Access source code, releases, and project repositories</p>
    </div>
    
    <div class="technical-content">
      <div class="technical-intro">
        <p>
          Release packages are available for download. We use three primary GIT repositories to develop the project: 
          <strong><a href="{{ site.data.project.source_repository_os_mirror }}" target="_blank" rel="noopener noreferrer">RTOS</a></strong>, <strong><a href="{{ site.data.project.source_repository_apps_mirror }}" target="_blank" rel="noopener noreferrer">Applications</a></strong>, and <strong><a href="https://github.com/apache/nuttx-website" target="_blank" rel="noopener noreferrer">Website</a></strong>. 
          Documentation is part of the RTOS repository and then built and hosted online.
        </p>
      </div>
      
      <div class="resource-grid">
        <a href="{{ site.baseurl }}/download" class="resource-card">
          <div class="resource-card-header">
            <div class="resource-icon">
              <img src="{{ site.baseurl }}/static/icons/download.svg" alt="Release Packages" width="24" height="24">
            </div>
            <h3 class="resource-title">Release Packages</h3>
          </div>
          <p class="resource-description">
            Download official Apache NuttX releases with verified signatures and checksums.
          </p>
        </a>
        
        <a href="{{ site.data.project.source_repository_os_mirror }}" class="resource-card" target="_blank" rel="noopener noreferrer">
          <div class="resource-card-header">
            <div class="resource-icon">
              <img src="{{ site.baseurl }}/static/icons/code-repos.svg" alt="RTOS Repository" width="24" height="24">
            </div>
            <h3 class="resource-title">RTOS Repository</h3>
          </div>
          <p class="resource-description">
            Core RTOS code, kernel, drivers, and documentation sources.
          </p>
        </a>
        
        <a href="{{ site.data.project.source_repository_apps_mirror }}" class="resource-card" target="_blank" rel="noopener noreferrer">
          <div class="resource-card-header">
            <div class="resource-icon">
              <img src="{{ site.baseurl }}/static/icons/code-repos.svg" alt="Applications Repository" width="24" height="24">
            </div>
            <h3 class="resource-title">Applications Repository</h3>
          </div>
          <p class="resource-description">
            Sample applications, examples, and utilities for NuttX.
          </p>
        </a>
        
        <a href="https://github.com/apache/nuttx-website" class="resource-card" target="_blank" rel="noopener noreferrer">
          <div class="resource-card-header">
            <div class="resource-icon">
              <img src="{{ site.baseurl }}/static/icons/website-globe.svg" alt="Website Repository" width="24" height="24">
            </div>
            <h3 class="resource-title">Website Repository</h3>
          </div>
          <p class="resource-description">
            Source code for the Apache NuttX project website.
          </p>
        </a>
        
        <a href="https://www.youtube.com/@nuttxchannel" class="resource-card" target="_blank" rel="noopener noreferrer">
          <div class="resource-card-header">
            <div class="resource-icon">
              <img src="{{ site.baseurl }}/static/icons/video-play.svg" alt="Video Tutorials" width="24" height="24">
            </div>
            <h3 class="resource-title">Video Tutorials</h3>
          </div>
          <p class="resource-description">
            Step-by-step video guides and workshops on YouTube.
          </p>
        </a>
        
        <a href="https://github.com/apache/nuttx-apps" class="resource-card" target="_blank" rel="noopener noreferrer">
          <div class="resource-card-header">
            <div class="resource-icon">
              <img src="{{ site.baseurl }}/static/icons/code-examples.svg" alt="Code Examples" width="24" height="24">
            </div>
            <h3 class="resource-title">Code Examples</h3>
          </div>
          <p class="resource-description">
            Browse hundreds of sample applications and code examples.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- DEMO SHOWCASE SECTION -->
<section class="demo-section-static">
  <div class="section-container">
    <div class="demo-static-grid">
      <div class="demo-static-content">
        <h2 class="demo-title">Try NuttX Shell</h2>
        <p class="demo-description">
          Experience NuttX POSIX-compliant shell environment. Click to launch the interactive WebAssembly demo.
        </p>
      </div>
      <a href="{{ site.baseurl }}/demo" class="demo-static-preview">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="terminal-button"></span>
              <span class="terminal-button"></span>
              <span class="terminal-button"></span>
            </div>
            <div class="terminal-title">NuttShell (NSH)</div>
          </div>
          <div class="terminal-body">
            <pre class="terminal-code">NuttShell (NSH) NuttX-12.7.0
nsh> <span class="cursor">█</span></pre>
          </div>
          <div class="demo-overlay">
            <img src="{{ site.baseurl }}/static/icons/play.svg" class="play-icon" width="32" height="32" alt="Play">
            <span class="overlay-text">Launch Interactive Demo</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- COMMUNITY & EVENTS SECTION -->
<section class="community-section">
  <div class="section-container">
    <div class="community-grid">
      <div class="community-main">
        <h2 class="community-title">Join the Apache NuttX Community</h2>
        <p class="community-description">
          NuttX is developed and maintained by an international 
          <a href="{{ site.baseurl }}/community-members">group of volunteers</a> from all around the world. 
          We welcome developers of all skill levels to contribute to the project.
          View our <a href="https://github.com/apache/nuttx/graphs/contributors" target="_blank" rel="noopener noreferrer">full contributor list on GitHub</a>.
        </p>
        
        <div class="community-channels">
          <h3>Connect With Us</h3>
          <div class="channel-list">
            <a href="{{ site.data.project.dev_list_archive_mailarchive }}" class="channel-item">
              <img src="{{ site.baseurl }}/static/icons/mailing-list.svg" width="24" height="24" alt="Mailing List">
              <span>Mailing List (Primary)</span>
            </a>
            <a href="{{ site.data.project.socialmedia_discord }}" class="channel-item">
              <img src="{{ site.baseurl }}/static/icons/discord.svg" width="24" height="24" alt="Discord">
              <span>Discord</span>
            </a>
            <a href="{{ site.data.project.socialmedia_youtube }}" class="channel-item">
              <img src="{{ site.baseurl }}/static/icons/youtube.svg" width="24" height="24" alt="YouTube">
              <span>YouTube</span>
            </a>
            <a href="{{ site.data.project.socialmedia_reddit }}" class="channel-item">
              <img src="{{ site.baseurl }}/static/icons/reddit.svg" width="24" height="24" alt="Reddit">
              <span>Reddit</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="community-events">
        <div class="events-card">
          <h3 class="events-title">International Workshop 2025</h3>
          <div class="event-date">
            <img src="{{ site.baseurl }}/static/icons/calendar.svg" width="20" height="20" alt="Calendar">
            <span>October 16-17, 2025</span>
          </div>
          <div class="event-location">
            <img src="{{ site.baseurl }}/static/icons/location-pin.svg" width="20" height="20" alt="Location">
            <span>Costa Rica</span>
          </div>
          <p class="event-description">
            Join us for the annual Apache NuttX International Workshop. 
            Attend online or in person for free!
          </p>
          <div class="event-links">
            <a href="{{ site.data.project.community_events }}" class="event-link">Event Website</a>
            <a href="{{ site.data.project.community_events_workshop_2025_cfp }}" class="event-link">Submit Paper</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMPANIES CAROUSEL SECTION -->
<section class="companies-section">
  <div class="section-container">
    <h2 class="section-title-center">Trusted by teams everywhere</h2>
    <div class="carousel-wrapper">
      <div class="carousel-track">
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/sony.svg" alt="Sony" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/samsung.svg" alt="Samsung" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/xiaomi.svg" alt="Xiaomi" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/google.svg" alt="Google" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/motorola.svg" alt="Motorola" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/fitbit.svg" alt="Fitbit" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/seeed.png" alt="Seeed Studio" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/inspace.png" alt="InSpace" class="company-logo-img">
          </div>
        </div>
        <!-- Duplicate slides for seamless loop -->
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/sony.svg" alt="Sony" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/samsung.svg" alt="Samsung" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/xiaomi.svg" alt="Xiaomi" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/google.svg" alt="Google" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/motorola.svg" alt="Motorola" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/fitbit.svg" alt="Fitbit" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/seeed.png" alt="Seeed Studio" class="company-logo-img">
          </div>
        </div>
        <div class="carousel-slide">
          <div class="company-logo-container">
            <img src="{{ site.baseurl }}/static/companies/inspace.png" alt="InSpace" class="company-logo-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
