<template>
    <div
      class="grid grid-cols-3 gap-4"
      v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="Loading..."
    >
      <h1 class="col-span-3">Tools</h1>
      <ToolItem
        v-for="item in toolItems"
        :info="item"
      ></ToolItem>
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from "vue";
  import { getTools } from "@/api/tool";
  import ToolItem from "@/components/ToolItem/index.vue";
  const toolItems = ref<any[]>([]);
  const fullscreenLoading = ref<boolean>(true);
  getTools()
    .then((data: any) => {
      console.log(data);
      toolItems.value = data;
    })
    .finally(() => {
      fullscreenLoading.value = false;
    });
  </script>
  