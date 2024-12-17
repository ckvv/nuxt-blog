<script setup lang="ts">
import type { MDINFO } from '@/utils/server';
import { decrypt, toArray } from '@/utils';
import { ref } from 'vue';

const _content = ref('');
const paths = usePaths();

const { data } = await useFetch<MDINFO>(`/api/content/${paths}`);

useSeoMeta({
  title: data.value?.name,
  description: data.value?.name,
});

async function decryptContent(data: MDINFO, message: string = '该文章被加密, 请输入密码') {
  try {
    // eslint-disable-next-line no-alert
    const password = prompt(message, '');
    if (password !== null) {
      _content.value = await decrypt(password || '', data?.params?.content || '');
    }
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('密码错误');
  }
}
</script>

<template>
  <div class="post-content">
    <div class="text-4xl font-bold my-4">
      {{ data?.params?.data?.title || data?.name }}
    </div>
    <div class="flex justify-between items-center">
      <div class="flex gap-2 my-4 text-lg">
        <CLink v-for="tag in toArray(data?.params?.data?.tags)" :key="tag" class="text-sky-700 font-bold" :to="`/tag/${tag}`">
          #{{ tag }}
        </CLink>
      </div>
      <div>
        {{ data?.params?.data?.date }}
      </div>
    </div>
    <Markdown v-if="!data?.params?.data?.encrypt || _content" :value="_content || data?.params?.content || ''" />
    <div v-else class="text-center m-4">
      <div class="text-xl my-8">
        该篇文章已经过加密
      </div>
      <div class="cursor-pointer hover:text-sky-700 font-bold text-4xl" @click="decryptContent(data)">
        点击查看
      </div>
    </div>
  </div>
</template>
