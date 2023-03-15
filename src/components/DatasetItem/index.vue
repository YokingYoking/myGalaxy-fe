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
            <el-form-item label="Type">
                <span>{{info.type}}</span>
            </el-form-item>
            <el-form-item label="Colletion ID">
                <span>{{info.collection_id}}</span>
            </el-form-item>
            <el-form-item label="Colletion Type">
                <span>{{info.collection_type}}</span>
            </el-form-item>
            <el-form-item label="History ID">
                <span>{{info.history_id}}</span>
            </el-form-item>
            <el-form-item label="History Content Type">
                <span>{{info.history_content_type}}</span>
            </el-form-item>
            <el-form-item label="Tags">
                <span v-if="info.tags.length===0">No Tags.</span>
                <span class="mr-2" v-for="tag in info.tags" v-else>{{tag}}</span>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
interface DatasetItem {
    id: string,
    name: string,
    update_time: string,
    published: boolean,
    purged: boolean,
    tags: string[],
    type: string,
    collection_id: string,
    collection_type: string,
    history_content_type: string,
    history_id: string
}
const props = defineProps<{
    info: DatasetItem
}>()
</script>