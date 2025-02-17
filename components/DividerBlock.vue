<template>
  <div>
    <hr v-if="block.dividerStyle === 'horizontalLine'" class="divider solid" >

    <div v-if="block.dividerStyle === 'dottedLine'" class="divider dotted" />
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
.divider {
  margin: auto;
}

@media screen and (min-width: 768px) {
  .divider {
    max-width: 500px;
  }
}

.solid {
  border-color: var(--color-primary);
  border-width: var(--border-size-base);
}

.dotted {
  border-color: var(--color-primary);
  border-style: dotted;
  border-bottom-width: var(--border-size-md);
  border-top-width: 0px;
}
</style>