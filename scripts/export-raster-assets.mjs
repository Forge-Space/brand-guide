#!/usr/bin/env node
/**
 * Export PNG and WEBP from logo and OG SVGs. Writes alongside each SVG.
 * Run: node scripts/export-raster-assets.mjs
 * CDN: same path with .png / .webp (e.g. brand.forgespace.co/logos/wordmark.png).
 */

import { readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

const DENSITY = 288;
const WEBP_OPTS = { lossless: true, effort: 6 };

async function exportRaster(svgPath) {
  const base = svgPath.replace(/\.svg$/i, "");
  const pngPath = `${base}.png`;
  const webpPath = `${base}.webp`;
  try {
    const pipeline = sharp(svgPath, { density: DENSITY });
    await Promise.all([
      pipeline.clone().png().toFile(pngPath),
      pipeline.clone().webp(WEBP_OPTS).toFile(webpPath),
    ]);
    console.log(`  ${svgPath.replace(publicDir, "public")} → .png, .webp`);
  } catch (err) {
    console.warn(`  Skip ${svgPath}: ${err.message}`);
  }
}

async function main() {
  const dirs = [
    join(publicDir, "logos"),
    join(publicDir, "og"),
    join(publicDir, "favicons"),
  ];
  let count = 0;
  for (const dir of dirs) {
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir, { withFileTypes: true });
    const svgs = files.filter((f) => f.isFile() && f.name.toLowerCase().endsWith(".svg"));
    for (const { name } of svgs) {
      await exportRaster(join(dir, name));
      count++;
    }
  }
  console.log(`Exported raster for ${count} SVGs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
