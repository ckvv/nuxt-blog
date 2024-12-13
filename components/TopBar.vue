<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const navs = runtimeConfig.public.nav as { text: string; link: string; options: any }[];

const isShowMDNav = ref(false);
</script>

<template>
  <div class="top-bar my-4 flex justify-between">
    <div class="text-2xl shrink-0">
      hugo-blog
    </div>
    <div class="gap-8 text-2xl hidden md:flex">
      <CLink v-for="nav in navs" :key="nav.text" :to="nav.link" :options="nav.options">
        {{ nav.text }}
      </CLink>
    </div>

    <UIcon name="i-custom-menu" class="text-2xl cursor-pointer md:hidden" @click="isShowMDNav = true" />
    <div v-if="isShowMDNav" class="flex flex-col w-full bg-white leading-loose text-2xl absolute text-center">
      <CLink v-for="nav in navs" :key="nav.text" :to="nav.link" :options="nav.options" class="border-b border-gray-300">
        {{ nav.text }}
      </CLink>
    </div>
  </div>
</template>
