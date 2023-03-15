<template>
  <div
    class="grid grid-cols-3 gap-4"
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-text="Loading..."
  >
    <h1 class="col-span-3">Dataset</h1>
    <DatasetItem v-for="item in datasetItems" :info="item"></DatasetItem>
  </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { getDataset } from "@/api/dataset";
import DatasetItem from "@/components/DatasetItem/index.vue";
const datasetItems = ref<any[]>([]);
const fullscreenLoading = ref<boolean>(true);
getDataset()
  .then((data: any) => {
    console.log(data);
    datasetItems.value = data;
  })
  .finally(() => {
    fullscreenLoading.value = false;
  });
</script>
