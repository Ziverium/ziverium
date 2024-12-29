// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Replace with the desired port number
    host: "0.0.0.0", // Ensure the server is accessible externally
  },
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
