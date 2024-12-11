<script setup lang="ts">
import Markdownit from 'markdown-it'
import { computed } from 'vue'
import { highlight } from '../utils/highlight'
import '../assets/css/markdown.css'

const props = defineProps<{
  value?: string
}>()

const md = new Markdownit({ highlight })

const result = computed(() => {
  return md.render(props.value)
})
</script>

<template>
  <div class="markdown-container" v-html="result" />
</template>
