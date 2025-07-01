<script setup>
import { useDark } from '@vueuse/core';

onMounted(() => {
  useDark();
})
</script>

<template>
  <NuxtLayout>
    <h1 class="dark:text-5xl">hello</h1>
    <p>Hello</p>
  </NuxtLayout>
</template>

