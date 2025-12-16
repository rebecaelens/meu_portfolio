import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Root base for Vercel deployment
  base: '/',
  plugins: [react()],
});
