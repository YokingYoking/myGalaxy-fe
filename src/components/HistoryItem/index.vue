<template>
    <div class="p-5 bg-white mb-5 shadow-lg">
        <el-form>
            <el-form-item label="ID">
                <span>{{info.id}}</span>
            </el-form-item>
            <el-form-item label="Name">
                <span>{{info.name}}</span>
            </el-form-item>
            <el-form-item label="Update Time">
                <span>{{info.update_time}}</span>
            </el-form-item>
            <el-form-item label="Published State">
                <span>{{info.published}}</span>
            </el-form-item>
            <el-form-item label="Purged State">
                <span>{{info.purged}}</span>
            </el-form-item>
            <el-form-item label="Tags">
                <span v-if="info.tags.length===0">No Tags.</span>
                <span class="mr-2" v-for="tag in info.tags" v-else>{{tag}}</span>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
interface HistoryItem {
    id: string,
    name: string,
    update_time: string,
    published: boolean,
    purged: boolean,
    tags: string[]
}
const props = defineProps<{
    info: HistoryItem
}>()
</script>