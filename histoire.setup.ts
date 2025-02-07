import './assets/css/main.css'
import { defineSetupVue3 } from '@histoire/plugin-vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {  
  // app.provide('test', 'hello')
  // app.use(...)
  // TODO: Remove comments when we get the NuxtLink working in Histoire
  // app.use(createRouter({ history: createMemoryHistory(), routes: [] }))
  // app.component('NuxtLink', NuxtLink)
})
