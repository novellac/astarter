<template>
  <div class="image-gallery-block">
    <ul v-if="block.imageGalleryBlockImages" class="images-list">
      <li
        v-for="(item, index) in block.imageGalleryBlockImages"
        :key="index"
        class="image-list-item"
      >
        <NuxtImg
          class="card-image"
          :src="item.image"
          :alt="item.alt"
          loading="lazy"
          placeholder
        />
      </li>
    </ul>

    <div v-if="block.heading || block.caption">
      <BaseHeading v-if="block.heading" :heading="block.heading" />

      <p v-if="block.caption">{{ block.caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  block: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped>
.image-gallery-block {
  background-color: var(--color-accent-dark);
  padding: var(--gap-sm);
  display: flex;
  flex-direction: column;
}

.images-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: var(--gap-sm);
}

.image-list-item {
  width: 100%;
}

.card-image {
  max-height: 80vh;
  object-fit: contain;
  width: 100%;
}
</style>
