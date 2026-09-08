import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // The deployment script sets BASE when this app is built under a subpath.
  // Keep the normal root deployment unchanged when BASE is not provided.
  base: process.env.BASE ? `/${process.env.BASE.replace(/^\/+|\/+$/g, '')}/` : '/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
