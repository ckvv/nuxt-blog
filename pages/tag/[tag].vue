<script setup lang="ts">
const route = useRoute();
const { tag } = route.params;

const { data } = await useFetch(`/api/content`, { query: {
  tag,
} });
</script>

<template>
  <div class="tag-content">
    <TopBar />
    <div class="flex flex-col gap-4">
      <div v-for="(item, index) in data" :key="index" class="flex justify-between gap-4">
        <CLink :to="`/post${item.path}`" class="flex-grow text-xl">
          {{ item.name }}
        </CLink>
        <div class="flex gap-4">
          <div class="flex gap-2">
            <CLink v-for="t in item.params.data.tags" :key="t" :to="`/tag/${t}`" class="text-blue-400 font-bold">
              #{{ t }}
            </CLink>
          </div>
          <div>{{ item.params.data.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
