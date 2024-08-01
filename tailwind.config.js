/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bg-secondary": "#191919",
        "bg-secondary1": "#f7f7f7",
        "bg-blue": "#1612ff",
        "border-primary": "#333",
        "border-primary1": "#ededed",
        "text-secondary": "#999",
        "text-secondary1": "#666",
      },
      fontFamily: {
        regular: "Suisse Intl, sans-serif",
        siaga: "Siaga",
        roboto: "Roboto, sans-serif",
      },
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
