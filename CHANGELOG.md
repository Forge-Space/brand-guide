# Changelog

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
