import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
  server: {
    hmr: { overlay: false }
  }
});
