<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  groceries: ['Mehl', 'Eier', 'Birnen', 'Mehl']
})

function sortGroceries() {
  var sortedGroceries = [...new Set(state.groceries)].sort();
  return sortedGroceries;
}

</script>

<template>
  <h1>Testwebseite</h1>
  <h2>Prototyp der Technologie Vue.js</h2>

  <Card title="Einkaufsliste">
    <TagInput v-model:tags="state.groceries" placeholder="Zutat hinzufügen"></TagInput>
  </Card>

  <Card title="Sortierte Zutaten:">
    <ul>
      <li v-for="tag in sortGroceries()">{{ tag }}</li>
    </ul>
  </Card>
</template>

<style>
  .card {
    /* background-color: yellow !important; */
  }
</style>
