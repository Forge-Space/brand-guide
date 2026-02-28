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

const PINNED_FONTS = {
  headingFont: "Outfit",
  bodyFont: "Inter",
  monoFont: "JetBrains Mono",
};

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
  font: PINNED_FONTS.headingFont,
  style: STYLE,
};
const logo = generateSvgLogo(logoConfig);

const identity = {
  id: "brand_siza_001",
  name: BRAND_NAME,
  tagline: TAGLINE,
  industry: INDUSTRY,
  style: STYLE,
  colors: {
    ...colors,
    primary: { ...colors.primary, hex: BASE_COLOR, name: "Siza Purple" },
  },
  typography: { ...typography, ...PINNED_FONTS },
  spacing,
  shadows,
  borders,
  motion,
  gradients,
  logo,
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
const favicons = generateFavicons(logo.variants.icon, colors.primary.hex);
for (const [size, svg] of Object.entries(favicons)) {
  const content = typeof svg === "string" ? svg : JSON.stringify(svg);
  writeFileSync(join(faviconsDir, `favicon-${size}.svg`), content);
}
console.log("  Wrote favicons to public/favicons/");

const ogDir = join(root, "public", "og");
mkdirSync(ogDir, { recursive: true });
const toStr = (v) =>
  typeof v === "string" ? v : JSON.stringify(v, null, 2);
writeFileSync(
  join(ogDir, "default.svg"),
  toStr(generateOgImage(identity, "default"))
);
writeFileSync(
  join(ogDir, "article.svg"),
  toStr(generateOgImage(identity, "article", "Brand Guide"))
);
writeFileSync(
  join(ogDir, "social.svg"),
  toStr(generateOgImage(identity, "social"))
);
console.log("  Wrote 3 OG images to public/og/");

console.log("\nDone! Brand identity generated successfully.");
