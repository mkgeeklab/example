import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const settings = {
    plugins: [
      vue(),
      legacy()
    ],
    test: {
      globals: true,
      environment: 'jsdom'
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
        {
          find: 'vue',
          replacement: "vue/dist/vue.esm-bundler.js"
        },
      ],
    },
  };

  if (command === 'serve') {

    settings.resolve.alias.push(
      {
        find: '@mkgeeklab/googlemaps-core-common',
        replacement: fileURLToPath(new URL('./node_modules/@mkgeeklab/googlemaps-core-common/src', import.meta.url))
      },
      {
        find: '@mkgeeklab/googlemaps-core-vue',
        replacement: fileURLToPath(new URL('./node_modules/@mkgeeklab/googlemaps-core-vue/src', import.meta.url))
      },
      {
        find: '@mkgeeklab/googlemaps-platform-browser',
        replacement: fileURLToPath(new URL('./node_modules/@mkgeeklab/googlemaps-platform-browser/src', import.meta.url))
      },
      {
        find: '@mkgeeklab/googlemaps-bridge-capacitor',
        replacement: fileURLToPath(new URL('./node_modules/@mkgeeklab/googlemaps-bridge-capacitor/src', import.meta.url))
      }
    )


  }

  return settings;
});