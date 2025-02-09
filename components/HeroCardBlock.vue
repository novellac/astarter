<template>
  <HorizontalCardBlock :block="block" :heading-level="1" />
</template>

<script lang="ts" setup>
defineProps({
  block: {
    type: Object,
    default: null,
  },
});
</script>
