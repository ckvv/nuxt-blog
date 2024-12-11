<script setup lang="ts">
const { data } = await useFetch(`/api/tag`)
</script>

<template>
  <div class="home">
    <TopBar />
    <div class="flex flex-wrap gap-4">
      <CLink v-for="tag in data" :key="tag" :to="`/tag/${tag}`">
        #{{ tag }}
      </CLink>
    </div>
  </div>
</template>
