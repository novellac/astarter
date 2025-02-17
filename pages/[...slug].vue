<script setup lang="ts">
const route = useRoute()
const { data: basicpage } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: basicpage.value?.title,
  description: basicpage.value?.description
})

</script>

<template>
  <article v-if="basicpage">
      <HeroCardBlock
        v-if="basicpage.meta.heroField"
        class="basicpage-hero"
        :block="basicpage.meta.heroField"
      />

      <DividerBlock
        v-if="basicpage.meta.dividerField"
        class="basicpage-divider"
        :block="basicpage.meta.dividerField"
      />

      <div v-if="basicpage.meta.blocks && basicpage.meta.blocks.length > 0" class="blocks">
        <section v-for="(block, index) in basicpage.meta.blocks" :key="index">
          <component :is="useBlockTemplate(block._template)" :block="block" />
        </section>
      </div>
    </article>

  <div v-else>Page not found</div>
</template>

<style scoped>
.basicpage-hero {
  margin-bottom: var(--gap-base);
}

.basicpage-divider {
  margin-bottom: var(--gap-lg);
}

.blocks {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

@media screen and (min-width: 768px) {
  .blocks {
    gap: var(--gap-xl);
  }
}
</style>