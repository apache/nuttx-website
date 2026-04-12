---
layout: page
title: Market Share and Products
description: Market footprint and products built with Apache NuttX RTOS
group: nav-right
---

{% include JB/setup %}

<style>
/* Local font declarations for DM Mono (used as fallback monospace font) */
@font-face {
  font-family: 'DM Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../assets/themes/apache/fonts/JetBrainsMono-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'DM Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('../assets/themes/apache/fonts/JetBrainsMono-Medium.ttf') format('truetype');
}

/* ════════════════════════════════════════
   DESIGN TOKENS — light & dark
════════════════════════════════════════ */
.nx-page {
  /* Light theme defaults */
  --bg:          #f2f1ec;
  --bg-card:     #eceae3;
  --bg-side:     #e4e2da;
  --bg-chip:     #eceae3;
  --border:      #d0cdc4;
  --border-h:    #a8a59c;
  --text:        #181714;
  --text-sub:    #52504a;
  --text-dim:    #888478;
  --tag-bg:      #dedad1;
  --tag-text:    #52504a;
  --tag-border:  #c4c1b8;
  --sh-sm:       0 1px 4px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.05);
  --sh-md:       0 4px 16px rgba(0,0,0,.10), 0 2px 6px rgba(0,0,0,.06);
  --r-sm: 8px; --r-md: 14px; --r-lg: 20px;
  --f-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --f-mono: 'DM Mono', ui-monospace, 'Courier New', monospace;
}

/* Dark theme — OS preference (only when not overridden to light) */
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .nx-page {
    --bg:          #0e0e0c;
    --bg-card:     #181714;
    --bg-side:     #1f1e1a;
    --bg-chip:     #181714;
    --border:      #2c2b26;
    --border-h:    #46443c;
    --text:        #e6e3da;
    --text-sub:    #96937f;
    --text-dim:    #64614e;
    --tag-bg:      #242319;
    --tag-text:    #96937f;
    --tag-border:  #32302a;
    --sh-sm:       0 1px 4px rgba(0,0,0,.5);
    --sh-md:       0 4px 16px rgba(0,0,0,.6);
  }
}
/* Dark theme via JS toggle */
html[data-theme="dark"] .nx-page {
  --bg:          #0e0e0c;
  --bg-card:     #181714;
  --bg-side:     #1f1e1a;
  --bg-chip:     #181714;
  --border:      #2c2b26;
  --border-h:    #46443c;
  --text:        #e6e3da;
  --text-sub:    #96937f;
  --text-dim:    #64614e;
  --tag-bg:      #242319;
  --tag-text:    #96937f;
  --tag-border:  #32302a;
  --sh-sm:       0 1px 4px rgba(0,0,0,.5);
  --sh-md:       0 4px 16px rgba(0,0,0,.6);
}

/* ════════════════════════════════════════
   BASE — scoped inside .nx-page
════════════════════════════════════════ */
.nx-page {
  font-family: var(--f-body) !important;
  color: var(--text) !important;
  font-size: 15px !important;
  line-height: 1.6 !important;
  -webkit-font-smoothing: antialiased;
}

/* Kill any site-level img constraints inside our page */
.nx-page img {
  max-width: none !important;
  max-height: none !important;
  width: auto !important;
  height: auto !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  display: block !important;
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
.nx-hero {
  padding: 44px 0 36px !important;
  border-bottom: 1px solid var(--border) !important;
  margin-bottom: 44px !important;
}

.nx-eyebrow {
  font-family: var(--f-mono) !important;
  font-size: 11px !important;
  letter-spacing: .12em !important;
  text-transform: uppercase !important;
  color: var(--text-dim) !important;
  margin-bottom: 16px !important;
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
}
.nx-hero h2 {
  font-family: var(--f-body) !important;
  font-size: clamp(1.9rem, 3.5vw, 3rem) !important;
  font-weight: 700 !important;
  letter-spacing: -.03em !important;
  line-height: 1.15 !important;
  color: var(--text) !important;
  margin: 0 0 14px !important;
  padding: 0 !important;
  border: none !important;
}

.nx-hero p {
  font-size: 16px !important;
  color: var(--text-sub) !important;
  max-width: 60ch !important;
  line-height: 1.65 !important;
  margin: 0 !important;
}

/* ════════════════════════════════════════
   STATS ROW
════════════════════════════════════════ */
.nx-stats {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 12px !important;
  margin-bottom: 48px !important;
}
@media (max-width: 700px) {
  .nx-stats { grid-template-columns: repeat(2, 1fr) !important; }
}

.nx-stat {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  border-radius: var(--r-md) !important;
  padding: 22px 24px !important;
  box-shadow: var(--sh-sm) !important;
}

.nx-stat-num {
  font-family: var(--f-body) !important;
  font-size: 28px !important;
  font-weight: 800 !important;
  letter-spacing: -.03em !important;
  color: var(--text) !important;
  line-height: 1 !important;
  margin-bottom: 6px !important;
  display: block !important;
}

.nx-stat-desc {
  font-size: 12.5px !important;
  color: var(--text-dim) !important;
  line-height: 1.4 !important;
}

/* ════════════════════════════════════════
   SECTION LABEL
════════════════════════════════════════ */
.nx-section-label {
  font-family: var(--f-mono) !important;
  font-size: 10.5px !important;
  letter-spacing: .14em !important;
  text-transform: uppercase !important;
  color: var(--text-dim) !important;
  font-weight: 500 !important;
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  margin-bottom: 20px !important;
  margin-top: 52px !important;
}
.nx-section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ════════════════════════════════════════
   PARTNER STRIP
════════════════════════════════════════ */
.nx-partner-strip {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 12px !important;
  margin-bottom: 52px !important;
}
@media (max-width: 700px) {
  .nx-partner-strip { grid-template-columns: repeat(2, 1fr) !important; }
}

.nx-chip {
  background: var(--bg-chip) !important;
  border: 1px solid var(--border) !important;
  border-radius: var(--r-md) !important;
  padding: 20px 22px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 14px !important;
  min-height: 80px !important;
  box-shadow: var(--sh-sm) !important;
  transition: border-color .18s, box-shadow .18s, transform .18s !important;
  text-decoration: none !important;
}
.nx-chip:hover {
  border-color: var(--border-h) !important;
  box-shadow: var(--sh-md) !important;
  transform: translateY(-2px) !important;
}

/* Chip logo: fixed container so logos always have room */
.nx-chip-logo-wrap {
  flex-shrink: 0 !important;
  width: 130px !important;
  height: 58px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
}
.nx-chip-logo-wrap img {
  max-width: 130px !important;
  max-height: 58px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
}
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .nx-chip-logo-wrap img.need-invert {
    filter: invert(1) !important;
  }
}
html[data-theme="dark"] .nx-chip-logo-wrap img.need-invert {
  filter: invert(1) !important;
}

.nx-chip-meta { text-align: right !important; flex-shrink: 0 !important; }
.nx-chip-name {
  font-size: 13px !important;
  font-weight: 600 !important;
  color: var(--text) !important;
  display: block !important;
  line-height: 1.2 !important;
}
.nx-chip-tag {
  font-family: var(--f-mono) !important;
  font-size: 10px !important;
  letter-spacing: .06em !important;
  text-transform: uppercase !important;
  color: var(--text-dim) !important;
}

/* ════════════════════════════════════════
   DOMAIN HEADER
════════════════════════════════════════ */
.nx-domain { margin-bottom: 8px !important; }

.nx-domain-hdr { margin-bottom: 20px !important; }
.nx-domain-hdr h3 {
  font-family: var(--f-body) !important;
  font-size: 21px !important;
  font-weight: 700 !important;
  letter-spacing: -.02em !important;
  color: var(--text) !important;
  margin: 0 0 4px !important;
  padding: 0 !important;
  border: none !important;
}
.nx-domain-hdr p {
  font-size: 13.5px !important;
  color: var(--text-dim) !important;
  margin: 0 !important;
}

/* ════════════════════════════════════════
   ENTRY CARD
════════════════════════════════════════ */
.nx-entry {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  border-radius: var(--r-lg) !important;
  overflow: hidden !important;
  margin-bottom: 14px !important;
  box-shadow: var(--sh-sm) !important;
  transition: box-shadow .2s, border-color .2s !important;
}
.nx-entry:hover {
  box-shadow: var(--sh-md) !important;
  border-color: var(--border-h) !important;
}

/* TWO COLUMN GRID — forced with !important */
.nx-entry-grid {
  display: grid !important;
  grid-template-columns: 300px 1fr !important;
  grid-template-rows: auto !important;
  min-height: 0 !important;
}
@media (max-width: 760px) {
  .nx-entry-grid { grid-template-columns: 1fr !important; }
}

/* ── SIDEBAR ── */
.nx-side {
  background: var(--bg-side) !important;
  border-right: 1px solid var(--border) !important;
  padding: 32px 28px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 20px !important;
  justify-content: space-between !important;
  align-items: center !important;
}
@media (max-width: 760px) {
  .nx-side {
    border-right: none !important;
    border-bottom: 1px solid var(--border) !important;
    flex-direction: row !important;
    align-items: center !important;
    padding: 20px 24px !important;
  }
}

/* Logo area — fixed height so logos always show properly */
.nx-logo-area {
  width: 100% !important;
  min-height: 72px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* SVG / PNG logos directly in sidebar */
.nx-logo-area > img {
  max-width: 240px !important;
  max-height: 80px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
}
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .nx-logo-area > img.need-invert {
    filter: invert(1) !important;
  }
}
html[data-theme="dark"] .nx-logo-area > img.need-invert {
  filter: invert(1) !important;
}

/* Logos with white fill: make them dark/visible in light mode */
html[data-theme="light"] .nx-logo-area > img.invert-in-light,
html[data-theme="light"] .nx-chip-logo-wrap img.invert-in-light {
  filter: brightness(0) !important;
}

/* White-padded box for logos that need white bg */
.nx-logo-box {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #ffffff !important;
  border: 1px solid #e0ddd6 !important;
  border-radius: 10px !important;
  padding: 12px 18px !important;
  min-width: 140px !important;
  min-height: 72px !important;
}
.nx-logo-box img {
  max-width: 160px !important;
  max-height: 50px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
}

/* Segment meta */
.nx-meta { display: flex !important; flex-direction: column !important; gap: 3px !important; align-items: center !important; text-align: center !important; }
.nx-meta-lbl {
  font-family: var(--f-mono) !important;
  font-size: 10px !important;
  letter-spacing: .08em !important;
  text-transform: uppercase !important;
  color: var(--text-dim) !important;
}
.nx-meta-val {
  font-size: 13px !important;
  font-weight: 500 !important;
  color: var(--text-sub) !important;
}

/* ── MAIN CONTENT ── */
.nx-main { padding: 32px 34px !important; }

.nx-use-lbl {
  font-family: var(--f-mono) !important;
  font-size: 10px !important;
  letter-spacing: .10em !important;
  text-transform: uppercase !important;
  color: var(--text-dim) !important;
  margin-bottom: 7px !important;
  display: block !important;
}

.nx-main h4 {
  font-family: var(--f-body) !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  letter-spacing: -.015em !important;
  color: var(--text) !important;
  margin: 0 0 12px !important;
  padding: 0 !important;
  border: none !important;
  line-height: 1.25 !important;
}

.nx-main p {
  font-size: 14.5px !important;
  color: var(--text-sub) !important;
  line-height: 1.7 !important;
  margin: 0 0 18px !important;
}

/* Tags */
.nx-tags {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 6px !important;
  margin-top: 4px !important;
}
.nx-tag {
  font-family: var(--f-mono) !important;
  font-size: 10.5px !important;
  letter-spacing: .04em !important;
  padding: 5px 11px !important;
  border-radius: 100px !important;
  background: var(--tag-bg) !important;
  color: var(--tag-text) !important;
  border: 1px solid var(--tag-border) !important;
  font-weight: 500 !important;
  line-height: 1 !important;
}

/* White-background knockout: multiply removes white on light bg */
.logo-knockout-white {
  mix-blend-mode: multiply !important;
}
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .logo-knockout-white {
    mix-blend-mode: normal !important;
    filter: invert(1) brightness(0.9) !important;
  }
  html:not([data-theme="light"]) .nx-logo-area > img.need-invert,
  html:not([data-theme="light"]) .nx-chip-logo-wrap img.need-invert {
    filter: invert(1) !important;
  }
}
html[data-theme="dark"] .logo-knockout-white {
  mix-blend-mode: normal !important;
  filter: invert(1) brightness(0.9) !important;
}
html[data-theme="dark"] .nx-logo-area > img.need-invert,
html[data-theme="dark"] .nx-chip-logo-wrap img.need-invert {
  filter: invert(1) !important;
}

/* ASF logo in stat card — .nx-stat-asf .nx-asf-logo has specificity (0,2,0)
   which beats .nx-page img (0,1,1) so max-height is respected */
.nx-stat-asf .nx-asf-logo {
  max-width: 110px !important;
  max-height: 28px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
  margin-bottom: 8px !important;
}
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .nx-stat-asf .nx-asf-logo { filter: brightness(0) invert(1) !important; }
}
html[data-theme="dark"] .nx-stat-asf .nx-asf-logo { filter: brightness(0) invert(1) !important; }
</style>

<div class="nx-page">

<!-- ── Hero ── -->
<div class="nx-hero">
  <div class="nx-eyebrow">Apache NuttX RTOS</div>
  <h2>Market Share &amp; Ecosystem</h2>
  <p>Apache NuttX powers devices across aerospace, consumer electronics, IoT, and industrial systems. Explore the platforms and companies building on the RTOS.</p>
</div>

<!-- ── Stats ── -->
<div class="nx-stats">
  <div class="nx-stat">
    <span class="nx-stat-num">1000+</span>
    <span class="nx-stat-desc">SKUs running NuttX (Xiaomi alone)</span>
  </div>
  <div class="nx-stat">
    <span class="nx-stat-num">4+</span>
    <span class="nx-stat-desc">Major industry verticals</span>
  </div>
  <div class="nx-stat">
    <span class="nx-stat-num">2024</span>
    <span class="nx-stat-desc">Used in Japanese lunar mission</span>
  </div>
  <div class="nx-stat nx-stat-asf">
    <img src="{{ site.baseurl }}/assets/themes/apache/img/asf-logo-wide.png" alt="Apache Software Foundation" class="nx-asf-logo">
    <span class="nx-stat-desc">Apache Software Foundation project</span>
  </div>
</div>

<!-- ── Partner Strip ── -->
<div class="nx-section-label">Industry Partners</div>
<div class="nx-partner-strip">
  <div class="nx-chip">
    <div class="nx-chip-logo-wrap">
      <img class="invert-in-light" src="{{ site.baseurl }}/static/companies/sony.svg" alt="Sony">
    </div>
    <div class="nx-chip-meta">
      <span class="nx-chip-name">Spresense</span>
      <span class="nx-chip-tag">Platform</span>
    </div>
  </div>
  <div class="nx-chip">
    <div class="nx-chip-logo-wrap">
      <img class="need-invert" src="{{ site.baseurl }}/static/companies/fitbit.svg" alt="Fitbit">
    </div>
    <div class="nx-chip-meta">
      <span class="nx-chip-name">Fitbit</span>
      <span class="nx-chip-tag">Wearable</span>
    </div>
  </div>
  <div class="nx-chip">
    <div class="nx-chip-logo-wrap">
      <img src="{{ site.baseurl }}/static/companies/xiaomi.svg" alt="Xiaomi">
    </div>
    <div class="nx-chip-meta">
      <span class="nx-chip-name">OpenVela</span>
      <span class="nx-chip-tag">Consumer</span>
    </div>
  </div>
  <div class="nx-chip">
    <div class="nx-chip-logo-wrap">
      <img src="{{ site.baseurl }}/static/companies/samsung.svg" alt="Samsung">
    </div>
    <div class="nx-chip-meta">
      <span class="nx-chip-name">TizenRT</span>
      <span class="nx-chip-tag">IoT</span>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     SECTION 1 — Consumer Electronics
══════════════════════════════════════ -->
<div class="nx-section-label">Consumer Electronics &amp; Wearables</div>
<div class="nx-domain">
  <div class="nx-domain-hdr">
    <h3>Consumer Electronics &amp; Wearables</h3>
    <p>High-volume audio, wearables, and large-scale consumer ecosystems.</p>
  </div>

  <!-- Sony -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img class="invert-in-light" src="{{ site.baseurl }}/static/companies/sony.svg" alt="Sony">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Audio &amp; Edge Sensing</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Board Support Package</span>
        <h4>Sony Audio Devices &amp; Spresense</h4>
        <p>Sony uses NuttX in its audio players and embedded ecosystem. The Sony Spresense platform (including multiple boards and modules) runs NuttX as its primary operating system, enabling high-performance audio and edge AI sensing.</p>
        <div class="nx-tags">
          <span class="nx-tag">Audio</span>
          <span class="nx-tag">Edge AI</span>
          <span class="nx-tag">Sensing</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Fitbit -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img class="need-invert" src="{{ site.baseurl }}/static/companies/fitbit.svg" alt="Fitbit">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Wearables</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Smartwatch Firmware</span>
        <h4>Google / Fitbit Smartwatches</h4>
        <p>Google's Fitbit ecosystem uses NuttX in its smartwatch platforms. Their engineers have presented multiple talks at NuttX International Workshops, demonstrating active, ongoing involvement in the RTOS community.</p>
        <div class="nx-tags">
          <span class="nx-tag">Wearables</span>
          <span class="nx-tag">Sensors</span>
          <span class="nx-tag">Health</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Xiaomi -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/xiaomi.svg" alt="Xiaomi">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Consumer Ecosystem</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Broad Device Portfolio</span>
        <h4>Xiaomi / OpenVela</h4>
        <p>Xiaomi has one of the largest NuttX deployments in the world. Over 1,000 SKUs are reported to run NuttX, spanning smartwatches, smart speakers, displays, and EV-related systems, all under the OpenVela platform umbrella.</p>
        <div class="nx-tags">
          <span class="nx-tag">Smart Devices</span>
          <span class="nx-tag">IoT</span>
          <span class="nx-tag">EV</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     SECTION 2 — Drones, Robotics, Automotive
══════════════════════════════════════ -->
<div class="nx-section-label">Drones, Robotics &amp; Automotive</div>
<div class="nx-domain">
  <div class="nx-domain-hdr">
    <h3>Drones, Robotics, and Automotive</h3>
    <p>Mission-critical mobility, flight control, and automotive ECUs.</p>
  </div>

  <!-- PX4 -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img class="logo-knockout-white" src="{{ site.baseurl }}/static/companies/px4.svg" alt="PX4">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">UAV Flight Control</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Autopilot RTOS</span>
        <h4>PX4 Ecosystem</h4>
        <p>Every drone built using PX4 Autopilot runs Apache NuttX. This includes aircraft manufactured by Auterion, 3DR, XMobots, and many others. NuttX handles the real-time flight control demands where determinism is non-negotiable.</p>
        <div class="nx-tags">
          <span class="nx-tag">Drones</span>
          <span class="nx-tag">UAV</span>
          <span class="nx-tag">Robotics</span>
          <span class="nx-tag">Real-Time</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Li Auto -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/LI_Auto.png" alt="Li Auto" class="logo-knockout-white">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Automotive</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Electronic Control Units</span>
        <h4>Li Auto (Electric Vehicles)</h4>
        <p>Li Auto integrates NuttX in its Electronic Control Units (ECUs). Both Li Auto and Xiaomi have actively worked toward certifying NuttX for automotive use, demonstrating its readiness for safety-critical embedded systems.</p>
        <div class="nx-tags">
          <span class="nx-tag">Automotive</span>
          <span class="nx-tag">EV</span>
          <span class="nx-tag">Safety-Critical</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     SECTION 3 — IoT, Embedded, OS
══════════════════════════════════════ -->
<div class="nx-section-label">IoT, Embedded &amp; OS Integrations</div>
<div class="nx-domain">
  <div class="nx-domain-hdr">
    <h3>IoT, Embedded, and OS Integrations</h3>
    <p>Connected platforms, robust APIs, and SIL0 industrial controls.</p>
  </div>

  <!-- Samsung -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/samsung.svg" alt="Samsung">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">IoT OS</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Base Kernel</span>
        <h4>Samsung TizenRT</h4>
        <p>Samsung uses NuttX as the underlying kernel for TizenRT, their IoT operating system deployed heavily across connected and embedded devices in their product lineup.</p>
        <div class="nx-tags">
          <span class="nx-tag">OS Integration</span>
          <span class="nx-tag">Kernel</span>
          <span class="nx-tag">IoT</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Espressif -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/espressif.png" alt="Espressif" class="logo-knockout-white">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Microcontrollers</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Platform Support</span>
        <h4>Espressif ESP32 Family</h4>
        <p>Espressif Systems actively contributes to the NuttX mainline. The full ESP32 family (including S2, S3, H2, and P4 variants) has first-class support, making it one of the most widely deployed platforms for IoT products using NuttX.</p>
        <div class="nx-tags">
          <span class="nx-tag">Hardware</span>
          <span class="nx-tag">IoT</span>
          <span class="nx-tag">Wi-Fi</span>
          <span class="nx-tag">BLE</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Elektroline -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/elektroline.png" alt="Elektroline" class="logo-knockout-white" style="border-radius: 12px !important;">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Industrial Control</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">SIL0 Environments</span>
        <h4>Elektroline</h4>
        <p>Elektroline deploys NuttX in tram track systems (BRCg2, VTK25) and remotely controlled disconnectors. NuttX provides interconnection over CAN, USB, and Ethernet, GUI via LVGL, and data logging to SD card or NOR flash memory at SIL0 safety level.</p>
        <div class="nx-tags">
          <span class="nx-tag">Industrial</span>
          <span class="nx-tag">SIL0</span>
          <span class="nx-tag">LVGL</span>
          <span class="nx-tag">CAN</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Meadow -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/meadow.png" alt="Meadow" class="logo-knockout-white">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Developer Platforms</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">.NET Framework Support</span>
        <h4>Meadow by Wilderness Labs</h4>
        <p>Wilderness Labs uses NuttX in its Meadow platform. Because NuttX is POSIX-compliant and Unix-like, it enables easier portability of Linux-based .NET applications to microcontrollers, bridging the gap between desktop development and embedded hardware.</p>
        <div class="nx-tags">
          <span class="nx-tag">.NET</span>
          <span class="nx-tag">POSIX</span>
          <span class="nx-tag">Platform</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     SECTION 4 — Aerospace & Historical
══════════════════════════════════════ -->
<div class="nx-section-label">Aerospace, Space &amp; Historical</div>
<div class="nx-domain">
  <div class="nx-domain-hdr">
    <h3>Aerospace, Space, and Historical Uses</h3>
    <p>Mission-critical boundaries and notable technology projects.</p>
  </div>

  <!-- Japan Lunar -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/japan.jpg" alt="Japanese Lunar Mission" style="border-radius:8px !important; max-width:200px !important; max-height:80px !important; width:auto !important; height:auto !important; object-fit:cover !important; display:block !important;">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Space Exploration</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Robotic Systems</span>
        <h4>Japanese Lunar Mission (2024)</h4>
        <p>NuttX powered a robotic system aboard the Japanese lunar exploration mission in 2024, highlighting the RTOS's reliability in extreme environments where failure is not an option.</p>
        <div class="nx-tags">
          <span class="nx-tag">Aerospace</span>
          <span class="nx-tag">Space</span>
          <span class="nx-tag">Mission-Critical</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Google Modular Phone -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/google.svg" alt="Google">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Mobile</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Historic Innovation</span>
        <h4>Google Modular Phone</h4>
        <p>Google used NuttX in its ambitious modular phone project, an early effort to bring a hardware-modular smartphone to market.</p>
        <div class="nx-tags">
          <span class="nx-tag">Mobile</span>
          <span class="nx-tag">Modular</span>
          <span class="nx-tag">Google</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Motorola Moto Mods -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img class="need-invert" src="{{ site.baseurl }}/static/companies/motorola.svg" alt="Motorola">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Smart Accessories</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">Historic Innovation</span>
        <h4>Motorola Moto Mods</h4>
        <p>Motorola deployed NuttX in Moto Z smart accessories (Moto Mods), enabling modular hardware extensions such as cameras, projectors, and speakers to communicate intelligently with the host device.</p>
        <div class="nx-tags">
          <span class="nx-tag">Mobile</span>
          <span class="nx-tag">Accessories</span>
          <span class="nx-tag">Motorola</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     SECTION 5 — Robotics Frameworks
══════════════════════════════════════ -->
<div class="nx-section-label">Robotics Frameworks</div>
<div class="nx-domain">
  <div class="nx-domain-hdr">
    <h3>Robotics Frameworks</h3>
    <p>Foundational contributions to the open-source robotics ecosystem.</p>
  </div>

  <!-- micro-ROS -->
  <div class="nx-entry">
    <div class="nx-entry-grid">
      <div class="nx-side">
        <div class="nx-logo-area">
          <img src="{{ site.baseurl }}/static/companies/micro-ros.JPG" alt="micro-ROS" class="logo-knockout-white" style="border-radius: 12px !important;">
        </div>
        <div class="nx-meta">
          <span class="nx-meta-lbl">Segment</span>
          <span class="nx-meta-val">Robotics Framework</span>
        </div>
      </div>
      <div class="nx-main">
        <span class="nx-use-lbl">ROS 2 on Microcontrollers</span>
        <h4>micro-ROS</h4>
        <p>The widely adopted micro-ROS robotics framework was initially developed directly on NuttX before expanding to support other RTOS platforms, cementing NuttX's role as the foundational platform for bringing ROS 2 to microcontrollers.</p>
        <div class="nx-tags">
          <span class="nx-tag">Robotics</span>
          <span class="nx-tag">ROS 2</span>
          <span class="nx-tag">micro-ROS</span>
          <span class="nx-tag">Framework</span>
        </div>
      </div>
    </div>
  </div>
</div>

</div><!-- end .nx-page -->