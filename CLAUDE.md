# @forgespace/brand-guide

Forge Space brand identity guide — static site built with Astro + Tailwind v4.

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
npx wrangler pages deploy dist/  # Deploy to Cloudflare Pages (brand.forgespace.co)
```

## Token Generation

```bash
npm run generate     # node scripts/generate-brand.mjs
```

Runs after changes to `brand/identity.json`. Produces: `src/styles/tokens.css`, `public/downloads/siza-tokens.css`, `public/downloads/forge-tokens.css`, `../forge-space-design-system/css/tokens.css`, `tokens.json`, `tailwind-preset.js`, `tokens.scss`, `theme.ts`, logos, favicons, OG images.

## Conventions

- Node >=22, ESM, TypeScript strict
- Tailwind v4 CSS-first config (`@theme` in global.css, not tailwind.config.ts)
- Never hardcode token values in components — always use CSS vars from tokens.css
- `brand/identity.json` is the single source of truth
- Astro components for static content, islands only for interactive features
- Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (mono)
- Sub-brand fonts: Siza (Plus Jakarta Sans / DM Sans), MCP-Gateway (Instrument Sans / Source Sans 3)
- Colors: primary #8B5CF6 (Forge Purple), secondary #A78BFA (Forge Purple Light), accent #6D28D9 (Forge Purple Dark)

## Brand Hierarchy

- **Forge Space** — parent organization brand (this guide)
- **Siza** — product sub-brand (Plus Jakarta Sans / DM Sans / IBM Plex Mono)
- **MCP-Gateway** — product sub-brand (Instrument Sans / Source Sans 3 / IBM Plex Mono)

## Logo

- 3-tier notch anvil using the Flame Rise color system (amber top, blue middle, purple base)
- 7 variants: wordmark, monogram, icon, abstract, wordmark-blue, wordmark-purple, wordmark-white

## Key Files

- `brand/identity.json` — BrandIdentity JSON (source of truth)
- `src/styles/tokens.css` — CSS custom properties (generated)
- `src/styles/global.css` — Tailwind v4 @theme + base styles
- `scripts/generate-brand.mjs` — Token generation pipeline
- `public/logos/` — SVG logo variants (wordmark, monogram, abstract, icon, tint wordmarks)
- `public/downloads/` — Downloadable token packages
