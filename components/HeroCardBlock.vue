<template>
  <HorizontalCardBlock :block="block" :heading-level="1" />
</template>

<script setup lang="ts">
defineProps({
  block: {
    type: Object,
    default: null,
  },
});
</script>
