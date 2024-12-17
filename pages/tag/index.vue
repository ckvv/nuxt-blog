<script setup lang="ts">
const { data } = await useFetch(`/api/tag`);
</script>

<template>
  <div class="tag-page">
    <div class="flex flex-wrap gap-4 text-lg">
      <CLink v-for="tag in data" :key="tag" :to="`/tag/${tag}`" class="text-sky-700 font-bold">
        #{{ tag }}
      </CLink>
    </div>
  </div>
</template>
