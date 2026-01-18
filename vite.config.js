import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/smart-home-ui-app/", // ⚠️ nome EXATO do repositório
});

