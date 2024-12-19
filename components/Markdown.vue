<script setup lang="ts">
import '@/assets/css/markdown.css';

defineProps<{
  value: string;
}>();
</script>

<template>
  <div>
    <MDC class="markdown-container" :value="value" tag="article" />
  </div>
</template>
