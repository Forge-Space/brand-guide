import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const brandingMcp = join(root, "..", "branding-mcp", "dist");

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
} = await import(join(brandingMcp, "lib", "branding-core", "index.js"));

const BRAND_NAME = "Siza";
const INDUSTRY = "technology";
const STYLE = "tech";
const BASE_COLOR = "#7c3aed";
const HARMONY = "analogous";
const THEME = "both";
const HEADING_CATEGORY = "sans-serif";
const BODY_CATEGORY = "sans-serif";
const SCALE_RATIO = "major-third";
const TAGLINE = "Generate. Integrate. Ship.";

console.log("Generating Siza brand identity...");

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
const logoConfig = {
  ...defaultLogoConfig(BRAND_NAME, colors.primary.hex),
  font: typography.headingFont,
  style: STYLE,
};
const logo = generateSvgLogo(logoConfig);

const identity = {
  id: `brand_siza_001`,
  name: BRAND_NAME,
  tagline: TAGLINE,
  industry: INDUSTRY,
  style: STYLE,
  colors,
  typography,
  spacing,
  shadows,
  borders,
  motion,
  gradients,
  logo,
  createdAt: new Date().toISOString(),
};

console.log("  Colors:", colors.primary.hex, colors.secondary.hex, colors.accent.hex);
console.log("  Fonts:", typography.headingFont, "/", typography.bodyFont);
console.log("  Logo variants:", Object.keys(logo.variants).join(", "));

// Write identity.json
const brandDir = join(root, "brand");
mkdirSync(brandDir, { recursive: true });
writeFileSync(
  join(brandDir, "identity.json"),
  JSON.stringify(identity, null, 2)
);
console.log("  Wrote brand/identity.json");

// Write CSS tokens
const cssTokens = exportCssVariables(identity);
mkdirSync(join(root, "src", "styles"), { recursive: true });
writeFileSync(join(root, "src", "styles", "tokens.css"), cssTokens);
console.log("  Wrote src/styles/tokens.css");

// Write W3C design tokens JSON
const w3cTokens = exportDesignTokens(identity);
mkdirSync(join(root, "public", "downloads"), { recursive: true });
writeFileSync(
  join(root, "public", "downloads", "tokens.json"),
  JSON.stringify(w3cTokens, null, 2)
);
console.log("  Wrote public/downloads/tokens.json");

// Write Tailwind preset
const tailwindPreset = exportTailwindPreset(identity);
writeFileSync(
  join(root, "public", "downloads", "tailwind-preset.js"),
  tailwindPreset
);
console.log("  Wrote public/downloads/tailwind-preset.js");

// Write Sass variables
const sassVars = exportSassVariables(identity);
writeFileSync(join(root, "public", "downloads", "tokens.scss"), sassVars);
console.log("  Wrote public/downloads/tokens.scss");

// Write React theme
const reactTheme = exportReactTheme(identity);
writeFileSync(join(root, "public", "downloads", "theme.ts"), reactTheme);
console.log("  Wrote public/downloads/theme.ts");

// Write logo SVGs
const logosDir = join(root, "public", "logos");
mkdirSync(logosDir, { recursive: true });
writeFileSync(join(logosDir, "wordmark.svg"), logo.variants.wordmark);
writeFileSync(join(logosDir, "monogram.svg"), logo.variants.monogram);
writeFileSync(join(logosDir, "abstract.svg"), logo.variants.abstract);
writeFileSync(join(logosDir, "icon.svg"), logo.variants.icon);
console.log("  Wrote 4 logo SVGs to public/logos/");

// Write favicons
const faviconsDir = join(root, "public", "favicons");
mkdirSync(faviconsDir, { recursive: true });
const favicons = generateFavicons(logo.variants.icon, colors.primary.hex);
for (const [size, svg] of Object.entries(favicons)) {
  const content = typeof svg === "string" ? svg : JSON.stringify(svg);
  writeFileSync(join(faviconsDir, `favicon-${size}.svg`), content);
}
console.log("  Wrote favicons to public/favicons/");

// Write OG images
const ogDir = join(root, "public", "og");
mkdirSync(ogDir, { recursive: true });
const ogDefault = generateOgImage(identity, "default");
const ogArticle = generateOgImage(identity, "article", "Brand Guide");
const ogSocial = generateOgImage(identity, "social");
const toStr = (v) => (typeof v === "string" ? v : JSON.stringify(v, null, 2));
writeFileSync(join(ogDir, "default.svg"), toStr(ogDefault));
writeFileSync(join(ogDir, "article.svg"), toStr(ogArticle));
writeFileSync(join(ogDir, "social.svg"), toStr(ogSocial));
console.log("  Wrote 3 OG images to public/og/");

console.log("\nDone! Brand identity generated successfully.");
