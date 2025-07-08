<script setup>
import { useDark } from "@vueuse/core";

onMounted(() => {
  useDark();
});
</script>

<template>
  <NuxtLayout>
    <MainLayout>
      <MainContainer />
    </MainLayout>
  </NuxtLayout>
</template>

