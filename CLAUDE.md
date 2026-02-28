# @forgespace/brand-guide

Siza brand identity guide — static site built with Astro + Tailwind v4.

## Architecture

- **Static site**: Astro with Tailwind CSS v4 (Vite plugin)
- **Brand source**: `brand/identity.json` — all tokens/assets derive from this file
- **Token pipeline**: `scripts/generate-brand.mjs` reads identity.json → writes CSS, Tailwind, JSON, Sass, React exports
- **Assets**: Logos, favicons, OG images in `public/`
- **Deploy**: Cloudflare Pages at `brand.forgespace.co`

## Commands

```bash
npm run dev          # Astro dev server
npm run build        # Static build to dist/
npm run preview      # Preview built site
npm run check        # Astro type checking
```

## Conventions

- Node >=22, ESM, TypeScript strict
- Tailwind v4 CSS-first config (`@theme` in global.css, not tailwind.config.ts)
- Never hardcode token values in components — always use CSS vars from tokens.css
- `brand/identity.json` is the single source of truth
- Astro components for static content, islands only for interactive features
- Fonts: Outfit (headings), Inter (body), JetBrains Mono (mono)
- Colors: primary #7c3aed, secondary #5c6ee6, accent #e12bfd

## Key Files

- `brand/identity.json` — BrandIdentity JSON (source of truth)
- `src/styles/tokens.css` — CSS custom properties (generated)
- `src/styles/global.css` — Tailwind v4 @theme + base styles
- `scripts/generate-brand.mjs` — Token generation pipeline
- `public/logos/` — SVG logo variants (wordmark, monogram, abstract, icon)
- `public/downloads/` — Downloadable token packages
