import type { Config } from "tailwindcss";

const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {

    
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

    animation: {
        shimmer: "shimmer 2s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        },
        keyframes: {
            shimmer: {
                from: {
                  backgroundPosition: "0 0",
                },
                to: {
                  backgroundPosition: "-200% 0",
                },
            },
            spotlight: {
                "0%": {
                opacity: "0",
                transform: "translate(-72%, -62%) scale(0.5)",
                },
                "100%": {
                opacity: "1",
                transform: "translate(-50%,-40%) scale(1)",
                },
            },
        },

      colors: {
        background: "#F5EAEA",
        red: "#F16767",
        orange: "#FFB84C",
        purple: "#A459D1",
        black: {
            100: "#313131",
        } 
      },

      fontFamily: {
        firacode: ["FiraCode", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
