/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background-color-background-primary": "#fff",
        "background-color-background-secondary": "#191919",
        "background-color-blue": "#1612ff",
        "border-color-border-primary": "#333",
        "text-color-text-secondary": "#999",
        "border-color-border-primary1": "#ededed",
        "text-color-text-secondary1": "#666",
        "text-color-text-primary": "#000",
        "button-tertiary-background": "rgba(255, 255, 255, 0)",
        "background-color-background-secondary1": "#f7f7f7",
        grey4: "#9d9d9d",
        grey3: "#d6d6d6",
        dimgray: "#707070",
        "success-green": "#04cb00",
        "alert-yellow": "#edc700",
        "error-red": "#e60000",
      },
      spacing: {
        "size-14": "224px",
        "padding-vertical-desktop-main": "112px",
        "padding-horizontal-desktop-main": "32px",
        "grid-gap-main": "24px",
        "space-medium": "24px",
        "space-extra-small": "12px",
        "padding-vertical-desktop-tiny": "40px",
        "padding-horizontal-desktop-index": "32px",
        "padding-vertical-desktop-small": "80px",
        "space-large": "48px",
        "space-tiny": "8px",
      },
      fontFamily: {
        regular: "Suisse Intl, sans-serif",
        siaga: "Siaga",
        roboto: "Roboto, sans-serif",
      },
      borderRadius: {
        "99980xl": "99999px",
        "59xl": "78px",
        "9980xl": "9999px",
        "radius-main": "8px",
        "radius-round": "99999px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "2xl": "24px",
      "17xl": "36px",
      smi: "13px",
      mini: "15px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1512px',
      // => @media (min-width: 1536px) { ... }
    },
    container:{
      center: true,
    }
  },
  corePlugins: {
    preflight: false,
  },
};
