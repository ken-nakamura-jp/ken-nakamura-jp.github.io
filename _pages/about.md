---
layout: page
title: About
permalink: /
nav: false
nav_order: 1
---

<style>
  :root {
    --global-theme-color: #2d5f93;
    --global-hover-color: #21466d;
    --global-divider-color: #d9e3ef;
    --site-muted-color: #526276;
    --site-muted-color-strong: #334155;
    --site-soft-blue: rgba(45, 95, 147, 0.065);
    --site-soft-blue-border: rgba(45, 95, 147, 0.13);
    --site-timeline-icon-bg: #2f5f91;
  }

  html[data-theme="dark"] {
    --global-theme-color: #86acd4;
    --global-hover-color: #b3cdec;
    --global-divider-color: #303a49;
    --site-muted-color: #a9b5c4;
    --site-muted-color-strong: #d2dbe7;
    --site-soft-blue: rgba(134, 172, 212, 0.11);
    --site-soft-blue-border: rgba(134, 172, 212, 0.2);
    --site-timeline-icon-bg: #50779f;
  }

  body {
    font-family:
      "Inter", "Aptos", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    line-height: 1.68;
  }

  .container[role="main"] {
    max-width: 1120px;
  }

  #navbar {
    border-bottom: 1px solid var(--global-divider-color);
    min-height: 58px;
  }

  #navbar .container {
    min-height: 56px;
  }

  #navbar .navbar-nav .nav-link,
  #navbar .navbar-brand {
    color: var(--global-text-color);
    font-family:
      "Inter", "Aptos", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
  }

  #navbar .navbar-brand.title {
    display: inline-flex;
    align-items: center;
    flex: 0 0 13rem;
    width: 13rem;
    font-weight: 500 !important;
    line-height: 1.2;
  }

  #navbar .container::before {
    content: "Ken Nakamura";
    display: block;
    flex: 0 0 13rem;
    width: 13rem;
    margin-right: 1rem;
    color: var(--global-text-color);
    font-family:
      "Inter", "Aptos", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: inherit;
    white-space: nowrap;
  }

  #navbar .navbar-nav {
    align-items: center;
  }

  #navbar .navbar-nav .nav-item {
    text-align: center;
  }

  #navbar .navbar-nav .nav-item:nth-child(1) {
    width: 4.6rem;
  }

  #navbar .navbar-nav .nav-item:nth-child(2) {
    width: 8.4rem;
  }

  #navbar .navbar-nav .nav-item:nth-child(3) {
    width: 4.2rem;
  }

  #navbar .navbar-nav .nav-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.5rem;
    font-weight: 500 !important;
    line-height: 1.2;
    padding-right: 0;
    padding-left: 0;
  }

  #navbar .toggle-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    min-height: 2.5rem;
    margin-left: 0.25rem;
    line-height: 1;
  }

  #navbar #light-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    color: var(--global-text-color);
    line-height: 1;
    transform: none !important;
  }

  #navbar #light-toggle i {
    width: 1rem;
    height: 1rem;
    line-height: 1;
  }

  #navbar #light-toggle:hover {
    color: var(--global-hover-color);
  }

  @media (max-width: 575.98px) {
    #navbar .container::before {
      flex: 0 0 auto;
      width: auto;
      font-size: 1.1rem;
    }

    #navbar .navbar-brand.title {
      flex: 0 0 auto;
      width: auto;
    }

    #navbar .navbar-nav .nav-item {
      width: auto !important;
      text-align: left;
    }

    #navbar .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    #navbar .toggle-container {
      justify-content: flex-start;
      width: auto;
      margin-left: 0;
    }
  }

  #navbar .navbar-nav .nav-link:hover,
  #navbar .navbar-nav .nav-item.active > .nav-link,
  a {
    color: var(--global-theme-color);
  }

  a:hover {
    color: var(--global-hover-color);
    text-decoration: none;
  }

  a,
  .quick-contact a,
  .timeline-links a,
  .quick-contact a:hover,
  .timeline-links a:hover {
    text-decoration: none;
  }

  .post-title,
  .page-title,
  h1 {
    color: var(--global-text-color);
    font-weight: 500;
  }

  .post-description:empty {
    display: none;
  }

  .post-header {
    display: none;
  }

  .research-emphasis {
    color: var(--global-theme-color);
  }

  .post-title,
  .page-title,
  h1 {
    margin-bottom: 0;
  }

  .about-kicker {
    margin-bottom: 1.1rem;
    color: var(--global-theme-color);
    font-size: 0.98rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .hero-name {
    margin: 0 0 0.55rem;
    color: var(--global-text-color);
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.06;
  }

  .hero-subtitle {
    margin: 0 0 1.45rem;
    color: var(--site-muted-color);
    font-size: 1.02rem;
    line-height: 1.45;
  }

  html[data-theme="dark"] .hero-subtitle {
    color: var(--site-muted-color);
  }

  .cv-external-icon {
    margin-left: 0.32rem;
    color: inherit;
    font-size: 0.66em;
    line-height: 1;
    transform: translateY(-0.08rem);
  }

  .about-hero {
    display: grid;
    grid-template-columns: minmax(0, 43rem) 220px;
    gap: 7.5rem;
    align-items: start;
    justify-content: space-between;
    margin: 2.65rem 0 3.1rem;
  }

  .about-copy {
    max-width: 43rem;
  }

  .about-copy .lead-line {
    margin-top: 0;
    color: var(--global-text-color);
    font-size: 1.04rem;
    line-height: 1.72;
  }

  .about-copy p {
    margin-bottom: 1.1rem;
  }

  .profile-panel {
    width: 220px;
    margin-top: 2.15rem;
  }

  .profile-panel-mobile {
    display: none;
  }

  .profile-photo {
    width: 220px;
    margin: 0 auto;
  }

  .profile-photo picture {
    display: block;
  }

  .profile-photo img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  }

  .quick-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 2.3rem;
    margin-top: 2.1rem;
    color: var(--site-muted-color);
    font-size: 0.95rem;
  }

  html[data-theme="dark"] .quick-contact {
    color: var(--site-muted-color);
  }

  .quick-contact a,
  .quick-contact span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .quick-contact i {
    color: var(--global-theme-color);
  }

  .quick-contact .fa-envelope {
    color: #64748b;
  }

  .resume-timeline {
    position: relative;
    margin-top: 2.7rem;
    padding-top: 0.2rem;
  }

  .resume-timeline::before {
    content: "";
    position: absolute;
    top: 0.7rem;
    bottom: 0.9rem;
    left: 17px;
    width: 1px;
    background: var(--global-divider-color);
  }

  .timeline-section {
    display: grid;
    grid-template-columns: 42px 165px minmax(0, 1fr);
    gap: 1.25rem;
    align-items: start;
    position: relative;
    padding: 1.05rem 0 1.45rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .timeline-section:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .timeline-icon {
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    color: #fff;
    background: var(--site-timeline-icon-bg);
    border-radius: 999px;
    box-shadow: 0 0 0 6px var(--global-bg-color, #fff);
  }

  .timeline-icon i {
    font-size: 0.92rem;
  }

  .timeline-label {
    display: flex;
    align-items: center;
    min-height: 35px;
    color: var(--global-theme-color);
    font-size: 0.84rem;
    font-weight: 700;
    line-height: 1.25;
    text-transform: uppercase;
    transform: translateY(calc((35px - 100%) / 2));
  }

  .timeline-label span {
    display: block;
    margin-top: 0.12rem;
  }

  .timeline-content {
    min-width: 0;
  }

  .timeline-row {
    display: grid;
    grid-template-columns: minmax(9.1rem, 0.2fr) minmax(0, 1fr) minmax(6rem, 0.16fr);
    gap: 1.35rem;
    align-items: baseline;
    padding: 0.05rem 0 1rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .timeline-row + .timeline-row {
    padding-top: 0.9rem;
  }

  .timeline-row:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .timeline-date {
    color: var(--global-theme-color);
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.35;
  }

  .timeline-main strong {
    display: block;
    color: var(--global-text-color);
    font-weight: 650;
    line-height: 1.35;
  }

  .timeline-main p {
    margin: 0.2rem 0 0;
    color: var(--site-muted-color);
    line-height: 1.48;
  }

  html[data-theme="dark"] .timeline-main p {
    color: var(--site-muted-color);
  }

  .timeline-place {
    color: var(--site-muted-color);
    font-size: 0.9rem;
    line-height: 1.35;
    text-align: right;
  }

  html[data-theme="dark"] .timeline-place {
    color: var(--site-muted-color);
  }

  .interest-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem 0.55rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .interest-list li {
    display: inline-flex;
    align-items: center;
    min-height: 1.9rem;
    padding: 0.2rem 0.62rem;
    color: var(--site-muted-color-strong);
    background: var(--site-soft-blue);
    border: 1px solid var(--site-soft-blue-border);
    border-radius: 999px;
    font-size: 0.91rem;
    line-height: 1.25;
  }

  html[data-theme="dark"] .interest-list li {
    color: var(--site-muted-color-strong);
    background: var(--site-soft-blue);
    border-color: var(--site-soft-blue-border);
  }

  .timeline-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
  }

  .timeline-links a,
  .timeline-links span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--global-theme-color);
  }

  .timeline-links span {
    color: var(--site-muted-color);
  }

  html[data-theme="dark"] .timeline-links span {
    color: var(--site-muted-color);
  }

  @media (max-width: 900px) {
    .about-hero {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.4rem;
      margin-top: 2rem;
    }

    .about-copy {
      max-width: none;
    }

    .profile-panel {
      width: 100%;
      margin-top: 0;
      text-align: center;
    }

    .profile-panel-desktop {
      display: none;
    }

    .profile-panel-mobile {
      display: block;
      margin: 0.95rem 0 1.05rem;
    }

    .profile-photo {
      width: 154px;
    }

    .quick-contact {
      justify-content: center;
      margin-top: 1.35rem;
    }

    .timeline-section {
      grid-template-columns: 36px minmax(0, 1fr);
      gap: 0.9rem 1rem;
    }

    .timeline-label {
      grid-column: 2;
    }

    .timeline-content {
      grid-column: 2;
    }
  }

  @media (max-width: 640px) {
    .post-title,
    .page-title,
    h1 {
      margin-bottom: 0;
    }

    .hero-name {
      font-size: 2.45rem;
    }

    .hero-subtitle {
      font-size: 0.98rem;
    }

    .about-copy .lead-line {
      font-size: 1rem;
    }

    .quick-contact {
      justify-content: flex-start;
    }

    .resume-timeline {
      margin-top: 2.1rem;
    }

    .timeline-section {
      grid-template-columns: 32px minmax(0, 1fr);
      column-gap: 0.85rem;
      padding: 1rem 0;
    }

    .resume-timeline::before {
      left: 15px;
    }

    .timeline-icon {
      width: 31px;
      height: 31px;
      box-shadow: 0 0 0 5px var(--global-bg-color, #fff);
    }

    .timeline-label {
      min-height: 31px;
      transform: translateY(calc((31px - 100%) / 2));
    }

    .timeline-icon i {
      font-size: 0.82rem;
    }

    .timeline-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 0.25rem;
      padding-bottom: 0.85rem;
    }

    .timeline-row + .timeline-row {
      padding-top: 0.85rem;
    }

    .timeline-place {
      text-align: left;
    }

    .interest-list li {
      font-size: 0.88rem;
    }

    .timeline-links {
      gap: 0.65rem 1rem;
    }
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll('a.nav-link[href$="/cv/"], a.nav-link[href$="ken_nakamura_cv.pdf"]')
      .forEach(function (link) {
        link.href = "{{ '/assets/pdf/ken_nakamura_cv.pdf' | relative_url }}";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.title = "Open CV in a new tab";

        if (!link.querySelector(".cv-external-icon")) {
          const icon = document.createElement("i");
          icon.className = "fa-solid fa-arrow-up-right-from-square cv-external-icon";
          icon.setAttribute("aria-hidden", "true");
          link.appendChild(icon);
        }
      });
  });
</script>

<div class="about-hero">
  <div class="about-copy">
    <div class="about-kicker">About</div>
    <h1 class="hero-name">Ken Nakamura</h1>
    <div class="profile-panel profile-panel-mobile" aria-label="Profile photo">
      <div class="profile-photo">
        <picture>
          <source srcset="{{ '/assets/profile/ken_nakamura.webp' | relative_url }}" type="image/webp">
          <img src="{{ '/assets/profile/ken_nakamura.jpg' | relative_url }}" alt="Ken Nakamura" width="220" height="220" decoding="async" fetchpriority="high">
        </picture>
      </div>
    </div>
    <p class="hero-subtitle">Undergraduate Researcher | The University of Tokyo</p>

    <p>I study the <strong class="research-emphasis">mechanisms underlying human cognition and conceptual understanding</strong>, and the <strong class="research-emphasis">mathematical principles underlying intelligence</strong>, including how perception, concepts, and language abilities arise and become grounded (for example, through learning dynamics, compositional structure, and interactions among cognitive systems).</p>

    <p>I am an undergraduate researcher in the Amano-Nakai-Nakayama Lab at The University of Tokyo, advised by Prof. Kaoru Amano and Assoc. Prof. Tomoya Nakai. I previously conducted research in the Oizumi Lab under Prof. Masafumi Oizumi. I have also worked on research internships at Georgia Institute of Technology and in the Smart Data &amp; Knowledge Services Department at German Research Center for Artificial Intelligence (DFKI).</p>

    <div class="quick-contact" aria-label="Contact and profile links">
      <span><i class="fa-solid fa-envelope" aria-hidden="true"></i>nakamuraken1007 [at] g.ecc.u-tokyo.ac.jp</span>
      <a href="https://www.linkedin.com/in/ken-nakamura-jp/"><i class="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
      <a href="https://scholar.google.com/citations?user=bwohtdYAAAAJ"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
    </div>

  </div>

  <aside class="profile-panel profile-panel-desktop" aria-label="Profile">
    <div class="profile-photo">
      <picture>
        <source srcset="{{ '/assets/profile/ken_nakamura.webp' | relative_url }}" type="image/webp">
        <img src="{{ '/assets/profile/ken_nakamura.jpg' | relative_url }}" alt="Ken Nakamura" width="220" height="220" decoding="async" fetchpriority="high">
      </picture>
    </div>
  </aside>
</div>

<div class="resume-timeline">
  <section class="timeline-section">
    <div class="timeline-icon"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></div>
    <div class="timeline-label">Education</div>
    <div class="timeline-content">
      <div class="timeline-row">
        <div class="timeline-date">Apr 2023&ndash;Mar 2027</div>
        <div class="timeline-main">
          <strong>B.Eng. in Mathematical Engineering and Information Physics</strong>
          <p>The University of Tokyo, Faculty of Engineering.</p>
        </div>
        <div class="timeline-place">Tokyo, Japan</div>
      </div>
    </div>
  </section>

  <section class="timeline-section">
    <div class="timeline-icon"><i class="fa-solid fa-award" aria-hidden="true"></i></div>
    <div class="timeline-label">Selected<br>Fellowships<br>and Grants</div>
    <div class="timeline-content">
      <div class="timeline-row">
        <div class="timeline-date">2025&ndash;2026</div>
        <div class="timeline-main">
          <strong>MITOU IT Program, Selected Developer</strong>
          <p>Ministry of Economy, Trade and Industry (METI), Government of Japan.</p>
        </div>
        <div class="timeline-place">Japan</div>
      </div>
      <div class="timeline-row">
        <div class="timeline-date">2025</div>
        <div class="timeline-main">
          <strong>Nakatani Research and International Experiences for Students Fellowship Program</strong>
          <p>Nakatani Foundation / Georgia Institute of Technology.</p>
        </div>
        <div class="timeline-place">USA</div>
      </div>
      <div class="timeline-row">
        <div class="timeline-date">2025</div>
        <div class="timeline-main">
          <strong>Nakatani Advanced Research Internship Program</strong>
          <p>Nakatani Foundation.</p>
        </div>
        <div class="timeline-place">Germany</div>
      </div>
    </div>
  </section>

  <section class="timeline-section">
    <div class="timeline-icon"><i class="fa-solid fa-trophy" aria-hidden="true"></i></div>
    <div class="timeline-label">Honors<br>&amp; Awards</div>
    <div class="timeline-content">
      <div class="timeline-row">
        <div class="timeline-date">Jun 2026</div>
        <div class="timeline-main">
          <strong>MITOU Super Creator Certification</strong>
          <p>Ministry of Economy, Trade and Industry (METI), Government of Japan.</p>
        </div>
        <div class="timeline-place">Japan</div>
      </div>
      <div class="timeline-row">
        <div class="timeline-date">Aug 2022</div>
        <div class="timeline-main">
          <strong>Chemistry Grand Prix, Bronze Prize</strong>
          <p>Chemical Society of Japan.</p>
        </div>
        <div class="timeline-place">Japan</div>
      </div>
    </div>
  </section>

  <section class="timeline-section">
    <div class="timeline-icon"><i class="fa-solid fa-link" aria-hidden="true"></i></div>
    <div class="timeline-label">Links</div>
    <div class="timeline-content">
      <div class="timeline-links">
        <a href="https://github.com/nken-eccs"><i class="fa-brands fa-github" aria-hidden="true"></i>GitHub</a>
        <a href="https://scholar.google.com/citations?user=bwohtdYAAAAJ"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
        <a href="https://www.linkedin.com/in/ken-nakamura-jp/"><i class="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
        <a href="{{ '/assets/pdf/ken_nakamura_cv.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-lines" aria-hidden="true"></i>CV (PDF)</a>
      </div>
    </div>
  </section>
</div>
