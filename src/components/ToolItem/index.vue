<template>
    <div class="p-5 bg-white mb-5 shadow-lg">
        <el-form>
            <el-form-item label="ID">
                <span>{{info.id}}</span>
            </el-form-item>
            <el-form-item label="Name">
                <span style="overflow-wrap: anywhere;">{{info.name}}</span>
            </el-form-item>
            <el-form-item label="Version">
                <span>{{info.version}}</span>
            </el-form-item>
            <el-form-item label="Description">
                <span>{{info.description}}</span>
            </el-form-item>
            <el-form-item label="Target">
                <span>{{info.target}}</span>
            </el-form-item>
            <el-form-item label="Labels">
                <span v-if="info.labels.length===0">No Tags.</span>
                <span class="mr-2" v-for="tag in info.labels" v-else>{{tag}}</span>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
interface DatasetItem {
    id: string,
    name: string,
    version: string,
    labels: string[],
    description: string,
    target: string
}
const props = defineProps<{
    info: DatasetItem
}>()
</script>