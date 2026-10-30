# Copilot guidance — Oru Studio web

Static multilingual studio website. Read README.md for the current workflow.

- Edit content/site.json for EN/ES landing-page copy and scripts/build.mjs for the shared HTML template.
- Edit content/privacy-en.json and content/privacy-es.json for policy content only when requested; preserve policy dates unless substantively reviewed.
- Run node scripts/build.mjs and node scripts/check.mjs after source changes. Commit generated HTML alongside its source.
- Preview with node scripts/serve.mjs. No npm dependencies or runtime framework are required.
- Preserve public URLs: /, /es/index.html, /en/privacy-policy.html and /es/privacy-policy.html.
- Preserve CNAME, app-ads.txt and the Sitemap.xml filename. robots.txt uses its exact casing.
- Oru Studio is the main brand; PawPal and SeaCurrent are projects in development. Label SeaCurrent concept art accurately.
- Studio branding: F:/GithubRepo/Oru Studio/01_Brand/OruStudio_BrandGuide_v0.1.md. Use local Manrope/DM Sans, charcoal/ivory/amber and the selected weathered guardian. The SVG wordmark is a reviewable production candidate, not a newly approved master.
- PawPal's Art Bible applies to its game artwork, not the studio's surrounding UI. Keep each game's own appearance within screenshots.
- Media sources and draft status: docs/media-v001.md and docs/review-v002.md. Create versioned derivatives; do not overwrite source art or reels.
- No placeholder store/social links, invented release dates or unconfirmed features.
- Check both languages, 320 px mobile and desktop, local assets, anchors and video controls. Keep changes simple.
- Publishing is separate from local work: confirm the actual hosting configuration before deployment.
