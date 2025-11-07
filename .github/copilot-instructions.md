# Copilot guidance — Pawpal-Web

Quick summary
- This repository is a static, multi-language marketing site (HTML + small JS). Primary content lives under `assets/` with language folders like `assets/en/` and `assets/es/`.

Key files & locations
- `assets/<lang>/Index.html` — language-specific landing pages. Example: `assets/en/Index.html` contains the inline `slides` JS array that defines titles, images, badges and feature cards.
- `assets/hero/`, `assets/images/`, `assets/badges/` — media assets referenced from the language pages.
- `CNAME`, `Sitemap.xml`, `404.html`, `/.webmanifest` — deployment and SEO; do not remove or rename without confirming deployment config.

Project-specific patterns you must follow (discoverable)
- Index filename casing: pages use `Index.html` (capital I) in language folders — preserve exact casing when creating or linking files.
- Inline data model: each `Index.html` contains a `slides` array in script tag (see `assets/en/Index.html`). Update titles, images and badges there; the page renders portfolio/features/screenshots from that array.
- Placeholder tokens: strings such as `PLACEHOLDER_*` appear (support emails, social links, app IDs). Treat them as intentional placeholders unless you also update site copy and metadata.
- Link style: pages use both site-root absolute links (`/en/`, `/es/`) and relative asset paths (`../assets/...`). When moving files or adding languages, verify and fix relative paths.

Local dev & preview (Windows PowerShell)
- Quick static preview from repo root (no build system):
  - python (if installed): `python -m http.server 8000` then open `http://localhost:8000/assets/en/Index.html` in a browser.
  - Alternatively, use VS Code Live Server extension to preview files and verify relative paths.

How to add or update a language page (concrete example)
1. Copy `assets/en/` -> `assets/<new-lang>/` (keep `Index.html` name and casing).
2. In the new `Index.html` update head canonical/hreflang links and any language-specific copy.
3. Update inline `slides` array images and badge paths if needed (example badge path: `../assets/badges/appstore-en.svg`).
4. Test locally (see preview section) and verify links `/new-lang/` work and images load.

JS & content editing notes (examples)
- The UI is data-driven by the `slides` array inside `Index.html`. Example entry:
  - title: `"Pawpal"`
  - image: `"../assets/hero/HeroPawpal.webp"`
  - badges: `{ href: "https://...", img: "../assets/badges/appstore-en.svg" }`
- To change showcased features/screenshots, edit the `features` and `screenshots` arrays in that object.

Deployment / CI notes
- There is no explicit build script in the repo. Presence of `CNAME` suggests GitHub Pages or similar static host. Confirm the exact CI/CD flow before making automated changes to `Sitemap.xml` or `CNAME`.

Common pitfalls to avoid
- Do not rename files only by case on Windows and assume it's applied on the server — GitHub Pages (Linux) is case-sensitive. Ensure git records case-only renames correctly (use a temp name if needed).
- Double-check relative asset paths after moving files (many links use `../assets/...` from within language folders).
- Avoid removing placeholder tokens without replacing all occurrences (email, social, app IDs).

If something in these notes looks wrong or incomplete, tell me what to inspect next (deploy flow, CI, or any other folder) and I'll update this guidance.
