<script setup>
import { UseDark } from "@vueuse/components";
</script>

<template>
  <ClientOnly>
    <UseDark v-slot="{ isDark, toggleDark }">
      <button @click="toggleDark()">Is Dark: {{ isDark }}</button>
    </UseDark>
  </ClientOnly>
</template>
