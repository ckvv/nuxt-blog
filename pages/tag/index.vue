<script setup lang="ts">
const { data } = await useFetch(`/api/tag`);
</script>

<template>
  <div class="tag-page">
    <div class="flex flex-wrap gap-4">
      <CLink v-for="tag in data" :key="tag" :to="`/tag/${tag}`" class="text-blue-500 font-bold">
        #{{ tag }}
      </CLink>
    </div>
  </div>
</template>
