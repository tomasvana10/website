<script setup>
import { useDark } from "@vueuse/core";

const isDark = useDark();

function toggleDark() {
  isDark.value = !isDark.value;
}
</script>

<template>
  <button @click="toggleDark">Is Dark: {{ isDark }}</button>
</template>
