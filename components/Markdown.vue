<script setup lang="ts">
import '@/assets/css/markdown.css';

defineProps<{
  value: string;
}>();
</script>

<template>
  <MDC class="markdown-container" :value="value" tag="article" />
</template>
