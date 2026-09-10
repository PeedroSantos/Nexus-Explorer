import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/Nexus-Explorer/' no build para servir sob GitHub Pages
// (peedrosantos.github.io/Nexus-Explorer/); em dev continua '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Nexus-Explorer/' : '/',
})
