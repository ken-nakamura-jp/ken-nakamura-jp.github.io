# Ken Nakamura’s website

Personal research website: <https://ken-nakamura-jp.github.io>.

The Home and Publications pages share a responsive Source Sans 3 layout. Navigation stays at the top while scrolling. Fonts, icons, portrait, and CVs are hosted locally; content and navigation work without JavaScript or external font/icon services. A small progressive enhancement waits for the embedded fonts to decode before the first paint. Dark mode follows the visitor’s system preference.

## Updating content

| Content                                                           | Source                                  |
| ----------------------------------------------------------------- | --------------------------------------- |
| Profile, contact links, research focus, education, visits, honors | `_data/profile.yml`                     |
| Publications                                                      | `_bibliography/papers.bib`              |
| A4 CV (the profile button’s target)                               | `assets/pdf/ken_nakamura_cv.pdf`        |
| US Letter CV                                                      | `assets/pdf/ken_nakamura_cv_letter.pdf` |
| Portrait                                                          | `assets/profile/ken_nakamura.webp`      |
| Site title, description, canonical URL, bibliography ordering     | `_config.yml`                           |

Edit the data file rather than both pages. Add publications to `papers.bib`; the list sorts by year descending, renders initials, and highlights Ken’s name using `scholar.first_name` / `scholar.last_name` in `_config.yml`. For arXiv preprints, include `archivePrefix = {arXiv}` and `eprint = {...}`; `note = {Under review}` is optional. Journal articles use `journal`, `volume`, `pages`, and `doi`. The compact formatter is in `_layouts/profile-bib.liquid`.

Build the CVs from the separate LaTeX CV project, then copy both PDFs here. This repository does not regenerate CVs from YAML. The Letter PDF is directly available at `/assets/pdf/ken_nakamura_cv_letter.pdf`; the visible CV button uses A4. Keep these filenames stable so existing links continue to work.

## Layout and styling

- `_layouts/profile.liquid`: document head, shared page shell, footer.
- `_includes/profile/`: header, profile links, Home sections, local SVG icons.
- `assets/css/profile.css`: colors, typography, spacing, responsive layout, print styles.
- `assets/css/profile-fonts.css`: generated WOFF2 font subsets embedded in a blocking stylesheet. This keeps the selected typography from the first text paint, without a separate font download or a loading screen.
- `bin/fonts/source-sans-3/`: original Source Sans 3 WOFF inputs and OFL license (excluded from the published site).
- `assets/fonts/source-sans-3/LICENSE.txt`: public font license.

The subsets cover basic Latin, Latin-1 accented characters, and common punctuation used by the English site. They are internally renamed **Ken Profile Sans** to respect the font license; their appearance is unchanged. Other scripts use the system fallback. To expand character coverage, edit `RANGES` in `bin/build_profile_fonts.py`, then regenerate and commit `profile-fonts.css`:

```sh
python3 -m venv /tmp/profile-font-build
/tmp/profile-font-build/bin/pip install -r bin/fonts/requirements.txt
/tmp/profile-font-build/bin/python bin/build_profile_fonts.py
```

Normal content updates and deployment do not require this Python toolchain. The small `_includes/profile/font-ready.liquid` enhancement waits for local font decoding before revealing the page, including on slower CPUs. It reveals the page on font errors too, and the default no-JavaScript layout stays visible. Keep both font and page stylesheets as ordinary blocking `<link rel="stylesheet">` elements. Reintroducing external font requests with `font-display: swap` causes visible text resizing on a cold load.

- `_pages/about.md`, `_pages/publications.md`, `_pages/404.md`: page routes and short entry points.

These are site-specific templates with distinct names, so they do not shadow al-folio gem templates. Keep theme upgrades separate from content edits. The remaining excluded starter examples and cross-plugin tests belong to the upstream al-folio scaffold; see [ownership boundaries](docs/BOUNDARIES.md) before changing shared runtime behavior.

## Preview and checks

Use Ruby 3.3.5 or newer with Bundler matching `Gemfile.lock`, plus Node 20 or newer.

```sh
bundle install
npm ci
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open <http://127.0.0.1:4000>. Before publishing:

```sh
npm run lint:prettier
npm run lint:style-contract
JEKYLL_ENV=production bundle exec jekyll build
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
npx playwright install chromium
npm run test:site
```

`test:site` serves the built `_site` directory and checks both pages at desktop, tablet, and narrow mobile widths, in light and dark mode, including navigation, CV links, bibliography formatting, overflow, and local asset delivery. Screenshots are saved under `test-results/` (ignored by Git).

The inherited `test:visual` and integration scripts exercise upstream theme parity, not this site’s selected design. The site-check workflow runs the relevant checks for this customization.

## Publishing

Pushing or merging into `main` triggers `.github/workflows/deploy.yml`: it builds Jekyll, removes unused CSS, and publishes `_site` to `gh-pages`. GitHub Pages serves that branch. Do not edit `gh-pages` manually. Check the deployment action after pushing.

The root Google Search Console verification file must remain in place. The footer year is generated automatically at build time.
