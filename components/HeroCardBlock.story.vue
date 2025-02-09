<script setup lang="ts">
import { reactive } from 'vue'
import HeroCardBlock from './HeroCardBlock.vue'

const options = {
  'horizontalLine': 'Solid horizontal line',
  'dottedLine': 'Dotted horizontal line',
}

const block = reactive({
  imageRight: false,
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Aster_Gawedka.jpg',
  alt: 'Top down shot of a cluster of light purple aster flowers with radiant yellow centers, via Wikimedia',
  heading: 'A Little About Asters',
  hideHeading: false,
  richText: 'Aster is a **genus** of perennial flowering plants in the family [Asteraceae](https://en.wikipedia.org/wiki/Asteraceae). Its circumscription has been narrowed, and it now encompasses around 170 species, all but one of which are restricted to Eurasia; many species formerly in Aster are now in other genera of the tribe Astereae. Aster amellus is the type species of the genus and the family Asteraceae.',
  dividerStyle: 'horizontalLine'
})
</script>

<template>
  <Story>
    <template #controls>
      <HstText v-model="block.heading" title="heading" />
      <HstCheckbox v-model="block.hideHeading" title="Hide heading" />
      <HstText v-model="block.image" title="image src" />
      <HstText v-model="block.alt" title="image alt" />
      <HstTextarea v-model="block.richText" title="richText" />
      <HstSelect
        v-model="block.dividerStyle"
        title="Select divider style"
        :options="options"
      />
    </template>

    <HeroCardBlock v-model="block" :block />
  </Story>
</template>
