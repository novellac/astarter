<script setup lang="ts">
import { reactive } from 'vue'
import CenteredProseBlock from './CenteredProseBlock.vue'

const block = reactive({
  heading: 'This is a heading',
  richText: 'This is _a little_rich_**bold text**_and it_\n\n**might**_be on a new line or might(link to)\n\n[an example](https://example.com)\n'
})
</script>

<template>
  <Story>
    <template #controls>
      <HstText v-model="block.heading" title="heading" />
      <HstTextarea v-model="block.richText" title="richText" />
    </template>

    <CenteredProseBlock v-model="block" :block />
  </Story>
</template>
