<script setup lang="ts">
const { outline } = defineProps<{
  outline: any;
}>();
</script>

<template>
  <div class="markdown-menu absolute right-[-100%]">
    {{ outline }}
  </div>
</template>
