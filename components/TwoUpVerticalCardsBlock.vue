<template>
  <div class="two-up-vertical-cards-block">
    <VerticalCardBlock :block="block.twoUpOne" />
    <VerticalCardBlock :block="block.twoUpTwo" />
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
.two-up-vertical-cards-block {
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

@media screen and (min-width: 768px) {
  .two-up-vertical-cards-block {
    flex-direction: row;
    gap: var(--gap-xl);
  }

  .two-up-vertical-cards-block > * {
    flex-basis: 50%;
  }
}
</style>
