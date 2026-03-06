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
const BASE_COLOR = "#8B5CF6";
const HARMONY = "analogous";
const THEME = "both";
const HEADING_CATEGORY = "sans-serif";
const BODY_CATEGORY = "sans-serif";
const SCALE_RATIO = "major-third";
const TAGLINE = "The developer tools ecosystem.";

const PINNED_FONTS = {
  headingFont: "Sora",
  bodyFont: "DM Sans",
  monoFont: "IBM Plex Mono",
};

const SIZA_SUB_BRAND = {
  tagline: "AI-powered code generation",
  headingFont: "Sora",
  bodyFont: "DM Sans",
  monoFont: "IBM Plex Mono",
  primaryColor: "#8B5CF6",
  accentColor: "#06B6D4",
  tokens: {
    bg: "#121214",
    bgElevated: "#18181b",
    surface: "#1a1a1e",
    surfaceAlt: "#1e1e22",
    border: "#27272a",
    borderHover: "#3f3f46",
    primary: "#8B5CF6",
    primaryHover: "#A78BFA",
    primaryPressed: "#6D28D9",
    text: "#fafafa",
    textMuted: "#a1a1aa",
    textSubtle: "#71717a",
    accentForeground: "#8B5CF6",
    destructive: "#ef4444",
    success: "#22c55e",
    warning: "#eab308",
    input: "#18181b",
    ring: "#8B5CF6",
    accentOpacity: 0.12,
    space1: "4px",
    space2: "8px",
    space3: "12px",
    space4: "16px",
    space5: "20px",
    space6: "24px",
    space8: "32px",
    space10: "40px",
    space12: "48px",
    space16: "64px",
    radiusSm: "8px",
    radiusMd: "10px",
    radiusLg: "12px",
    radiusXl: "16px",
    glowPrimary: "0 0 30px rgba(139, 92, 246, 0.3)",
    glowPrimarySm: "0 0 20px rgba(139, 92, 246, 0.25)",
    focusRing: "0 0 0 3px rgba(139, 92, 246, 0.15), 0 0 20px rgba(139, 92, 246, 0.1)",
    durationFast: "150ms",
    durationStandard: "200ms",
    durationEntrance: "400ms",
    ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

const PINNED_COLORS = {
  secondary: {
    name: "Forge Purple Light",
    hex: "#A78BFA",
    hsl: { h: 263, s: 91, l: 80 },
    usage: "Secondary brand color",
  },
  accent: {
    name: "Forge Purple Dark",
    hex: "#6D28D9",
    hsl: { h: 263, s: 76, l: 50 },
    usage: "Accent and highlight color",
  },
};

function hexToRgbTuple(hex) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3
    ? sanitized.split("").map((char) => `${char}${char}`).join("")
    : sanitized;
  const int = Number.parseInt(normalized, 16);
  if (Number.isNaN(int)) return "139, 92, 246";
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `${r}, ${g}, ${b}`;
}

function generateSizaTokensCss(sizaConfig) {
  const tokens = sizaConfig.tokens ?? {};
  const primaryRgb = hexToRgbTuple(tokens.primary ?? sizaConfig.primaryColor ?? "#8B5CF6");
  const accentOpacity = typeof tokens.accentOpacity === "number" ? tokens.accentOpacity : 0.12;

  return `/**
 * Generated from brand/identity.json (subBrands.siza)
 * Do not edit manually. Run: npm run generate
 */

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --siza-bg: ${tokens.bg};
  --siza-bg-elevated: ${tokens.bgElevated};
  --siza-surface: ${tokens.surface};
  --siza-surface-alt: ${tokens.surfaceAlt};
  --siza-border: ${tokens.border};
  --siza-border-hover: ${tokens.borderHover};
  --siza-primary: ${tokens.primary};
  --siza-primary-rgb: ${primaryRgb};
  --siza-primary-hover: ${tokens.primaryHover};
  --siza-primary-pressed: ${tokens.primaryPressed};
  --siza-text: ${tokens.text};
  --siza-text-muted: ${tokens.textMuted};
  --siza-text-subtle: ${tokens.textSubtle};
  --siza-accent: rgba(${primaryRgb}, ${accentOpacity});
  --siza-accent-foreground: ${tokens.accentForeground};
  --siza-destructive: ${tokens.destructive};
  --siza-success: ${tokens.success};
  --siza-warning: ${tokens.warning};
  --siza-input: ${tokens.input};
  --siza-ring: ${tokens.ring};

  --siza-font-display: "${sizaConfig.headingFont}", system-ui, sans-serif;
  --siza-font-body: "${sizaConfig.bodyFont}", system-ui, sans-serif;
  --siza-font-mono: "${sizaConfig.monoFont}", ui-monospace, monospace;

  --siza-space-1: ${tokens.space1};
  --siza-space-2: ${tokens.space2};
  --siza-space-3: ${tokens.space3};
  --siza-space-4: ${tokens.space4};
  --siza-space-5: ${tokens.space5};
  --siza-space-6: ${tokens.space6};
  --siza-space-8: ${tokens.space8};
  --siza-space-10: ${tokens.space10};
  --siza-space-12: ${tokens.space12};
  --siza-space-16: ${tokens.space16};

  --siza-radius-sm: ${tokens.radiusSm};
  --siza-radius-md: ${tokens.radiusMd};
  --siza-radius-lg: ${tokens.radiusLg};
  --siza-radius-xl: ${tokens.radiusXl};

  --siza-glow-primary: ${tokens.glowPrimary};
  --siza-glow-primary-sm: ${tokens.glowPrimarySm};
  --siza-focus-ring: ${tokens.focusRing};

  --siza-duration-fast: ${tokens.durationFast};
  --siza-duration-standard: ${tokens.durationStandard};
  --siza-duration-entrance: ${tokens.durationEntrance};
  --siza-ease: ${tokens.ease};
}

body.siza-tokens,
.siza-tokens {
  font-family: var(--siza-font-body);
  color: var(--siza-text);
  background-color: var(--siza-bg);
}

.siza-tokens h1,
.siza-tokens h2,
.siza-tokens h3,
.siza-tokens h4,
.siza-tokens h5,
.siza-tokens h6 {
  font-family: var(--siza-font-display);
}

.siza-tokens code,
.siza-tokens pre,
.siza-tokens [class*="font-mono"] {
  font-family: var(--siza-font-mono);
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-smoothing: antialiased;
}

.icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: -0.125em;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}
`;
}

function generateForgeTokensCss(brandConfig) {
  const tokens = brandConfig.tokens ?? {};
  const primaryRgb = hexToRgbTuple(tokens.primary ?? brandConfig.primaryColor ?? "#8B5CF6");
  const accentOpacity = typeof tokens.accentOpacity === "number" ? tokens.accentOpacity : 0.12;
  const primary = tokens.primary ?? "#8B5CF6";
  const primaryHover = tokens.primaryHover ?? "#A78BFA";
  const primaryPressed = tokens.primaryPressed ?? "#6D28D9";

  return `/**
 * Forge Space Design System — Canonical tokens
 * Generated from brand/identity.json. Do not edit manually. Run: npm run generate
 * Typography: Sora (display), DM Sans (body), IBM Plex Mono (mono)
 * Colors: Modern Horn — Monochrome (#A78BFA, #8B5CF6, #6D28D9)
 */

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --forge-bg: ${tokens.bg};
  --forge-bg-elevated: ${tokens.bgElevated};
  --forge-surface: ${tokens.surface};
  --forge-surface-alt: ${tokens.surfaceAlt};
  --forge-border: ${tokens.border};
  --forge-border-hover: ${tokens.borderHover};
  --forge-primary: ${primary};
  --forge-primary-rgb: ${primaryRgb};
  --forge-primary-hover: ${primaryHover};
  --forge-primary-pressed: ${primaryPressed};
  --forge-text: ${tokens.text};
  --forge-text-muted: ${tokens.textMuted};
  --forge-text-subtle: ${tokens.textSubtle};
  --forge-accent: rgba(${primaryRgb}, ${accentOpacity});
  --forge-accent-foreground: ${tokens.accentForeground};
  --forge-destructive: ${tokens.destructive};
  --forge-success: ${tokens.success};
  --forge-warning: ${tokens.warning};
  --forge-input: ${tokens.input};
  --forge-ring: ${tokens.ring};

  --forge-font-display: "${brandConfig.headingFont}", system-ui, sans-serif;
  --forge-font-body: "${brandConfig.bodyFont}", system-ui, sans-serif;
  --forge-font-mono: "${brandConfig.monoFont}", ui-monospace, monospace;

  --forge-space-1: ${tokens.space1};
  --forge-space-2: ${tokens.space2};
  --forge-space-3: ${tokens.space3};
  --forge-space-4: ${tokens.space4};
  --forge-space-5: ${tokens.space5};
  --forge-space-6: ${tokens.space6};
  --forge-space-8: ${tokens.space8};
  --forge-space-10: ${tokens.space10};
  --forge-space-12: ${tokens.space12};
  --forge-space-16: ${tokens.space16};

  --forge-radius-sm: ${tokens.radiusSm};
  --forge-radius-md: ${tokens.radiusMd};
  --forge-radius-lg: ${tokens.radiusLg};
  --forge-radius-xl: ${tokens.radiusXl};

  --forge-glow-primary: ${tokens.glowPrimary};
  --forge-glow-primary-sm: ${tokens.glowPrimarySm};
  --forge-focus-ring: ${tokens.focusRing};

  --forge-duration-fast: ${tokens.durationFast};
  --forge-duration-standard: ${tokens.durationStandard};
  --forge-duration-entrance: ${tokens.durationEntrance};
  --forge-ease: ${tokens.ease};

  --forge-gradient-hero: linear-gradient(315deg, ${primaryPressed} 0%, ${primary} 50%, ${primaryHover} 100%);
  --forge-gradient-button: linear-gradient(315deg, ${primaryPressed} 0%, ${primary} 100%);
}

body.forge-tokens,
.forge-tokens {
  font-family: var(--forge-font-body);
  color: var(--forge-text);
  background-color: var(--forge-bg);
}

.forge-tokens h1,
.forge-tokens h2,
.forge-tokens h3,
.forge-tokens h4,
.forge-tokens h5,
.forge-tokens h6 {
  font-family: var(--forge-font-display);
}

.forge-tokens code,
.forge-tokens pre,
.forge-tokens [class*="font-mono"] {
  font-family: var(--forge-font-mono);
}
`;
}

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
const EXPLORE_ICON_PATH = 'M4 20 L18 14 H56 a3 3 0 0 1 3 3 v6 a3 3 0 0 1-3 3 H18 L4 24 V20Z';
const EXPLORE_MID = '<rect x="20" y="32" width="30" height="10" rx="3"';
const EXPLORE_BASE = '<rect x="14" y="48" width="40" height="14" rx="4"';

const readEmbeddedFont = (relativePath) => {
  const filePath = join(root, relativePath);
  if (!existsSync(filePath)) return null;
  return readFileSync(filePath).toString("base64");
};

const createFontFace = (family, weight, mimeType, format, data) => {
  if (!data) return "";
  return `@font-face{font-family:'${family}';font-weight:${weight};src:url(data:${mimeType};base64,${data}) format('${format}')}`;
};

const soraB64 = readEmbeddedFont("src/fonts/sora.woff2");
const dmSansB64 = readEmbeddedFont("src/fonts/dm-sans.woff2");

const fontFaceSora = createFontFace("Sora", 400, "font/woff2", "woff2", soraB64);
const fontFaceDmSans = createFontFace("DM Sans", 400, "font/woff2", "woff2", dmSansB64);

if (!dmSansB64) {
  console.warn("  Warning: src/fonts/dm-sans.woff2 not found. OG SVGs will reference DM Sans with system fallback only.");
}

const LOGO_FONT_DEFS = `<defs><style>${fontFaceSora}</style></defs>`;

const wordmarkText = (fill) =>
  `<text x="78" y="26" fill="${fill}" font-size="20" font-weight="700" font-family="'Sora', sans-serif" letter-spacing="-0.025em">FORGE</text>
  <text x="78" y="48" fill="${fill}" font-size="20" font-weight="700" font-family="'Sora', sans-serif" letter-spacing="-0.025em">SPACE</text>`;

const MODERN_HORN_AMBER = "#A78BFA";
const MODERN_HORN_BLUE = "#8B5CF6";
const MODERN_HORN_PURPLE = "#6D28D9";

const iconFragment = (fills) =>
  `<path d="${EXPLORE_ICON_PATH}" fill="${fills[0]}"/>
  ${EXPLORE_MID} fill="${fills[1]}"/>
  ${EXPLORE_BASE} fill="${fills[2]}"/>`;

const wordmarkSvg = (iconFills, textFill) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="64" viewBox="0 0 200 64" fill="none">
  ${LOGO_FONT_DEFS}
  ${iconFragment(iconFills)}
  ${wordmarkText(textFill)}
</svg>`;

const iconSvg = (fills) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  ${iconFragment(fills)}
</svg>`;

const logo = {
  svg: wordmarkSvg([MODERN_HORN_AMBER, MODERN_HORN_BLUE, MODERN_HORN_PURPLE], MODERN_HORN_BLUE),
  variants: {
    wordmark: wordmarkSvg([MODERN_HORN_AMBER, MODERN_HORN_BLUE, MODERN_HORN_PURPLE], MODERN_HORN_BLUE),
    "wordmark-white": wordmarkSvg(["#FFFFFF", "#FFFFFF", "#FFFFFF"], "#FFFFFF"),
    "wordmark-blue": wordmarkSvg([MODERN_HORN_BLUE, MODERN_HORN_BLUE, MODERN_HORN_BLUE], MODERN_HORN_BLUE),
    "wordmark-purple": wordmarkSvg([MODERN_HORN_BLUE, MODERN_HORN_BLUE, MODERN_HORN_BLUE], MODERN_HORN_BLUE),
    monogram: iconSvg([MODERN_HORN_AMBER, MODERN_HORN_BLUE, MODERN_HORN_PURPLE]),
    abstract: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  ${iconFragment([MODERN_HORN_BLUE, MODERN_HORN_BLUE, MODERN_HORN_BLUE])}
</svg>`,
    icon: iconSvg([MODERN_HORN_AMBER, MODERN_HORN_BLUE, MODERN_HORN_PURPLE]),
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

const HERO_HEADLINE = "Build better, ship faster.";

const identity = {
  id: "brand_forgespace_001",
  name: BRAND_NAME,
  tagline: TAGLINE,
  heroHeadline: HERO_HEADLINE,
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
    siza: SIZA_SUB_BRAND,
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

const sizaTokensCss = generateSizaTokensCss(identity.subBrands.siza);
const forgeTokensCss = generateForgeTokensCss(identity.subBrands.siza);
mkdirSync(join(root, "public", "downloads"), { recursive: true });
writeFileSync(join(root, "public", "downloads", "siza-tokens.css"), sizaTokensCss);
writeFileSync(join(root, "public", "downloads", "forge-tokens.css"), forgeTokensCss);
console.log("  Wrote public/downloads/siza-tokens.css");
console.log("  Wrote public/downloads/forge-tokens.css");

const designSystemCssPath = join(root, "..", "forge-space-design-system", "css", "tokens.css");
mkdirSync(dirname(designSystemCssPath), { recursive: true });
writeFileSync(designSystemCssPath, forgeTokensCss);
console.log("  Wrote forge-space-design-system/css/tokens.css");

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
const sizaSc = identity.subBrands?.siza?.primaryColor ?? "#8B5CF6";
const sizaCyan = identity.subBrands?.siza?.accentColor ?? "#06B6D4";
const sizaHeadingFont = (identity.subBrands?.siza?.headingFont ?? "Sora").replace(/"/g, "'");
const sizaIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <text x="3" y="48" font-family="'${sizaHeadingFont}', sans-serif" font-weight="700" font-size="42" fill="${sizaSc}" letter-spacing="-3">Sz</text>
  <path d="M56 38 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5-4 -4-1.5 4-1.5z" fill="${sizaCyan}"/>
</svg>`;
writeFileSync(join(logosDir, "siza-icon.svg"), sizaIconSvg);
console.log(`  Wrote ${Object.keys(logo.variants).length} logo SVGs + siza-icon.svg to public/logos/`);

const faviconsDir = join(root, "public", "favicons");
mkdirSync(faviconsDir, { recursive: true });
writeFileSync(join(faviconsDir, "favicon-sizes.svg"), logo.variants.icon);
console.log("  Wrote favicon to public/favicons/");

const ogDir = join(root, "public", "og");
mkdirSync(ogDir, { recursive: true });

const OG_WIDTH = 1200;
const OG_DEFAULT_HEIGHT = 630;
const OG_SOCIAL_SIZE = 1200;
const OG_SAFE_INSET = 80;
const OG_FRAME_INSET = OG_SAFE_INSET / 2;

const ogHeadingFont = (identity.typography?.headingFont ?? "Sora").replace(/"/g, "'");
const ogBodyFont = (identity.typography?.bodyFont ?? "DM Sans").replace(/"/g, "'");
const ogFonts = `<style>${fontFaceSora}${fontFaceDmSans}</style>`;

const OG_ICON_FILLS = [MODERN_HORN_AMBER, MODERN_HORN_BLUE, MODERN_HORN_PURPLE];
const OG_WORDMARK_FILL = "#A78BFA";

const ogIconMark = (s, cx, cy, fills = OG_ICON_FILLS) => {
  const tx = cx - 32 * s;
  const ty = cy - 32 * s;
  return `<g transform="translate(${tx}, ${ty}) scale(${s})">
    <path d="${EXPLORE_ICON_PATH}" fill="${fills[0]}"/>
    ${EXPLORE_MID} fill="${fills[1]}" opacity="0.95"/>
    ${EXPLORE_BASE} fill="${fills[2]}" opacity="0.9"/>
  </g>`;
};

const ogBg = (w, h) => {
  const glowWidth = Math.round(w * 0.76);
  const glowHeight = Math.round(h * 0.62);
  const glowX = Math.round((w - glowWidth) / 2);
  const glowY = Math.round((h - glowHeight) / 2);
  const frameSize = Math.max(0, w - OG_FRAME_INSET * 2);
  const frameHeight = Math.max(0, h - OG_FRAME_INSET * 2);

  return `<defs>
    ${ogFonts}
    <filter id="ogBlur" x="-35%" y="-45%" width="170%" height="190%" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="78" />
    </filter>
    <radialGradient id="glowCenter" cx="50%" cy="48%" r="46%">
      <stop offset="0%" style="stop-color:#A78BFA;stop-opacity:0.07"/>
      <stop offset="100%" style="stop-color:#A78BFA;stop-opacity:0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#121214"/>
  <rect x="${glowX}" y="${glowY}" width="${glowWidth}" height="${glowHeight}" rx="20" fill="#8B5CF6" opacity="0.2" filter="url(#ogBlur)"/>
  <rect width="${w}" height="${h}" fill="url(#glowCenter)"/>
  <rect x="${OG_FRAME_INSET}" y="${OG_FRAME_INSET}" width="${frameSize}" height="${frameHeight}" rx="4" fill="none" stroke="#8B5CF6" stroke-opacity="0.18" stroke-width="1.5"/>`;
};

const ogHeroHeadline = identity.heroHeadline ?? HERO_HEADLINE;

const OG_LOCKUP_LEFT_X = 220;
const OG_DEFAULT_ICON_CY = 290;
const OG_DEFAULT_TEXT_X = 340;
writeFileSync(
  join(ogDir, "default.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_DEFAULT_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_DEFAULT_HEIGHT}">
  ${ogBg(OG_WIDTH, OG_DEFAULT_HEIGHT)}
  ${ogIconMark(2.4, OG_LOCKUP_LEFT_X, OG_DEFAULT_ICON_CY)}
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY - 18}" fill="${OG_WORDMARK_FILL}" font-size="48" font-family="'${ogHeadingFont}', sans-serif" font-weight="700" text-anchor="start" letter-spacing="-0.025em">FORGE SPACE</text>
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY + 32}" fill="#E5E4E7" font-size="20" font-family="'${ogBodyFont}', sans-serif" text-anchor="start">${TAGLINE}</text>
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY + 58}" fill="#CBC9CF" font-size="17" font-family="'${ogBodyFont}', sans-serif" text-anchor="start">${ogHeroHeadline}</text>
  <text x="1160" y="604" fill="white" font-size="13" font-family="'${ogBodyFont}', sans-serif" text-anchor="end" opacity="0.5">forgespace.co</text>
  <rect y="622" width="${OG_WIDTH}" height="10" fill="#8B5CF6" opacity="0.35"/>
  <rect y="634" width="${OG_WIDTH}" height="2" fill="#A78BFA" opacity="0.45"/>
</svg>`
);

writeFileSync(
  join(ogDir, "article.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_DEFAULT_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_DEFAULT_HEIGHT}">
  ${ogBg(OG_WIDTH, OG_DEFAULT_HEIGHT)}
  ${ogIconMark(2.4, OG_LOCKUP_LEFT_X, OG_DEFAULT_ICON_CY)}
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY - 58}" fill="${OG_WORDMARK_FILL}" font-size="42" font-family="'${ogHeadingFont}', sans-serif" text-anchor="start">Brand Guide</text>
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY - 18}" fill="${OG_WORDMARK_FILL}" font-size="28" font-family="'${ogHeadingFont}', sans-serif" font-weight="700" text-anchor="start" letter-spacing="-0.025em">FORGE SPACE</text>
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY + 32}" fill="#E5E4E7" font-size="20" font-family="'${ogBodyFont}', sans-serif" text-anchor="start">${TAGLINE}</text>
  <text x="${OG_DEFAULT_TEXT_X}" y="${OG_DEFAULT_ICON_CY + 58}" fill="#CBC9CF" font-size="17" font-family="'${ogBodyFont}', sans-serif" text-anchor="start">${ogHeroHeadline}</text>
  <text x="1160" y="604" fill="white" font-size="13" font-family="'${ogBodyFont}', sans-serif" text-anchor="end" opacity="0.5">forgespace.co</text>
  <rect y="622" width="${OG_WIDTH}" height="10" fill="#8B5CF6" opacity="0.35"/>
  <rect y="634" width="${OG_WIDTH}" height="2" fill="#A78BFA" opacity="0.45"/>
</svg>`
);

const OG_SOCIAL_ICON_CY = 600;
const OG_SOCIAL_LOCKUP_LEFT_X = 260;
const OG_SOCIAL_TEXT_X = 380;
writeFileSync(
  join(ogDir, "social.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_SOCIAL_SIZE}" height="${OG_SOCIAL_SIZE}" viewBox="0 0 ${OG_SOCIAL_SIZE} ${OG_SOCIAL_SIZE}">
  ${ogBg(OG_SOCIAL_SIZE, OG_SOCIAL_SIZE)}
  ${ogIconMark(3, OG_SOCIAL_LOCKUP_LEFT_X, OG_SOCIAL_ICON_CY)}
  <text x="${OG_SOCIAL_TEXT_X}" y="${OG_SOCIAL_ICON_CY - 15}" fill="${OG_WORDMARK_FILL}" font-size="52" font-family="'${ogHeadingFont}', sans-serif" font-weight="700" text-anchor="start" letter-spacing="-0.025em">FORGE SPACE</text>
  <text x="${OG_SOCIAL_TEXT_X}" y="${OG_SOCIAL_ICON_CY + 40}" fill="#E5E4E7" font-size="22" font-family="'${ogBodyFont}', sans-serif" text-anchor="start">${TAGLINE}</text>
  <text x="${OG_SOCIAL_TEXT_X}" y="${OG_SOCIAL_ICON_CY + 72}" fill="#CBC9CF" font-size="18" font-family="'${ogBodyFont}', sans-serif" text-anchor="start">${ogHeroHeadline}</text>
  <text x="600" y="1160" fill="white" font-size="13" font-family="'${ogBodyFont}', sans-serif" text-anchor="middle" opacity="0.5">forgespace.co</text>
  <rect y="1192" width="${OG_SOCIAL_SIZE}" height="10" fill="#8B5CF6" opacity="0.35"/>
  <rect y="1204" width="${OG_SOCIAL_SIZE}" height="2" fill="#A78BFA" opacity="0.45"/>
</svg>`
);
console.log("  Wrote 3 OG images to public/og/");

console.log("\nDone! Brand identity generated successfully.");
