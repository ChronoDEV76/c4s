import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#05060b",
          slate: "#11131c",
          gold: "#cfa663",
          accent: "#5b8dff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(12, 18, 63, 0.45)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(207, 166, 99, 0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(91, 141, 255, 0.35), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
