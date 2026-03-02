# Changelog

## [0.5.0] - 2026-03-02

### Added
- **Repository Branding checklist** — `docs/REPOSITORY_BRANDING.md` with README header template, per-repo checklist, and Stitch + brand tokens guidance
- Instructions for applying CDN wordmark (`https://brand.forgespace.co/logos/wordmark.svg`) across Forge Space repos
- **Logo and assets: SVG, PNG, WEBP** — CDN serves all three formats (e.g. `wordmark.svg`, `wordmark.png`, `wordmark.webp`). Table of asset URLs in REPOSITORY_BRANDING.md.
- **Raster export** — `npm run export:raster` (script `scripts/export-raster-assets.mjs`) generates PNG and WEBP from SVGs in `public/logos/`, `public/og/`, `public/favicons/` (sharp).
- **core: apply-readme-branding-all.sh** — wrapper to run README branding on all Forge Space projects; supports `--dry-run`.
- Stitch MCP section: how to generate UI components with Forge Space tokens (primary #7c3aed, secondary #3b82f6)

### Changed
- Version bump for branding sync release

## [0.3.1] - 2026-03-01

### Changed
- Logo typography: Jockey One replaces Space Grotesk for wordmark/titles
- OG images: darker gradient (#4c1d95→#1e40af), centered vertical layout, opacity-stepped anvil tiers
- Fonts embedded as base64 @font-face in SVGs for social media crawler compatibility

### Added
- Font files: `src/fonts/jockey-one.woff2`, `src/fonts/space-grotesk.woff`
- Wordmark tint variants: wordmark-white, wordmark-blue, wordmark-purple
- `createdAt` preservation in identity.json across regenerations

## [0.3.0] - 2026-03-01

### Added

- npm package exports: `@forgespace/brand-guide` (identity object + types), `@forgespace/brand-guide/identity` (raw JSON)
- Library build target (`dist-lib/`) separate from Astro site build (`dist/`)
- TypeScript declarations for all exported brand identity types
- Publish workflow (`.github/workflows/publish.yml`) triggered on version tags
- `.npmignore` to exclude site-only files from tarball

### Changed

- Package is no longer `private` — publishable to npm as `@forgespace/brand-guide`
- `@forgespace/branding-mcp` moved to dependencies (required for type resolution)

## [0.2.0] - 2026-03-01

### Changed
- **Rebrand: Siza → Forge Space** — site now represents the parent organization
  - Brand name, tagline ("The developer tools ecosystem."), color name ("Forge Purple")
  - All 10 pages updated with Forge Space identity
- Stacked two-line wordmark (FORGE / SPACE) with Outfit 700, 20px, 0.12em letter-spacing
- 7 logo variants: wordmark, monogram, icon, abstract, wordmark-blue, wordmark-purple, wordmark-white
- Anvil favicon and 3 OG images with Flame Rise mark
- `generate-brand.mjs` inlines anvil SVGs with WORDMARK_TEXT constant

### Added
- 3 new pages: concepts (logo system), palettes (color combos), compare (brand comparison)
- Product Brands section on overview with Siza as sub-brand (mark TBD)
- 3 tint wordmark variants (blue, purple, white) for monochrome contexts
- 39 concept SVGs archived in public/logos/concepts/

## [0.1.0] - 2026-02-28

### Added
- Astro static site with Tailwind CSS v4
- Siza brand identity generated via branding-mcp v0.5.0
  - Primary: #7c3aed, Secondary: #5c6ee6, Accent: #e12bfd
  - Fonts: Outfit (headings), Inter (body), JetBrains Mono (mono)
  - Major-third (1.25) type scale, 9-step neutral palette
  - Shadows, borders, motion, gradients token systems
- 7 brand guide pages:
  - Overview with brand snapshot and navigation
  - Logo with 4 SVG variants and usage rules
  - Colors with WCAG contrast matrix
  - Typography with type scale and font specimens
  - Tokens with spacing, shadows, borders, motion, gradients
  - Assets with downloadable logos, favicons, OG images
  - Usage guidelines with do's/don'ts and accessibility rules
- Design token exports: CSS, W3C JSON, Tailwind, Sass, React
- Brand generation script (`scripts/generate-brand.mjs`)
- Cloudflare Pages deployment workflow
- Responsive layout with sidebar nav and mobile bottom nav
