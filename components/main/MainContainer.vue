<script setup lang="ts">
import Footer from "./Footer.vue";
import Link from "./Links.vue";
import Main from "./Main.vue";

const widgetClasses = ref(
  "rounded-sm min-[800px]:p-5 p-2 bg-foreground text-black dark:text-neutral-200 border border-primary-border hover:dark:border-hover-border"
);
</script>

<template>
  <div class="flex h-full gap-2 flex-col">
    <div class="flex min-[800px]:flex-row flex-col-reverse flex-6 gap-2">
      <Link class="flex-1" :class="widgetClasses" />
      <Main class="flex-9" :class="widgetClasses" />
    </div>
    <Footer class="flex-1 min-h-[75px]" :class="widgetClasses" />
  </div>
</template>

