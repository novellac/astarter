import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [
    HstVue(),
    HstNuxt(),
  ],
  routerMode: 'hash',
  theme: {
    defaultColorScheme: 'dark',
  },
  vite: {
    publicDir: './public',
    mode: 'histoire',
  },
  setupFile: 'histoire.setup.ts'
})