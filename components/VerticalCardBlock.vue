<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="vertical-card-block">
    <NuxtImg
      v-if="block.image"
      class="card-image"
      :src="block.image"
      :alt="block.alt"
      loading="lazy"
      placeholder
    />

    <div>
      <BaseHeading v-if="block.heading" :heading="block.heading" />
      <div v-if="block.richText" v-html="md.render(block.richText)" />
    </div>
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

<style scoped>
.vertical-card-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-sm);
}

.card-image {
  width: 100%;
  margin: auto;
}
</style>
