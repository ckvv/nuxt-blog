<script setup lang="ts">
const navs = [{
  name: '博客',
  value: '/',
}, {
  name: '标签',
  value: '/tag',
}, {
  name: '关于',
  value: '/post/about',
}, {
  name: '订阅',
  value: '/api/rss.xml',
  options: {
    external: true,
  },
}];
</script>

<template>
  <div class="top-bar my-4 flex justify-between pb-12">
    <div class="text-2xl shrink-0">
      hugo-blog
    </div>
    <div class="flex gap-8 text-2xl">
      <CLink v-for="nav in navs" :key="nav.value" :to="nav.value" :options="nav.options">
        {{ nav.name }}
      </CLink>
    </div>
  </div>
</template>
