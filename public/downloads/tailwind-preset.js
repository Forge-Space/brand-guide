/** @type {import('tailwindcss').Config} */
export default {
  "theme": {
    "extend": {
      "colors": {
        "primary": "#7c3aed",
        "secondary": "#5c6ee6",
        "accent": "#e12bfd",
        "neutral": {
          "100": "#f2f2f3",
          "200": "#e5e4e7",
          "300": "#cbc9cf",
          "400": "#98949e",
          "500": "#65616b",
          "600": "#323036",
          "700": "#19181b",
          "800": "#0d0c0d"
        },
        "success": "#22c35d",
        "warning": "#f59f0a",
        "error": "#ef4343",
        "info": "#368fe7"
      },
      "fontFamily": {
        "heading": [
          "Outfit",
          "sans-serif"
        ],
        "body": [
          "Inter",
          "sans-serif"
        ],
        "mono": [
          "JetBrains Mono",
          "monospace"
        ]
      },
      "fontSize": {
        "xs": [
          "10.24px",
          {
            "lineHeight": "1.6"
          }
        ],
        "sm": [
          "12.8px",
          {
            "lineHeight": "1.6"
          }
        ],
        "base": [
          "16px",
          {
            "lineHeight": "1.6"
          }
        ],
        "lg": [
          "20px",
          {
            "lineHeight": "1.5"
          }
        ],
        "xl": [
          "25px",
          {
            "lineHeight": "1.3"
          }
        ],
        "2xl": [
          "31.25px",
          {
            "lineHeight": "1.3"
          }
        ],
        "3xl": [
          "39.06px",
          {
            "lineHeight": "1.2"
          }
        ],
        "4xl": [
          "48.83px",
          {
            "lineHeight": "1.2"
          }
        ],
        "5xl": [
          "61.04px",
          {
            "lineHeight": "1.2"
          }
        ]
      },
      "spacing": {
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
      "boxShadow": {
        "none": "none",
        "sm": "1px 1px 2px 0px rgba(47, 36, 66, 0.05)",
        "md": "2px 2px 4px -1px rgba(47, 36, 66, 0.08)",
        "lg": "4px 4px 8px -2px rgba(47, 36, 66, 0.1)",
        "xl": "8px 8px 16px -4px rgba(47, 36, 66, 0.12)",
        "2xl": "16px 16px 32px -8px rgba(47, 36, 66, 0.15)"
      },
      "borderRadius": {
        "none": "0px",
        "sm": "2px",
        "md": "4px",
        "lg": "8px",
        "xl": "12px",
        "full": "9999px",
        "circle": "9999px"
      },
      "borderWidth": {
        "thin": "1px",
        "medium": "2px",
        "thick": "3px"
      },
      "transitionDuration": {
        "instant": "0ms",
        "fast": "80ms",
        "normal": "150ms",
        "slow": "250ms",
        "slower": "350ms"
      },
      "transitionTimingFunction": {
        "ease-in": "cubic-bezier(0.55, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.1, 1)",
        "ease-in-out": "cubic-bezier(0.55, 0, 0.1, 1)",
        "spring": "cubic-bezier(0.2, 1.6, 0.4, 1)",
        "bounce": "cubic-bezier(0.2, 1.4, 0.4, 1)"
      },
      "backgroundImage": {
        "hero": "linear-gradient(315deg, #7c3bed 0%, #5c6ee6 100%)",
        "button": "linear-gradient(315deg, #e12bfd 0%, #7c3bed 100%)",
        "card": "linear-gradient(315deg, #f2f2f3 0%, #cacace 100%)",
        "text": "linear-gradient(315deg, #7c3bed 0%, #e12bfd 100%)",
        "background": "linear-gradient(315deg, #f2f2f3 0%, #0d0c0d 100%)"
      }
    }
  }
};
