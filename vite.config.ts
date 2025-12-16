import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative base so build works on GitHub Pages subpath and locally
  base: './',
  plugins: [react()],
});
