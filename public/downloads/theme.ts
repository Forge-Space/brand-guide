import type { CSSProperties } from 'react';

export const theme = {
  "colors": {
    "primary": "#7c3aed",
    "secondary": "#3B82F6",
    "accent": "#F59E0B",
    "neutral-100": "#f2f2f3",
    "neutral-200": "#e5e4e7",
    "neutral-300": "#cbc9cf",
    "neutral-400": "#98949e",
    "neutral-500": "#65616b",
    "neutral-600": "#323036",
    "neutral-700": "#19181b",
    "neutral-800": "#0d0c0d",
    "success": "#22c35d",
    "warning": "#f59f0a",
    "error": "#ef4343",
    "info": "#368fe7"
  },
  "fonts": {
    "heading": "'Outfit', sans-serif",
    "body": "'Inter', sans-serif",
    "mono": "'JetBrains Mono', monospace"
  },
  "fontSizes": {
    "xs": "10.24px",
    "sm": "12.8px",
    "base": "16px",
    "lg": "20px",
    "xl": "25px",
    "2xl": "31.25px",
    "3xl": "39.06px",
    "4xl": "48.83px",
    "5xl": "61.04px"
  },
  "lineHeights": {
    "xs": "1.6",
    "sm": "1.6",
    "base": "1.6",
    "lg": "1.5",
    "xl": "1.3",
    "2xl": "1.3",
    "3xl": "1.2",
    "4xl": "1.2",
    "5xl": "1.2"
  },
  "space": {
    "0": "0px",
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
    "0.5": "2px",
    "1.5": "6px",
    "2.5": "10px"
  },
  "shadows": {
    "none": "none",
    "sm": "1px 1px 2px 0px rgba(47, 36, 66, 0.05)",
    "md": "2px 2px 4px -1px rgba(47, 36, 66, 0.08)",
    "lg": "4px 4px 8px -2px rgba(47, 36, 66, 0.1)",
    "xl": "8px 8px 16px -4px rgba(47, 36, 66, 0.12)",
    "2xl": "16px 16px 32px -8px rgba(47, 36, 66, 0.15)"
  },
  "radii": {
    "none": "0px",
    "sm": "2px",
    "md": "4px",
    "lg": "8px",
    "xl": "12px",
    "full": "9999px",
    "circle": "9999px"
  },
  "borderWidths": {
    "thin": "1px",
    "medium": "2px",
    "thick": "3px"
  },
  "motion": {
    "durations": {
      "instant": "0ms",
      "fast": "80ms",
      "normal": "150ms",
      "slow": "250ms",
      "slower": "350ms"
    },
    "easings": {
      "ease-in": "cubic-bezier(0.55, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.1, 1)",
      "ease-in-out": "cubic-bezier(0.55, 0, 0.1, 1)",
      "spring": "cubic-bezier(0.2, 1.6, 0.4, 1)",
      "bounce": "cubic-bezier(0.2, 1.4, 0.4, 1)"
    },
    "transitions": {
      "fade": "opacity 150ms cubic-bezier(0, 0, 0.1, 1)",
      "slide": "transform 150ms cubic-bezier(0, 0, 0.1, 1)",
      "scale": "transform 80ms cubic-bezier(0, 0, 0.1, 1)",
      "color": "color 250ms cubic-bezier(0, 0, 0.1, 1), background-color 250ms cubic-bezier(0, 0, 0.1, 1)",
      "all": "all 150ms cubic-bezier(0, 0, 0.1, 1)"
    }
  },
  "gradients": {
    "hero": "linear-gradient(315deg, #7c3aed 0%, #3B82F6 100%)",
    "button": "linear-gradient(315deg, #F59E0B 0%, #7c3aed 100%)",
    "card": "linear-gradient(315deg, #f2f2f3 0%, #cacace 100%)",
    "text": "linear-gradient(315deg, #7c3aed 0%, #F59E0B 100%)",
    "background": "linear-gradient(315deg, #f2f2f3 0%, #0d0c0d 100%)"
  }
} as const;

export type Theme = typeof theme;
