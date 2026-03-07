import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const identity = JSON.parse(
  readFileSync(resolve(import.meta.dirname, '../brand/identity.json'), 'utf8')
);

describe('Brand Identity Structure', () => {
  it('has required top-level fields', () => {
    const required = ['id', 'name', 'tagline', 'style', 'colors', 'typography', 'spacing', 'logo'];
    for (const field of required) {
      expect(identity).toHaveProperty(field);
    }
  });

  it('has correct brand name', () => {
    expect(identity.name).toBe('Forge Space');
  });

  it('has non-empty tagline', () => {
    expect(identity.tagline).toBeTruthy();
    expect(typeof identity.tagline).toBe('string');
  });
});

describe('Color Palette', () => {
  it('has primary, secondary, accent, neutral colors', () => {
    expect(identity.colors).toHaveProperty('primary');
    expect(identity.colors).toHaveProperty('secondary');
    expect(identity.colors).toHaveProperty('accent');
    expect(identity.colors).toHaveProperty('neutral');
  });

  it('uses Forge Purple as primary', () => {
    expect(identity.colors.primary.hex).toBe('#8B5CF6');
    expect(identity.colors.primary.name).toBe('Forge Purple');
  });

  it('all colors have hex and hsl values', () => {
    const colorKeys = ['primary', 'secondary', 'accent'];
    for (const key of colorKeys) {
      expect(identity.colors[key]).toHaveProperty('hex');
      expect(identity.colors[key]).toHaveProperty('hsl');
      expect(identity.colors[key].hex).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it('has semantic colors', () => {
    expect(identity.colors).toHaveProperty('semantic');
    const semanticKeys = ['success', 'warning', 'error', 'info'];
    for (const key of semanticKeys) {
      expect(identity.colors.semantic).toHaveProperty(key);
    }
  });

  it('has contrast ratios for WCAG compliance', () => {
    expect(identity.colors).toHaveProperty('contrast');
  });
});

describe('Typography', () => {
  it('has heading, body, and mono font families', () => {
    expect(identity.typography).toHaveProperty('headingFont');
    expect(identity.typography).toHaveProperty('bodyFont');
    expect(identity.typography).toHaveProperty('monoFont');
  });

  it('has base size and scale ratio', () => {
    expect(identity.typography.baseSize).toBeGreaterThan(0);
    expect(identity.typography.scaleRatio).toBeGreaterThan(1);
  });

  it('has type scale steps', () => {
    expect(identity.typography.steps).toBeDefined();
    expect(Array.isArray(identity.typography.steps)).toBe(true);
    expect(identity.typography.steps.length).toBeGreaterThan(0);
  });
});

describe('Spacing', () => {
  it('has base unit', () => {
    expect(identity.spacing).toHaveProperty('unit');
    expect(identity.spacing.unit).toBeGreaterThan(0);
  });

  it('has spacing values object', () => {
    expect(identity.spacing).toHaveProperty('values');
    expect(typeof identity.spacing.values).toBe('object');
    expect(Object.keys(identity.spacing.values).length).toBeGreaterThan(0);
  });
});

describe('Sub-brands', () => {
  it('has Siza and MCP-Gateway sub-brands', () => {
    expect(identity.subBrands).toHaveProperty('siza');
    expect(identity.subBrands).toHaveProperty('mcp-gateway');
  });

  it('sub-brands have their own typography', () => {
    expect(identity.subBrands.siza).toHaveProperty('headingFont');
    expect(identity.subBrands.siza).toHaveProperty('bodyFont');
    expect(identity.subBrands['mcp-gateway']).toHaveProperty('headingFont');
  });
});

describe('Logo', () => {
  it('has logo configuration', () => {
    expect(identity.logo).toBeDefined();
  });
});
