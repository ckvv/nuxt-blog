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
}]
</script>

<template>
  <div class="top-bar my-4">
    <div class="flex gap-8 text-2xl">
      <CLink v-for="nav in navs" :key="nav.value" :to="nav.value">
        {{ nav.name }}
      </CLink>
    </div>
  </div>
</template>
