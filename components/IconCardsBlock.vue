<template>
  <div class="icon-cards-block">
    <h2 v-if="block.heading">
      {{ block.heading }}
    </h2>

    <ul v-if="block.text" class="cards-list">
      <li v-for="(item, index) in block.text" :key="index">
        <img class="card-image" src="/assets/images/asterIcon.png" alt="" >

        {{ item }}
      </li>
    </ul>
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

<style scoped>
.icon-cards-block {
  display: flex;
  flex-direction: column;
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
}

.cards-list li:first-child img {
  padding-top: 0;
}

.card-image {
  width: 4rem;
  padding: calc(var(--gap-sm) / 2);
}

@media screen and (min-width: 768px) {
  .cards-list li:first-child img {
    padding: calc(var(--gap-sm) / 2);
  }
  .cards-list {
    flex-direction: row;
    flex-basis: 33%;
    gap: var(--gap-lg);
  }
}
</style>
