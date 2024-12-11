<script setup lang="ts">
import type { MDINFO } from '../../utils/markdown.js'
import { toArray } from '../../utils'

const paths = usePaths()

const { data } = await useFetch<MDINFO>(`/api/content/${paths}`)
</script>

<template>
  <TopBar />
  <div class="post-content">
    <div class="text-4xl font-bold my-4">
      {{ data?.params?.data?.title || data?.name }}
    </div>
    <div class="flex justify-between items-center">
      <div class="flex gap-2 my-4">
        <CLink v-for="tag in toArray(data?.params?.data?.tags)" :key="tag" :to="`/tag/${tag}`">
          #{{ tag }}
        </CLink>
      </div>
      <div>
        {{ data?.params?.data?.date }}
      </div>
    </div>
    <Markdown :value="data?.params?.content" />
  </div>
</template>
