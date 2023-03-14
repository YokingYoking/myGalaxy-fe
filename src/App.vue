<template>
  <el-container class="w-full h-full">
    <el-header>Header</el-header>
    <el-container class="w-full" style="height: calc(100vh - 60px)">
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
import MySideBar from '@/components/MySideBar/index.vue'
</script>
<style scoped lang="scss"></style>
