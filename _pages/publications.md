---
layout: page
permalink: /publications/
title: Publications
description: Publications and preprints.
nav: true
nav_order: 2
---

<style>
  :root {
    --global-theme-color: #2d5f93;
    --global-hover-color: #21466d;
    --global-divider-color: #d9e3ef;
    --site-muted-color: #526276;
    --site-soft-blue: rgba(45, 95, 147, 0.065);
    --site-soft-blue-border: rgba(45, 95, 147, 0.16);
    --site-button-hover-text: #fff;
  }

  html[data-theme="dark"] {
    --global-theme-color: #86acd4;
    --global-hover-color: #b3cdec;
    --global-divider-color: #303a49;
    --site-muted-color: #a9b5c4;
    --site-soft-blue: rgba(134, 172, 212, 0.11);
    --site-soft-blue-border: rgba(134, 172, 212, 0.2);
    --site-button-hover-text: #0f172a;
  }

  body {
    font-family:
      "Inter", "Aptos", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    line-height: 1.68;
  }

  .container[role="main"] {
    max-width: 980px;
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
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1rem;
    height: 1rem;
    font-family: inherit;
    font-style: normal;
    line-height: 1;
  }

  html[data-theme-setting="system"] #navbar #light-toggle-system,
  html[data-theme-setting="dark"] #navbar #light-toggle-dark,
  html[data-theme-setting="light"] #navbar #light-toggle-light {
    display: inline-flex;
  }

  #navbar #light-toggle .theme-toggle-icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  #navbar #light-toggle:hover {
    color: var(--global-hover-color);
  }

  @media (max-width: 575.98px) {
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
  .publications a,
  .publications a:hover {
    text-decoration: none;
  }

  .post-title,
  .page-title,
  h1 {
    color: var(--global-text-color);
    font-weight: 500;
  }

  .post-header {
    margin-bottom: 2.2rem;
  }

  .post-title {
    margin-bottom: 0.35rem;
    font-size: 2.6rem;
    line-height: 1.08;
  }

  .post-description {
    color: var(--site-muted-color);
    font-size: 1rem;
  }

  .publications {
    margin-top: 1.4rem;
  }

  .publications h2.bibliography {
    margin: 2.25rem 0 1.05rem;
    padding-top: 0.85rem;
    color: var(--global-theme-color);
    border-top: 1px solid var(--global-divider-color);
    font-size: 1.02rem;
    font-weight: 650;
    letter-spacing: 0.08em;
    line-height: 1.2;
    text-align: left;
  }

  .publications h2.bibliography:first-child {
    margin-top: 0;
  }

  .publications ol.bibliography {
    margin: 0;
  }

  .publications ol.bibliography li {
    margin-bottom: 1.5rem;
    padding-bottom: 1.45rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .publications ol.bibliography li:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }

  .publications ol.bibliography li .row {
    margin-right: 0;
    margin-left: 0;
  }

  .publications ol.bibliography li [class^="col-sm"] {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
  }

  .publications ol.bibliography li .title {
    color: var(--global-text-color);
    font-size: 1.04rem;
    font-weight: 650;
    line-height: 1.45;
  }

  .publications ol.bibliography li .author,
  .publications ol.bibliography li .periodical {
    margin-top: 0.26rem;
    color: var(--site-muted-color);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .publications ol.bibliography li .author em {
    border-bottom: 0;
    color: var(--global-text-color);
    font-style: normal;
    font-weight: 600;
  }

  .publications ol.bibliography li .author a,
  .publications ol.bibliography li .author a:hover {
    border-bottom: 0;
    text-decoration: none;
  }

  .publications ol.bibliography li .abbr abbr {
    color: var(--site-button-hover-text) !important;
    background: var(--global-theme-color);
  }

  .publications ol.bibliography li .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.72rem;
  }

  .publications ol.bibliography li .links a.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.85rem;
    margin: 0;
    padding: 0.22rem 0.72rem;
    color: var(--global-theme-color);
    background: var(--site-soft-blue);
    border: 1px solid var(--site-soft-blue-border);
    border-radius: 4px;
    box-shadow: none;
    font-size: 0.78rem;
    font-weight: 650;
    letter-spacing: 0.03em;
    line-height: 1;
    text-decoration: none !important;
  }

  .publications ol.bibliography li .links a.btn:hover {
    color: var(--site-button-hover-text);
    background: var(--global-hover-color);
    border-color: var(--global-hover-color);
    text-decoration: none !important;
  }

  .cv-external-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.32rem;
    color: inherit;
    font-size: 0.66em;
    line-height: 1;
    transform: translateY(-0.08rem);
  }

  .cv-external-icon::before {
    content: "\2197";
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const themeIcons = {
      "light-toggle-system":
        '<svg class="theme-toggle-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 15A7 7 0 1 0 8 1v14Zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16Z"></path></svg>',
      "light-toggle-dark":
        '<svg class="theme-toggle-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278Z"></path></svg>',
      "light-toggle-light":
        '<svg class="theme-toggle-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0Zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13Zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5ZM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8Zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0Zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0Zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707ZM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708Z"></path></svg>',
    };

    Object.keys(themeIcons).forEach(function (id) {
      const icon = document.getElementById(id);
      if (icon) {
        icon.removeAttribute("class");
        icon.innerHTML = themeIcons[id];
      }
    });

    document
      .querySelectorAll('a.nav-link[href$="/cv/"], a.nav-link[href$="ken_nakamura_cv.pdf"]')
      .forEach(function (link) {
        link.href = "{{ '/assets/pdf/ken_nakamura_cv.pdf' | relative_url }}";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.title = "Open CV in a new tab";

        if (!link.querySelector(".cv-external-icon")) {
          const icon = document.createElement("span");
          icon.className = "cv-external-icon";
          icon.setAttribute("aria-hidden", "true");
          link.appendChild(icon);
        }
      });
  });
</script>

<div class="publications">

{% bibliography %}

</div>
