<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <div class="group clink cursor-pointer shrink-0" @click="navigateTo(to)">
    <slot />
    <div class="h-1 bg-blue-400 w-0 group-hover:w-full transition-width duration-500 ease-in-out" />
  </div>
</template>
