import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        title: ['Jaturat', 'sans-serif'],
        body: ['"Clear Sans"', 'sans-serif'],
      },
      colors: {
        yellow: {
          300: '#fafb63',
        },
        cyan: {
          300: '#87f4f0',
        },
        black: '#000000',
      },
    },
  },
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
