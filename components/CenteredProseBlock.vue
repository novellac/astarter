<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="centered-prose-block">
    <BaseHeading v-if="block.heading" :heading="block.heading" />

    <div v-if="block.richText" v-html="md.render(block.richText)" />
  </div>
</template>

<script lang="ts" setup>
import markdownit from 'markdown-it'
const md = markdownit()

defineProps({
  block: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped>
.centered-prose-block {
  max-width: var(--breakpoint-desktop-sm);
  margin-left: auto;
  margin-right: auto;
}
</style>
