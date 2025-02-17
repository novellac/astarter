<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="left-aligned-prose-block">
    <BaseHeading v-if="block.heading" :heading="block.heading" />

    <div v-if="block.richText" v-html="md.render(block.richText)" />
  </div>
</template>

<script setup lang="ts">
import markdownit from 'markdown-it'
const md = markdownit()

defineProps({
  block: {
    type: Object,
    default: null,
  },
});
</script>
