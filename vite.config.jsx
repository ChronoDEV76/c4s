// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.js"],
    coverage: {
      provider: "v8",
      reports: ["text", "html"],
      exclude: ["dist/**", "node_modules/**"],
    },
  },
});
