import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  test: {
    setupFiles: ["./test-setup.ts"],
    globals: true,
    environment: "happy-dom",
    passWithNoTests: true,
  },
});
