# Forge Space Brand Guide

Brand identity guidelines, design tokens, and assets for [Forge Space](https://forgespace.co) — the developer tools ecosystem.

**Live:** [brand.forgespace.co](https://brand.forgespace.co)

## What's Inside

- **Logo** — 3-tier notch anvil (Flame Rise) with 7 variants: wordmark, monogram, icon, abstract, + 3 tint wordmarks
- **Colors** — Forge Purple (#7C3AED), Forge Blue (#3B82F6), Forge Amber (#F59E0B), neutrals, semantic (WCAG validated)
- **Typography** — Outfit / Inter / JetBrains Mono with major-third type scale
- **Design Tokens** — CSS, JSON (W3C), Tailwind, Sass, React theme exports
- **Spacing, Shadows, Borders, Motion, Gradients** — Full token coverage

## Product Brands

| Product | Status | Mark |
|---------|--------|------|
| Siza | Active | TBD (inherits Forge Space tokens) |

## Use as Template

This repo doubles as a reusable brand guide template. See [TEMPLATE.md](TEMPLATE.md) for instructions on creating your own brand guide.

## Quick Start

```bash
npm install
npm run dev
```

## Design Tokens

Download tokens in your preferred format from the live site, or find them in `public/downloads/`:

| Format | File |
|--------|------|
| CSS Custom Properties | `tokens.css` |
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
