<template>
  <el-menu
    :default-active="defaultRoute"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <!-- <el-sub-menu index="">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item> -->
    <el-menu-item index="/home">
      <el-icon><House /></el-icon>
      <span>Home</span>
    </el-menu-item>
    <el-menu-item index="/history">
      <el-icon><Memo /></el-icon>
      <span>History</span>
    </el-menu-item>
    <el-menu-item index="/dataset">
      <el-icon><Document /></el-icon>
      <span>Dataset</span>
    </el-menu-item>
    <el-menu-item index="/tool">
      <el-icon><setting /></el-icon>
      <span>Tools</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import {
  Document,
  House,
  Menu as IconMenu,
  Setting,
  Memo
} from "@element-plus/icons-vue";
import { toRaw, ref, watch } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
const defaultRoute = ref(toRaw(router).currentRoute.value.fullPath);
watch(
  () => router,
  (newValue, oldValue) => {
    console.log(newValue.currentRoute.value.fullPath);
    defaultRoute.value = newValue.currentRoute.value.fullPath;
  },
  { immediate: true, deep: true }
);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
