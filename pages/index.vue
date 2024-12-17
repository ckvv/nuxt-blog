<script setup lang="ts">
const { data } = await useFetch(`/api/content`);
</script>

<template>
  <div class="home">
    <div class="flex flex-col gap-4">
      <div v-for="(item, index) in data" :key="index" class="flex flex-wrap justify-between items-center gap-x-4">
        <CLink :to="`/post${item.path}`" class="flex-grow text-xl">
          {{ item.name }}
        </CLink>
        <div class="flex gap-x-4">
          <div class="flex gap-2 text-lg">
            <CLink v-for="tag in item.params.data.tags" :key="tag" class="text-sky-700 font-bold" :to="`/tag/${tag}`">
              #{{ tag }}
            </CLink>
          </div>
          <div class="shrink-0">
            {{ item.params.data.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
