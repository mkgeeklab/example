import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../build',
    minify: true,
    emptyOutDir: true,
  },
});
