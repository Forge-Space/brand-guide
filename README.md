<div align="center">
  <a href="https://forgespace.co">
    <img src="https://brand.forgespace.co/logos/wordmark.svg" alt="Forge Space" height="48">
  </a>
  <h1>Brand Guide</h1>
  <p>Brand identity guidelines, design tokens, and assets for the developer tools ecosystem.</p>
</div>

**Live:** [brand.forgespace.co](https://brand.forgespace.co)

**Sync across repos:** [Repository Branding checklist](docs/REPOSITORY_BRANDING.md) — README header template, per-repo checklist, Stitch + brand tokens.

## What's Inside

- **Logo** — 3-tier notch anvil (Flame Rise) with 7 variants: wordmark, monogram, icon, abstract, + 3 tint wordmarks
- **Colors** — Forge Purple (#7C3AED), Forge Blue (#3B82F6), Forge Amber (#F59E0B), neutrals, semantic (WCAG validated)
- **Typography** — Sora / DM Sans / IBM Plex Mono with major-third type scale (sub-brand stacks for Siza and MCP-Gateway)
- **Design Tokens** — CSS, JSON (W3C), Tailwind, Sass, React theme exports
- **Spacing, Shadows, Borders, Motion, Gradients** — Full token coverage

## Product Brands

| Product | Status | Mark |
|---------|--------|------|
| Siza | Active | TBD (inherits Forge Space tokens) |

## npm Package

Install the brand identity as an npm package for programmatic access in other projects:

```bash
npm install @forgespace/brand-guide
```

```typescript
import { identity } from '@forgespace/brand-guide';
import type { BrandIdentity } from '@forgespace/brand-guide';

console.log(identity.name);               // "Forge Space"
console.log(identity.colors.primary.hex);  // "#7c3aed"
```

Raw JSON import:

```typescript
import identity from '@forgespace/brand-guide/identity';
```

## Use as Template

This repo doubles as a reusable brand guide template. See [TEMPLATE.md](TEMPLATE.md) for instructions on creating your own brand guide.

## Quick Start

```bash
npm install
npm run dev
```

To regenerate brand assets (logos, identity, tokens): ensure `src/fonts/sora.woff2` (Sora) and `src/fonts/dm-sans.woff2` (DM Sans) exist—both available from [Google Fonts](https://fonts.google.com)—then run `npm run generate` and `npm run export:raster`. OG images embed both fonts when present.

## Design Tokens

Download tokens in your preferred format from the live site, or find them in `public/downloads/`:

| Format | File |
|--------|------|
| CSS Custom Properties | `tokens.css` |
| Siza Sub-brand CSS | `siza-tokens.css` |
| W3C Design Tokens | `tokens.json` |
| Tailwind Preset | `tailwind-preset.js` |
| Sass Variables | `tokens.scss` |
| React Theme | `theme.ts` |

## Stack

- [Astro](https://astro.build) — Static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS
- [@forgespace/branding-mcp](https://github.com/Forge-Space/branding-mcp) — Brand identity generation

## License

MIT
