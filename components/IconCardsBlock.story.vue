<script setup lang="ts">
import { reactive } from 'vue'
import IconCardsBlock from './IconCardsBlock.vue'

const block = reactive({
  heading: 'Some features of asters',
  text: [
    'Asters often have many petals which are very pretty', 
    'The middle part of the aster makes a great throne for pollinators', 
    'Contrasting foliage highlight the often purple color of the aster petals'
  ]
})
</script>

<template>
  <Story>
    <template #controls>
      <HstText v-model="block.heading" title="heading" />
    </template>

    <IconCardsBlock v-model="block" :block />
  </Story>
</template>
