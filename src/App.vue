<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  tags: ['Yellow', 'Red']
})
</script>

<template>
  <p>This is the Vue Test Website</p>
  <Card title="Color Input">
    <TagInput v-model:tags="state.tags" placeholder="Enter a color!"></TagInput>
  </Card>
  <p>Resulting Tags:</p>
  <ul>
    <li v-for="tag in state.tags">{{ tag }}</li>
  </ul>
</template>

<style>
  .card {
    /* background-color: yellow !important; */
  }
</style>
