import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        ink: "#24302B",
        sage: "#8AA398",
        sageDark: "#526A61",
        cream: "#F6F1E8",
        sand: "#E8DED0",
        mist: "#E4ECE8",
        clay: "#B98B72",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },

      boxShadow: {
        soft: "0 18px 55px rgba(36,48,43,.10)",
      },
    },
  },

  plugins: [],
};

export default config;