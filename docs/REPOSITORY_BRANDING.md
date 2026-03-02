# Repository Branding Checklist

Apply Forge Space brand consistently across all ecosystem repos. Use this checklist when adding a new repo or auditing existing ones.

## Brand assets

- **CDN base:** `https://brand.forgespace.co`
- **Tokens:** Purple `#7c3aed`, Blue `#3b82f6`, Siza sub-brand cyan spark

### Logo and asset URLs (SVG, PNG, WEBP)

Use the **new logo and assets** from the CDN. Same path, different extension:

| Asset | SVG | PNG | WEBP |
|-------|-----|-----|------|
| Wordmark (default) | `/logos/wordmark.svg` | `/logos/wordmark.png` | `/logos/wordmark.webp` |
| Wordmark blue | `/logos/wordmark-blue.svg` | `/logos/wordmark-blue.png` | `/logos/wordmark-blue.webp` |
| Wordmark purple | `/logos/wordmark-purple.svg` | `/logos/wordmark-purple.png` | `/logos/wordmark-purple.webp` |
| Wordmark white | `/logos/wordmark-white.svg` | `/logos/wordmark-white.png` | `/logos/wordmark-white.webp` |
| Monogram | `/logos/monogram.svg` | `/logos/monogram.png` | `/logos/monogram.webp` |
| Icon | `/logos/icon.svg` | `/logos/icon.png` | `/logos/icon.webp` |
| Abstract | `/logos/abstract.svg` | `/logos/abstract.png` | `/logos/abstract.webp` |
| OG default | `/og/default.svg` | `/og/default.png` | `/og/default.webp` |
| OG article | `/og/article.svg` | `/og/article.png` | `/og/article.webp` |
| OG social | `/og/social.svg` | `/og/social.png` | `/og/social.webp` |

Full URL example: `https://brand.forgespace.co/logos/wordmark.png`. Prefer **SVG** in README and web (scalable); use **PNG** or **WEBP** where raster is required (e.g. social previews, app icons).

## README header

Every Forge Space repo README should start with the standard header:

```markdown
<div align="center">
  <a href="https://forgespace.co">
    <img src="https://brand.forgespace.co/logos/wordmark.svg" alt="Forge Space" height="48">
  </a>
  <h1>Repo Name</h1>
  <p>Short description.</p>
</div>
```

- Use the CDN URL (not a relative path) so the logo works on GitHub. You can use `.svg`, `.png`, or `.webp` (e.g. `wordmark.svg` or `wordmark.png`).
- Keep the link to `https://forgespace.co` for the parent org.

## Checklist (per repo)

- [ ] README starts with the standard header (wordmark + title + one-line description).
- [ ] No hardcoded logo paths; use `https://brand.forgespace.co/logos/wordmark.svg` (or a variant).
- [ ] “Part of [Forge Space](https://github.com/Forge-Space)” (or equivalent) appears in README or docs.
- [ ] If the repo has a UI: design tokens align with `brand/identity.json` (primary #7c3aed, secondary #3b82f6).
- [ ] Sub-brands (e.g. Siza) use their tokens where defined (e.g. Siza cyan accent).

## Forge Space projects (from forge-serena.yml)

| Repo         | README header | Notes                    |
|-------------|----------------|--------------------------|
| brand-guide | ✅             | Source of truth          |
| branding-mcp| ✅             |                          |
| core        | ✅             |                          |
| mcp-gateway | ✅             |                          |
| siza        | ✅             |                          |
| siza-gen    | ✅             |                          |
| siza-mcp    | ✅             |                          |
| ui-mcp      | ✅             |                          |

## Applying the header

Use the shared script from the **core** repo (or from monorepo root):

```bash
# From forge-space root (core must be present)
./core/scripts/apply-readme-branding.sh path/to/repo

# With explicit title and description
./core/scripts/apply-readme-branding.sh path/to/siza-mcp "Siza MCP Server" "AI-driven UI and backend code generation via MCP."
```

The script is idempotent: if the README already contains the CDN wordmark URL, it exits without changes. It prints a suggested `git` + `gh pr create` one-liner for opening a PR.

Or manually: ensure the first 7 lines of README.md match the template above, then adjust the `<h1>` and `<p>` for that repo.

### Apply to all Forge Space projects

From the monorepo root (with **core** checked out):

```bash
# Dry run: show which repos would be updated
./core/scripts/apply-readme-branding-all.sh --dry-run

# Apply header to every project that doesn't have it yet
./core/scripts/apply-readme-branding-all.sh
```

Uses the same project list as `forge-serena.yml` (brand-guide, branding-mcp, core, mcp-gateway, siza, siza-gen, siza-mcp, ui-mcp).

## Generating PNG and WEBP (brand-guide)

Raster assets are generated from SVGs in brand-guide. After changing logos or OG images, run:

```bash
cd brand-guide && npm run export:raster
```

This writes `.png` and `.webp` next to each SVG in `public/logos/`, `public/og/`, and `public/favicons/`. Deploy the site so the CDN serves the new files.

## Stitch / UI components with brand tokens

To generate UI components that use Forge Space tokens in [Stitch](https://stitch.google/):

1. **create_project** (optional): create a Stitch project with a theme that uses our colors.
2. **generate_screen_from_text**: use prompts that reference the brand, e.g. “Dashboard header using primary purple #7c3aed and secondary blue #3b82f6”.
3. **DesignTheme** (when supported): pass `customColor: "#7c3aed"` or `namedColors: { primary: "#7c3aed", secondary: "#3b82f6" }` so generated screens follow the palette.

Reference: `brand/identity.json` and `public/downloads/tokens.css` for the full token set.

## Version

Repository Branding checklist: **v0.5.0** (brand-guide release).
