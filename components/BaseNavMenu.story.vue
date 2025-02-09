<script setup lang="ts">
import { ref } from 'vue'

import BaseNavMenu from './BaseNavMenu.vue'

import {createRouter, createWebHashHistory} from 'vue-router'

function setupApp({ app, story, variant }) {
  // Router mock
  app.use(createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', name: 'home', component: { render: () => null } },
    ],
  }))
}

const siteName = ref('Site home')
const navItems = ref([{linkText: 'Home', href: '/'}, { linkText: 'Nuxt docs', href:'https://github.com/nuxt/nuxt'}, {linkText: 'Histoire', href: 'https://github.com/histoire-dev/histoire'} ])
</script>

<template>
  <Story :setup-app="setupApp">
    <BaseNavMenu :site-name="siteName" :nav-items="navItems" />
  </Story>
</template>
