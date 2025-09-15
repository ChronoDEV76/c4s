// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D62828",
          accent: "#F97316",
          dark: "#0F172A",
          muted: "#64748B",
          light: "#F8FAFC",
          success: "#10B981",
        },
      },
    },
  },
  plugins: [],
}

