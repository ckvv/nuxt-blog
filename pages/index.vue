<script setup lang="ts">
const { data } = await useFetch(`/api/content`)
</script>

<template>
  <div class="home">
    <TopBar />
    <div class="flex flex-col gap-4">
      <div v-for="(item, index) in data" :key="index" class="flex justify-between gap-4">
        <CLink :to="`/post${item.path}`" class="flex-grow text-xl">
          {{ item.name }}
        </CLink>
        <div class="flex gap-4">
          <div class="flex gap-2">
            <CLink v-for="tag in item.params.data.tags" :key="tag" :to="`/tag/${tag}`">
              #{{ tag }}
            </CLink>
          </div>
          <div>{{ item.params.data.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
