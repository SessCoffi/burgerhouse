import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet de rendre le serveur accessible sur le réseau local
    port: 5173, // Port par défaut de Vite
  },
});
