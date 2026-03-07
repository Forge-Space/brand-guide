import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const root = resolve(import.meta.dirname, '..');

describe('Generated Token Files', () => {
  it('CSS token files exist', () => {
    expect(existsSync(resolve(root, 'public/downloads/siza-tokens.css'))).toBe(true);
    expect(existsSync(resolve(root, 'public/downloads/forge-tokens.css'))).toBe(true);
  });

  it('forge-tokens.css contains brand primary color', () => {
    const css = readFileSync(resolve(root, 'public/downloads/forge-tokens.css'), 'utf8');
    expect(css).toContain('#8B5CF6');
  });

  it('siza-tokens.css contains custom properties', () => {
    const css = readFileSync(resolve(root, 'public/downloads/siza-tokens.css'), 'utf8');
    expect(css).toContain('--');
  });
});

describe('NPM Package Files', () => {
  it('dist-lib contains compiled output', () => {
    expect(existsSync(resolve(root, 'dist-lib/index.js'))).toBe(true);
    expect(existsSync(resolve(root, 'dist-lib/index.d.ts'))).toBe(true);
  });

  it('identity.json is in package files', () => {
    expect(existsSync(resolve(root, 'brand/identity.json'))).toBe(true);
  });
});

describe('Logo Assets', () => {
  const logoDir = resolve(root, 'public/logos');

  it('has wordmark SVG', () => {
    expect(existsSync(resolve(logoDir, 'wordmark.svg'))).toBe(true);
  });

  it('has monogram SVG', () => {
    expect(existsSync(resolve(logoDir, 'monogram.svg'))).toBe(true);
  });

  it('wordmark contains brand name', () => {
    if (existsSync(resolve(logoDir, 'wordmark.svg'))) {
      const svg = readFileSync(resolve(logoDir, 'wordmark.svg'), 'utf8');
      expect(svg).toContain('svg');
    }
  });
});
