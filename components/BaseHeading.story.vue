<script setup lang="ts">
import { ref } from 'vue'
import BaseHeading from './BaseHeading.vue'

const text = ref('Fabulous heading')
</script>

<template>
  <Story>
    <BaseHeading :heading="text" />
  </Story>
</template>
