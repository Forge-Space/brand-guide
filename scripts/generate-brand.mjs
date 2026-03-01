import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
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

const jockeyB64 = readFileSync(join(root, "src", "fonts", "jockey-one.woff2")).toString("base64");
const spaceGroteskB64 = readFileSync(join(root, "src", "fonts", "space-grotesk.woff")).toString("base64");

const fontFaceJockey = `@font-face{font-family:'Jockey One';font-weight:400;src:url(data:font/woff2;base64,${jockeyB64}) format('woff2')}`;
const fontFaceSpaceGrotesk = `@font-face{font-family:'Space Grotesk';font-weight:400;src:url(data:font/woff;base64,${spaceGroteskB64}) format('woff')}`;

const LOGO_FONT_DEFS = `<defs><style>${fontFaceJockey}</style></defs>`;

const wordmarkText = (fill) =>
  `<text x="78" y="30" fill="${fill}" font-size="20" font-family="'Jockey One', sans-serif" letter-spacing="0.12em">FORGE</text>
  <text x="78" y="52" fill="${fill}" font-size="20" font-family="'Jockey One', sans-serif" letter-spacing="0.12em">SPACE</text>`;

const WORDMARK_TEXT = wordmarkText("#7C3AED");

const wordmarkSvg = (anvilFills, textFill) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="64" viewBox="0 0 200 64" fill="none">
  ${LOGO_FONT_DEFS}
  <path d="${ANVIL_PATH}" fill="${anvilFills[0]}"/>
  ${ANVIL_MID} fill="${anvilFills[1]}"/>
  ${ANVIL_BASE} fill="${anvilFills[2]}"/>
  ${wordmarkText(textFill)}
</svg>`;

const logo = {
  svg: wordmarkSvg(["#F59E0B", "#3B82F6", "#7C3AED"], "#7C3AED"),
  variants: {
    wordmark: wordmarkSvg(["#F59E0B", "#3B82F6", "#7C3AED"], "#7C3AED"),
    "wordmark-white": wordmarkSvg(["#FFFFFF", "#FFFFFF", "#FFFFFF"], "#FFFFFF"),
    "wordmark-blue": wordmarkSvg(["#3B82F6", "#3B82F6", "#3B82F6"], "#3B82F6"),
    "wordmark-purple": wordmarkSvg(["#7C3AED", "#7C3AED", "#7C3AED"], "#7C3AED"),
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

const identityPath = join(root, "brand", "identity.json");
let existingCreatedAt;
if (existsSync(identityPath)) {
  try {
    const existing = JSON.parse(readFileSync(identityPath, "utf-8"));
    existingCreatedAt = existing.createdAt;
  } catch (err) {
    // File exists but unreadable - will use new timestamp
  }
}

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
  createdAt: existingCreatedAt ?? new Date().toISOString(),
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
console.log(`  Wrote ${Object.keys(logo.variants).length} logo SVGs to public/logos/`);

const faviconsDir = join(root, "public", "favicons");
mkdirSync(faviconsDir, { recursive: true });
writeFileSync(join(faviconsDir, "favicon-sizes.svg"), logo.variants.icon);
console.log("  Wrote favicon to public/favicons/");

const ogDir = join(root, "public", "og");
mkdirSync(ogDir, { recursive: true });

const ogFonts = `<style>${fontFaceJockey}${fontFaceSpaceGrotesk}</style>`;

// Centered anvil monogram — cx/cy = visual center on canvas
const anvilMark = (s, cx, cy) => {
  const tx = cx - 35.5 * s;
  const ty = cy - 31 * s;
  return `<g transform="translate(${tx}, ${ty}) scale(${s})">
    <path d="${ANVIL_PATH}" fill="white"/>
    ${ANVIL_MID} fill="white" opacity="0.88"/>
    ${ANVIL_BASE} fill="white" opacity="0.76"/>
  </g>`;
};

const ogBg = (w, h) => `<defs>
    ${ogFonts}
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4c1d95"/>
      <stop offset="100%" style="stop-color:#1e40af"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" style="stop-color:white;stop-opacity:0.05"/>
      <stop offset="100%" style="stop-color:white;stop-opacity:0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>`;

writeFileSync(
  join(ogDir, "default.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${ogBg(1200, 630)}
  ${anvilMark(2.8, 600, 185)}
  <text x="600" y="330" fill="white" font-size="52" font-family="'Jockey One', sans-serif" text-anchor="middle" letter-spacing="0.2em">FORGE SPACE</text>
  <text x="600" y="385" fill="white" font-size="20" font-family="'Space Grotesk', sans-serif" text-anchor="middle" opacity="0.6">${TAGLINE}</text>
  <text x="1160" y="604" fill="white" font-size="13" font-family="'Space Grotesk', sans-serif" text-anchor="end" opacity="0.3">forgespace.co</text>
  <rect y="624" width="1200" height="6" fill="#F59E0B" opacity="0.35"/>
</svg>`
);

writeFileSync(
  join(ogDir, "article.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${ogBg(1200, 630)}
  <text x="600" y="250" fill="white" font-size="56" font-family="'Jockey One', sans-serif" text-anchor="middle">Brand Guide</text>
  <text x="600" y="345" fill="white" font-size="24" font-family="'Jockey One', sans-serif" text-anchor="middle" letter-spacing="0.3em" opacity="0.5">FORGE SPACE</text>
  <text x="1160" y="604" fill="white" font-size="13" font-family="'Space Grotesk', sans-serif" text-anchor="end" opacity="0.3">forgespace.co</text>
  <rect y="624" width="1200" height="6" fill="#F59E0B" opacity="0.35"/>
</svg>`
);

writeFileSync(
  join(ogDir, "social.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  ${ogBg(1200, 1200)}
  ${anvilMark(3.5, 600, 420)}
  <text x="600" y="570" fill="white" font-size="56" font-family="'Jockey One', sans-serif" text-anchor="middle" letter-spacing="0.2em">FORGE SPACE</text>
  <text x="600" y="635" fill="white" font-size="20" font-family="'Space Grotesk', sans-serif" text-anchor="middle" opacity="0.6">${TAGLINE}</text>
  <text x="600" y="1160" fill="white" font-size="13" font-family="'Space Grotesk', sans-serif" text-anchor="middle" opacity="0.3">forgespace.co</text>
  <rect y="1194" width="1200" height="6" fill="#F59E0B" opacity="0.35"/>
</svg>`
);
console.log("  Wrote 3 OG images to public/og/");

console.log("\nDone! Brand identity generated successfully.");
