**Repository Branding (v0.5.0, 2026-03-02)**

- **docs/REPOSITORY_BRANDING.md**: Single checklist for applying Forge Space brand across repos. README header template (CDN wordmark), per-repo checklist, asset URL table (SVG, PNG, WEBP), Stitch + brand tokens section, instructions for apply-readme-branding scripts in core.
- **Logo and assets**: CDN serves SVG, PNG, WEBP at same path (e.g. brand.forgespace.co/logos/wordmark.png, .webp). Table in REPOSITORY_BRANDING lists wordmark variants, monogram, icon, abstract, og default/article/social.
- **Raster export**: `npm run export:raster` runs scripts/export-raster-assets.mjs (sharp). Generates .png and .webp next to each SVG in public/logos/, public/og/, public/favicons/. DevDep: sharp. Run after changing logos so CDN can serve raster.
- **Version**: package.json 0.5.0. CHANGELOG 0.5.0 entry: Repository Branding checklist, asset table, raster export, core apply-readme-branding-all. README links to docs/REPOSITORY_BRANDING.md.
- All 8 Forge Space repos (forge-serena.yml) already have CDN wordmark in README; no PRs needed for header. For new repos or audits use core script.