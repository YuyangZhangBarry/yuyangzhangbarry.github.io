import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so assets load on GitHub Pages (root or project site) without wrong absolute /assets paths
  base: './',
  plugins: [
    tailwindcss(),
    react()
  ],
})
