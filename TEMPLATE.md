# Using This as a Template

This brand guide can be forked and customized for any brand.

## Quick Start

1. Fork this repo
2. Replace `brand/identity.json` with your own brand identity
3. Run `npm install && npm run build`
4. Deploy to your preferred platform

## Generating a Brand Identity

### Option A: Using branding-mcp

If you have [@forgespace/branding-mcp](https://github.com/Forge-Space/branding-mcp) installed:

```
generate_design_system({
  brandName: "YourBrand",
  industry: "your-industry",
  style: "minimal",           // minimal | bold | elegant | playful | corporate | tech | organic | retro
  baseColor: "#your-hex",
  harmony: "complementary",   // complementary | analogous | triadic | split-complementary | tetradic | monochromatic
  theme: "both",              // light | dark | both
  exportFormats: ["css", "json", "tailwind"]
})
```

Save the `identity` field from the output to `brand/identity.json`.

### Option B: Manual JSON

Create `brand/identity.json` following the BrandIdentity schema. Required fields:

```json
{
  "id": "brand_unique_id",
  "name": "Your Brand",
  "tagline": "Your tagline",
  "industry": "your-industry",
  "style": "minimal",
  "colors": {
    "primary": { "name": "Primary", "hex": "#hex", "hsl": { "h": 0, "s": 0, "l": 0 }, "usage": "Primary brand color" },
    "secondary": { "name": "Secondary", "hex": "#hex", "hsl": { "h": 0, "s": 0, "l": 0 }, "usage": "Secondary brand color" },
    "accent": { "name": "Accent", "hex": "#hex", "hsl": { "h": 0, "s": 0, "l": 0 }, "usage": "Accent color" },
    "neutral": [],
    "semantic": {
      "success": { "name": "success", "hex": "#22c35d", "hsl": { "h": 145, "s": 72, "l": 45 }, "usage": "Success" },
      "warning": { "name": "warning", "hex": "#f59f0a", "hsl": { "h": 40, "s": 93, "l": 50 }, "usage": "Warning" },
      "error": { "name": "error", "hex": "#ef4343", "hsl": { "h": 0, "s": 84, "l": 60 }, "usage": "Error" },
      "info": { "name": "info", "hex": "#368fe7", "hsl": { "h": 213, "s": 77, "l": 56 }, "usage": "Info" }
    }
  },
  "typography": {
    "headingFont": "Your Heading Font",
    "bodyFont": "Your Body Font",
    "monoFont": "Your Mono Font",
    "baseSize": 16,
    "scaleRatio": 1.25,
    "steps": []
  },
  "spacing": { "unit": 4, "values": {} },
  "createdAt": "2026-01-01T00:00:00.000Z"
}
```

Optional fields: `shadows`, `borders`, `motion`, `gradients`, `logo`, `contrast`.
Pages will gracefully hide sections for missing optional fields.

## Customizing Pages

- Edit pages in `src/pages/` (Astro components)
- Add/remove sections as needed
- Modify the layout in `src/layouts/BaseLayout.astro`
- Update Google Fonts link to match your fonts

## Deploying

### Cloudflare Pages

Set these secrets in your repo:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The included workflow deploys on push to main.

### Other platforms

```bash
npm run build   # Output in dist/
```

Upload `dist/` to Vercel, Netlify, or any static hosting.
