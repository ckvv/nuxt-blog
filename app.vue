<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: runtimeConfig.public.title,
  description: runtimeConfig.public.description,
});
</script>

<template>
  <div class="main flex flex-col">
    <TopBar class="shadow-md md:shadow-none px-4" />
    <div class="main-content py-8 relative px-4">
      <NuxtPage />
    </div>
  </div>
</template>
