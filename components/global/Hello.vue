<script setup>
const name = defineModel('name', { default: 'Hello World!' });
</script>

<template>
  <h1><slot /> {{ name }}</h1>
  <UInput v-model="name" />
</template>
