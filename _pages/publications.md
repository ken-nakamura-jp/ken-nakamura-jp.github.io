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
    --global-theme-color: #2563eb;
    --global-hover-color: #1d4ed8;
    --global-divider-color: #dbeafe;
  }

  body {
    font-family:
      "Inter", "Aptos", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    line-height: 1.68;
  }

  #navbar {
    border-bottom: 1px solid #dbeafe;
    min-height: 58px;
  }

  #navbar .container {
    min-height: 56px;
  }

  #navbar .navbar-nav .nav-link,
  #navbar .navbar-brand {
    color: #111827;
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
    width: 3.2rem;
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
    color: #1d4ed8;
  }

  a:hover {
    color: #1e40af;
  }

  .post-title,
  .page-title,
  h1 {
    color: #0f172a;
    font-weight: 500;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll('a.nav-link[href$="/cv/"], a.nav-link[href$="ken_nakamura_cv.pdf"]')
      .forEach(function (link) {
        link.href = "{{ '/assets/pdf/ken_nakamura_cv.pdf' | relative_url }}";
        link.target = "_blank";
        link.rel = "noopener";
      });
  });
</script>

<div class="publications">

{% bibliography %}

</div>
