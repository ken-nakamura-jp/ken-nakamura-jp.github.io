---
layout: page
title: About
permalink: /
nav: false
nav_order: 1
---

<style>
  :root {
    --global-theme-color: #2563eb;
    --global-hover-color: #1d4ed8;
    --global-divider-color: #dbeafe;
  }

  html[data-theme="dark"] {
    --global-theme-color: #60a5fa;
    --global-hover-color: #93c5fd;
    --global-divider-color: #334155;
  }

  body {
    font-family:
      "Inter", "Aptos", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    line-height: 1.68;
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
  }

  #navbar .navbar-nav .nav-link:hover,
  #navbar .navbar-nav .nav-item.active > .nav-link,
  a {
    color: var(--global-theme-color);
  }

  a:hover {
    color: var(--global-hover-color);
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

  .research-emphasis {
    color: var(--global-theme-color);
  }

  .cv-external-icon {
    margin-left: 0.32rem;
    color: inherit;
    font-size: 0.66em;
    line-height: 1;
    transform: translateY(-0.08rem);
  }

  .about-list {
    padding-left: 1.15rem;
  }

  .about-list li {
    margin: 0.35rem 0;
  }

  .contact-list,
  .links-list {
    list-style: none;
    padding-left: 0;
  }

  .contact-list li,
  .links-list li {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0.45rem 0;
  }

  .contact-list i,
  .links-list i {
    width: 1.25rem;
    color: var(--global-theme-color);
    text-align: center;
  }

  .contact-list .fa-envelope {
    color: #64748b;
  }

  .profile-photo {
    float: right;
    width: 148px;
    max-width: 32%;
    margin: 0.25rem 0 1rem 1.75rem;
  }

  .profile-photo img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  }

  @media (max-width: 640px) {
    .profile-photo {
      float: none;
      width: 128px;
      max-width: 45%;
      margin: 0.25rem auto 1rem;
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

<div class="profile-photo">
  <img src="{{ '/assets/profile/ken_nakamura.jpg' | relative_url }}" alt="Ken Nakamura">
</div>

I am a senior-year undergraduate student in the Department of Mathematical Engineering and Information Physics, Faculty of Engineering, The University of Tokyo.

My research interests are in understanding <strong class="research-emphasis">the mechanisms underlying human cognition and conceptual understanding</strong>, and the <strong class="research-emphasis">mathematical principles underlying intelligence</strong>, including how perception, concepts, and language abilities arise and become grounded (for example, through learning dynamics, compositional structure, and interactions among cognitive systems). My current work studies how learned representations become predictive of human perception and brain activity, using model-brain alignment and representation analysis as tools for probing these questions.

I am an undergraduate researcher in the Amano-Nakai-Nakayama Lab at The University of Tokyo, advised by Prof. Kaoru Amano and Assoc. Prof. Tomoya Nakai. I previously conducted research in the Oizumi Lab under Prof. Masafumi Oizumi. I have also worked on research internships at Georgia Institute of Technology and in the Smart Data & Knowledge Services Department at German Research Center for Artificial Intelligence (DFKI).

**Research Interests**

human cognition, conceptual understanding, principles of intelligence, language abilities, NeuroAI, model-brain alignment, representation analysis, self-supervised learning.

**Education**

<ul class="about-list">
  <li>The University of Tokyo, Faculty of Engineering, B.Eng. in Mathematical Engineering and Information Physics, Apr 2023&ndash;Mar 2027 (expected).</li>
</ul>

**Selected Fellowships and Grants**

<ul class="about-list">
  <li>MITOU IT Program, Selected Developer, Ministry of Economy, Trade and Industry (METI), Government of Japan, 2025&ndash;2026.</li>
  <li>Nakatani Research and International Experiences for Students Fellowship Program, Nakatani Foundation / Georgia Institute of Technology, 2025.</li>
  <li>Nakatani Advanced Research Internship Program, Nakatani Foundation, 2025.</li>
</ul>

**Selected Honors and Awards**

<ul class="about-list">
  <li>MITOU Super Creator Certification, Ministry of Economy, Trade and Industry (METI), Government of Japan, Jun 2026.</li>
  <li>Chemistry Grand Prix, Bronze Prize, Chemical Society of Japan, Aug 2022.</li>
</ul>

**Contact**

<ul class="contact-list">
  <li><i class="fa-solid fa-envelope" aria-hidden="true"></i><span>nakamuraken1007 [at] g.ecc.u-tokyo.ac.jp</span></li>
</ul>

**Links**

<ul class="links-list">
  <li><i class="ai ai-google-scholar" aria-hidden="true"></i><a href="https://scholar.google.com/citations?user=bwohtdYAAAAJ">Google Scholar</a></li>
  <li><i class="fa-brands fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/in/ken-nakamura-jp/">LinkedIn</a></li>
  <li><i class="fa-brands fa-github" aria-hidden="true"></i><a href="https://github.com/nken-eccs">GitHub</a></li>
</ul>
