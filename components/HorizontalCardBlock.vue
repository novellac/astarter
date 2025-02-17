<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="horizontal-card-block"
    :class="{ 'image-right': block.imageRight }"
  >
    <div>
      <NuxtImg
        v-if="block.image"
        class="card-image"
        :src="block.image"
        :alt="block.alt"
        loading="lazy"
        placeholder
      />
    </div>

    <div class="card-content">
      <BaseHeading
        v-if="block.heading"
        :heading-level="headingLevel"
        :hide-heading="block.hideHeading"
        :heading="block.heading"
      />

      <div v-if="block.richText" v-html="md.render(block.richText)" />

      <DividerBlock
        v-if="block.dividerStyle"
        class="card-divider"
        :block="block"
      />
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
  headingLevel: {
    type: Number,
    default: 2,
  },
});
</script>

<style scoped>
.horizontal-card-block {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.card-image {
  width: 100%;
}

.card-content {
  flex-shrink: 0;
}

.card-divider {
  margin-top: var(--gap-sm);
}

@media screen and (min-width: 768px) {
  .horizontal-card-block {
    flex-direction: row;
    align-items: center;
    gap: var(--gap-base);
  }

  .horizontal-card-block.image-right {
    flex-direction: row-reverse;
  }

  .horizontal-card-block div {
    flex-basis: 50%;
  }

  .card-divider {
    margin-top: var(--gap-base);
  }
}
</style>
