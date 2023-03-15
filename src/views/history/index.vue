<template>
  <div
    class="grid grid-cols-3 gap-4"
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-text="Loading..."
  >
    <h1 class="col-span-3">History</h1>
    <HistoryItem
      v-for="item in historyItems"
      :info="item"
    ></HistoryItem>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getHistory } from "@/api/history";
import HistoryItem from "@/components/HistoryItem/index.vue";
const historyItems = ref<any[]>([]);
const fullscreenLoading = ref<boolean>(true);
getHistory()
  .then((data: any) => {
    console.log(data);
    historyItems.value = data;
  })
  .finally(() => {
    fullscreenLoading.value = false;
  });
</script>
