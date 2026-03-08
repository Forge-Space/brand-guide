# brand-guide Current State (2026-03-01)

## Version: 0.3.1 (PUBLISHED on npm)
- npm: `@forgespace/brand-guide@0.3.1`
- PR #3: MERGED — npm package + OG/font overhaul
- PR #4: MERGED — SVG centering fix (translate(-3.5, 1) for icon/monogram, translate(0, 1) for wordmarks)
- Working tree: clean, deployed to Cloudflare Pages + npm
- Repo visibility: PUBLIC (changed from private 2026-03-01)

## Cross-Repo Brand Integration (SHIPPED 2026-03-01)
Brand-guide now consumed as single source of truth across ecosystem:
- **siza**: PR #243 (OPEN) — font swap (DM Sans/Plus Jakarta Sans/IBM Plex Mono), CSS tokens, 40+ hex→brand tokens, logos, Forge Space built-in theme
- **siza-mcp**: PR #85 (MERGED) — replaced 3.6MB bloated SVGs with optimized brand assets, brand color defaults
- **mcp-gateway**: PR #95 (MERGED) — claudecodeui full rebrand (logo, colors, fonts, CSS tokens)
- **branding-mcp**: PR #14 (MERGED) — Forge Space brand identity as built-in template (`brand://templates/forge-space`)
- **forge-patterns**: PR #60 (MERGED) — README header
- **brand-guide, siza-gen**: README headers pushed directly to main
- All 7 repos: standardized Forge Space wordmark header in READMEs

## Open PRs: 0 (on brand-guide itself)
## Open Issues: 0

## npm Package Structure
- Dual build: `dist/` (Astro site) + `dist-lib/` (npm library)
- Entry: `@forgespace/brand-guide` (identity + types), `@forgespace/brand-guide/identity` (raw JSON)
- Exports: `identity` object (typed `BrandIdentity`), all brand types from branding-mcp
- `.npmignore` excludes site files from tarball