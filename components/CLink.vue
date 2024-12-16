<script setup lang="ts">
const { underline = true } = defineProps<{
  underline?: boolean;
  active?: boolean;
  to: string;
  options?: any;
}>();
</script>

<template>
  <div class="group clink cursor-pointer shrink-0 select-none relative flex items-center" @click="navigateTo(to, { ...options, external: true })">
    <slot />
    <div v-if="underline" class="h-1 bg-blue-300 w-0 group-hover:w-full transition-width duration-500 ease-in-out absolute -bottom-2" :class="{ 'w-full': active }" />
  </div>
</template>
