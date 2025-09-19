import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change `base` depending on where you deploy:
// - GitHub Pages: '/AgriSmart/'
// - Netlify: '/'
const BASE_PATH = process.env.DEPLOY_PLATFORM === 'github' ? '/AgriSmart/' : '/';

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
