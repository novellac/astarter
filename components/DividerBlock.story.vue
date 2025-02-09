<script setup lang="ts">
import DividerBlock from './DividerBlock.vue'

const options = {
  'horizontalLine': 'Solid horizontal line',
  'dottedLine': 'Dotted horizontal line',
}

const state = reactive({
  dividerStyle: 'horizontalLine'
})
</script>

<template>
  <Story>
    <template #controls>
      <HstSelect
        v-model="state.dividerStyle"
        title="Select divider style"
        :options="options"
      />
    </template>

    <DividerBlock :block="state" />
  </Story>
</template>
