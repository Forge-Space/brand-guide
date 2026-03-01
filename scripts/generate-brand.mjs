import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);
const corePath = dirname(
  require.resolve("@forgespace/branding-mcp/package.json")
);

const {
  generateColorPalette,
  generateTypographySystem,
  generateSpacingScale,
  generateShadowSystem,
  generateBorderSystem,
  generateMotionSystem,
  generateGradientSystem,
  generateSvgLogo,
  defaultLogoConfig,
  generateFavicons,
  generateOgImage,
  exportCssVariables,
  exportDesignTokens,
  exportTailwindPreset,
  exportSassVariables,
  exportReactTheme,
} = await import(
  join(corePath, "dist", "lib", "branding-core", "index.js")
);

const BRAND_NAME = "Forge Space";
const INDUSTRY = "technology";
const STYLE = "tech";
const BASE_COLOR = "#7c3aed";
const HARMONY = "analogous";
const THEME = "both";
const HEADING_CATEGORY = "sans-serif";
const BODY_CATEGORY = "sans-serif";
const SCALE_RATIO = "major-third";
const TAGLINE = "The developer tools ecosystem.";

const PINNED_FONTS = {
  headingFont: "Space Grotesk",
  bodyFont: "IBM Plex Sans",
  monoFont: "IBM Plex Mono",
};

const PINNED_COLORS = {
  secondary: {
    name: "Forge Blue",
    hex: "#3B82F6",
    hsl: { h: 217, s: 91, l: 60 },
    usage: "Secondary brand color",
  },
  accent: {
    name: "Forge Amber",
    hex: "#F59E0B",
    hsl: { h: 43, s: 96, l: 50 },
    usage: "Accent and highlight color",
  },
};

console.log("Generating Forge Space brand identity...");

const colors = generateColorPalette(BASE_COLOR, HARMONY, THEME);
const typography = generateTypographySystem(
  HEADING_CATEGORY,
  BODY_CATEGORY,
  SCALE_RATIO
);
const spacing = generateSpacingScale();
const shadows = generateShadowSystem(colors.primary.hex, THEME);
const borders = generateBorderSystem(STYLE);
const motion = generateMotionSystem(STYLE);
const gradients = generateGradientSystem(colors, STYLE);
const ANVIL_PATH = 'M14 8 h46 a3 3 0 0 1 3 3 v6 a3 3 0 0 1-3 3 H14 L8 14 L14 8 Z';
const ANVIL_MID = '<rect x="22" y="24" width="24" height="12" rx="2"';
const ANVIL_BASE = '<rect x="16" y="40" width="38" height="14" rx="3"';

const WORDMARK_TEXT = `<text x="78" y="30" fill="#7C3AED" font-size="20" font-family="'Space Grotesk', sans-serif" font-weight="700" letter-spacing="0.12em">FORGE</text>
  <text x="78" y="52" fill="#7C3AED" font-size="20" font-family="'Space Grotesk', sans-serif" font-weight="700" letter-spacing="0.12em">SPACE</text>`;

const logo = {
  svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="64" viewBox="0 0 200 64" fill="none">
  <path d="${ANVIL_PATH}" fill="#F59E0B"/>
  ${ANVIL_MID} fill="#3B82F6"/>
  ${ANVIL_BASE} fill="#7C3AED"/>
  ${WORDMARK_TEXT}
</svg>`,
  variants: {
    wordmark: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="64" viewBox="0 0 200 64" fill="none">
  <path d="${ANVIL_PATH}" fill="#F59E0B"/>
  ${ANVIL_MID} fill="#3B82F6"/>
  ${ANVIL_BASE} fill="#7C3AED"/>
  ${WORDMARK_TEXT}
</svg>`,
    monogram: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="${ANVIL_PATH}" fill="#F59E0B"/>
  ${ANVIL_MID} fill="#3B82F6"/>
  ${ANVIL_BASE} fill="#7C3AED"/>
</svg>`,
    abstract: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="${ANVIL_PATH}" fill="#7C3AED"/>
  ${ANVIL_MID} fill="#7C3AED"/>
  ${ANVIL_BASE} fill="#7C3AED"/>
</svg>`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="${ANVIL_PATH}" fill="#F59E0B"/>
  ${ANVIL_MID} fill="#3B82F6"/>
  ${ANVIL_BASE} fill="#7C3AED"/>
</svg>`,
  },
};

const identity = {
  id: "brand_forgespace_001",
  name: BRAND_NAME,
  tagline: TAGLINE,
  industry: INDUSTRY,
  style: STYLE,
  colors: {
    ...colors,
    primary: { ...colors.primary, hex: BASE_COLOR, name: "Forge Purple" },
    secondary: PINNED_COLORS.secondary,
    accent: PINNED_COLORS.accent,
  },
  typography: { ...typography, ...PINNED_FONTS },
  spacing,
  shadows,
  borders,
  motion,
  gradients: {
    presets: {
      hero: {
        type: "linear",
        angle: 315,
        stops: [
          { color: BASE_COLOR, position: 0 },
          { color: PINNED_COLORS.secondary.hex, position: 100 },
        ],
        cssValue: `linear-gradient(315deg, ${BASE_COLOR} 0%, ${PINNED_COLORS.secondary.hex} 100%)`,
      },
      button: {
        type: "linear",
        angle: 315,
        stops: [
          { color: PINNED_COLORS.accent.hex, position: 0 },
          { color: BASE_COLOR, position: 100 },
        ],
        cssValue: `linear-gradient(315deg, ${PINNED_COLORS.accent.hex} 0%, ${BASE_COLOR} 100%)`,
      },
      card: gradients.presets?.card ?? gradients.card ?? {
        type: "linear",
        angle: 315,
        stops: [
          { color: "#f2f2f3", position: 0 },
          { color: "#cacace", position: 100 },
        ],
        cssValue: "linear-gradient(315deg, #f2f2f3 0%, #cacace 100%)",
      },
      text: {
        type: "linear",
        angle: 315,
        stops: [
          { color: BASE_COLOR, position: 0 },
          { color: PINNED_COLORS.accent.hex, position: 100 },
        ],
        cssValue: `linear-gradient(315deg, ${BASE_COLOR} 0%, ${PINNED_COLORS.accent.hex} 100%)`,
      },
      background: gradients.presets?.background ?? gradients.background ?? {
        type: "linear",
        angle: 315,
        stops: [
          { color: "#f2f2f3", position: 0 },
          { color: "#0d0c0d", position: 100 },
        ],
        cssValue: "linear-gradient(315deg, #f2f2f3 0%, #0d0c0d 100%)",
      },
    },
  },
  logo,
  subBrands: {
    siza: {
      headingFont: "Plus Jakarta Sans",
      bodyFont: "DM Sans",
      monoFont: "IBM Plex Mono",
    },
    "mcp-gateway": {
      headingFont: "Instrument Sans",
      bodyFont: "Source Sans 3",
      monoFont: "IBM Plex Mono",
    },
  },
  createdAt: new Date().toISOString(),
};

console.log(
  "  Colors:",
  identity.colors.primary.hex,
  identity.colors.secondary.hex,
  identity.colors.accent.hex
);
console.log(
  "  Fonts:",
  identity.typography.headingFont,
  "/",
  identity.typography.bodyFont
);
console.log("  Logo variants:", Object.keys(logo.variants).join(", "));

const brandDir = join(root, "brand");
mkdirSync(brandDir, { recursive: true });
writeFileSync(
  join(brandDir, "identity.json"),
  JSON.stringify(identity, null, 2)
);
console.log("  Wrote brand/identity.json");

const cssTokens = exportCssVariables(identity);
mkdirSync(join(root, "src", "styles"), { recursive: true });
writeFileSync(join(root, "src", "styles", "tokens.css"), cssTokens);
console.log("  Wrote src/styles/tokens.css");

const w3cTokens = exportDesignTokens(identity);
mkdirSync(join(root, "public", "downloads"), { recursive: true });
writeFileSync(
  join(root, "public", "downloads", "tokens.json"),
  JSON.stringify(w3cTokens, null, 2)
);
console.log("  Wrote public/downloads/tokens.json");

const tailwindPreset = exportTailwindPreset(identity);
writeFileSync(
  join(root, "public", "downloads", "tailwind-preset.js"),
  tailwindPreset
);
console.log("  Wrote public/downloads/tailwind-preset.js");

const sassVars = exportSassVariables(identity);
writeFileSync(join(root, "public", "downloads", "tokens.scss"), sassVars);
console.log("  Wrote public/downloads/tokens.scss");

const reactTheme = exportReactTheme(identity);
writeFileSync(join(root, "public", "downloads", "theme.ts"), reactTheme);
console.log("  Wrote public/downloads/theme.ts");

const logosDir = join(root, "public", "logos");
mkdirSync(logosDir, { recursive: true });
for (const [name, svg] of Object.entries(logo.variants)) {
  writeFileSync(join(logosDir, `${name}.svg`), svg);
}
console.log("  Wrote 4 logo SVGs to public/logos/");

const faviconsDir = join(root, "public", "favicons");
mkdirSync(faviconsDir, { recursive: true });
writeFileSync(join(faviconsDir, "favicon-sizes.svg"), logo.variants.icon);
console.log("  Wrote favicon to public/favicons/");

const ogDir = join(root, "public", "og");
mkdirSync(ogDir, { recursive: true });
const anvilWhite = `<path d="${ANVIL_PATH}" fill="white"/>\n    ${ANVIL_MID} fill="white"/>\n    ${ANVIL_BASE} fill="white"/>`;
writeFileSync(
  join(ogDir, "default.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(504, 60) scale(3)">
    ${anvilWhite}
  </g>
  <text x="600" y="315" fill="white" font-size="56" font-family="'Space Grotesk', sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="central">${BRAND_NAME}</text>
  <text x="600" y="375" fill="white" font-size="28" font-family="'Space Grotesk', sans-serif" font-weight="400" text-anchor="middle" dominant-baseline="central" opacity="0.8">${TAGLINE}</text>
</svg>`
);
writeFileSync(
  join(ogDir, "article.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(1070, 25) scale(1.2)">
    ${anvilWhite}
  </g>
  <text x="600" y="280" fill="white" font-size="56" font-family="'Space Grotesk', sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="central">Brand Guide</text>
  <text x="600" y="340" fill="white" font-size="24" font-family="'Space Grotesk', sans-serif" font-weight="400" text-anchor="middle" dominant-baseline="central" opacity="0.7">${BRAND_NAME}</text>
</svg>`
);
writeFileSync(
  join(ogDir, "social.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="1200" fill="url(#bg)"/>
  <g transform="translate(504, 280) scale(3)">
    ${anvilWhite}
  </g>
  <text x="600" y="580" fill="white" font-size="56" font-family="'Space Grotesk', sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="central">${BRAND_NAME}</text>
</svg>`
);
console.log("  Wrote 3 OG images to public/og/");

console.log("\nDone! Brand identity generated successfully.");
