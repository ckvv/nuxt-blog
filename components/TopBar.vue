<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { title } = runtimeConfig.public;
const { nav: navs } = runtimeConfig.public as any;

const isShowMDNav = ref(false);

const route = useRoute();
</script>

<template>
  <div class="top-bar flex flex-wrap sticky top-0 bg-white">
    <div class="w-full flex justify-between items-center h-16">
      <div class="text-2xl shrink-0 cursor-pointer" @click="navigateTo('/')">
        {{ title }}
      </div>
      <div class="gap-8 text-2xl hidden md:flex items-center">
        <CLink v-for="nav in navs" :key="nav.text" :to="nav.link" :options="nav.options" :active="nav.link === route.path" :underline="!!nav.text">
          <template v-if="nav.text">
            {{ nav.text }}
          </template>
          <UIcon :name="`i-custom-${nav.icon}`" class="cursor-pointer" />
        </CLink>
      </div>
      <UIcon v-if="!isShowMDNav" name="i-custom-menu" class="text-2xl cursor-pointer md:hidden" @click="isShowMDNav = true" />
      <UIcon v-else name="i-custom-close" class="text-2xl cursor-pointer md:hidden" @click="isShowMDNav = false" />
    </div>
    <div v-if="isShowMDNav" class="flex flex-col w-full bg-white leading-loose text-2xl text-center pb-8 border-t border-gray-300">
      <CLink v-for="nav in navs" :key="nav.text" :to="nav.link" :options="nav.options" class="border-b border-gray-300">
        {{ nav.text }}
      </CLink>
    </div>
  </div>
</template>
