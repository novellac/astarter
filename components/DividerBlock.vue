<template>
  <div>
    <hr v-if="block.dividerStyle === 'horizontalLine'" class="divider solid" >

    <hr v-if="block.dividerStyle === 'dottedLine'" class="divider dotted" >
  </div>
</template>

<script lang="ts" setup>
defineProps({
  block: {
    type: Object,
    default: null,
  },
});
</script>
