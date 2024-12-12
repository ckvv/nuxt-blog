<script setup lang="ts">
defineProps<{
  to: string;
  options?: any;
}>();
</script>

<template>
  <div class="group clink cursor-pointer shrink-0" @click="navigateTo(to, options)">
    <slot />
    <div class="h-1 bg-blue-300 w-0 group-hover:w-full transition-width duration-500 ease-in-out" />
  </div>
</template>
