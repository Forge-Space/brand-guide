# Changelog

## [0.2.0] - 2026-02-28

### Changed
- Replaced auto-generated circle+S logos with the real Siza anvil mark
  - Wordmark: anvil + "SIZA" text (Outfit 800)
  - Monogram: standalone anvil mark
  - Abstract: outline anvil with decorative elements
  - Icon: compact anvil for favicons
- Updated all OG images to use the anvil mark
- Updated favicons to use the anvil icon

### Added
- Forge Space organization identity in brand/identity.json
- "by Forge Space" attribution in OG images, homepage, and footer
- Logo description documenting the anvil mark design language

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
