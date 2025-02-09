<template>
  <component
    :is="`h${headingLevel}`"
    :id="headingId"
    :class="{ 'sr-only': hideHeading }"
  >
    {{ heading }}
  </component>
</template>

<script lang="ts" setup>
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  hideHeading: {
    type: Boolean,
    default: false,
  },
  headingLevel: {
    type: Number,
    default: 2,
  },
});

const headingId = computed(() => {
  return props.heading
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();
});
</script>
