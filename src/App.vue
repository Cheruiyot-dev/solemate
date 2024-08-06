<script setup lang="ts">
import {  RouterView } from "vue-router";
import AppLayout from "./components/AppLayout.vue";

import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
