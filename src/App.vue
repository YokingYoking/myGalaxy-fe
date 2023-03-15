<template>
  <el-container class="w-full h-full">
    <el-container class="w-full" style="height: 100vh">
      <el-aside class="w-1/4 h-full">
        <MySideBar></MySideBar>
      </el-aside>
      <el-main class="bg-slate-200 h-full">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import MySideBar from "@/components/MySideBar/index.vue";
import { getCurrentInstance, ref, watch } from "vue";
</script>
<style scoped lang="scss"></style>
