# brand-guide Architecture

## Identity Pipeline
- `brand/identity.json` — single source of truth (Forge Space brand)
- `scripts/generate-brand.mjs` — generates all derived assets:
  - `src/styles/tokens.css` — CSS custom properties
  - `public/downloads/` — tokens.json, tailwind-preset.js, tokens.scss, theme.ts
  - `public/logos/` — 4 core SVGs (wordmark, monogram, abstract, icon)
  - `public/favicons/favicon-sizes.svg` — anvil favicon
  - `public/og/` — 3 OG images (default, article, social)

## Logo System
- Base shape: Flame Rise anvil
  - Top: chevron path fill="#F59E0B" (amber/fire)
  - Mid: rect fill="#3B82F6" (blue/reliability)
  - Base: rect fill="#7C3AED" (purple/brand)
- Wordmark: stacked two-line layout (200x64 viewBox)
  - FORGE at x=78 y=30, SPACE at x=78 y=52
  - Space Grotesk 700, 20px, letter-spacing 0.12em
  - WORDMARK_TEXT constant in generate-brand.mjs
- Tint variants (manually maintained, NOT overwritten by generator):
  - wordmark-blue.svg, wordmark-purple.svg, wordmark-white.svg
- generate-brand.mjs inlines anvil SVGs (doesn't use branding-mcp logo gen)

## Site Structure
- Astro static site, Tailwind v4 CSS-first
- Layout: BaseLayout.astro (sidebar nav + mobile bottom nav)
- 10 pages: index, logo, colors, typography, tokens, assets, usage, concepts, palettes, compare

## Brand Hierarchy & Typography
- Forge Space = parent org brand: Space Grotesk / IBM Plex Sans / IBM Plex Mono
- Siza = product sub-brand: Plus Jakarta Sans / DM Sans / IBM Plex Mono
- MCP-Gateway = product sub-brand: Instrument Sans / Source Sans 3 / IBM Plex Mono
- Shared: IBM Plex Mono across entire ecosystem
- `identity.json` has `subBrands` object with per-brand font stacks
- All 7 font families loaded via Google Fonts in BaseLayout.astro
- Design rationale: Space Grotesk's geometric, sharp letterforms match the industrial anvil mark; IBM Plex family shares design DNA for "engineered precision" feel; replaced generic Outfit/Inter pairing

## Gotchas
- generate-brand.mjs overwrites 4 core logos but NOT tint wordmarks
- Tint wordmarks must be updated manually when wordmark format changes
- identity.json logo section must stay synced with generate-brand.mjs
