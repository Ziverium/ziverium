// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`, // Adjust path as needed
      },
    },
    alias: {
      "@": "./src", // This tells Vite to map @ to your src folder
    },
  },
});
