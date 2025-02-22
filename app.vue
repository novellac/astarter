<!-- eslint-disable vue/no-v-html -->
<template>
  <a href="#main" class="skip-link">Skip to Main</a>

  <div class="body-wrapper">
    <header>
      <BaseNavMenu :nav-items="data?.meta.navItems" :site-name="data?.meta.siteName" />
    </header>

    <main id="main" tabindex="-1">
      <NuxtRouteAnnouncer />
      <NuxtPage :site-name="data?.meta.siteName" />
    </main>

    <footer>
      <div class="footer-text" v-html="md.render(data?.meta.footerText)"/>
      <p>© {{ new Date().getFullYear() }} {{ data?.meta.siteCopyright }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import markdownit from 'markdown-it'
const md = markdownit()

const { data } = await useAsyncData('global', () => {
  return queryCollection('site')
    .first()
})
</script>

<style>
@import url('~/styles/css/main.css');
</style>