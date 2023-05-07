import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  base: './',
  
  optimizeDeps: {
    disabled: false
  },
  build: {
    outDir: '../build',
    minify: 'terser',
    emptyOutDir: true,
    commonjsOptions: {
      include: [],
    },
    rollupOptions: {
      treeshake: 'safest',
    },
  },
});
