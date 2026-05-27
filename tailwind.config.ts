import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071b32",
        gold: "#c59a4a",
        champagne: "#d6b46d",
        ivory: "#f7f5f0",
      },
    },
  },
  plugins: [],
};

export default config;
