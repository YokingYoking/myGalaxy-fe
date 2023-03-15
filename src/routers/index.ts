import { createRouter,createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
        },
        {
            path: '/history',
            name: 'history',
            component: () => import('@/views/history/index.vue'),
        },
        {
            path: '/dataset',
            name: 'dataset',
            component: () => import('@/views/dataset/index.vue'),
        },
        {
            path: '/tool',
            name: 'tool',
            component: () => import('@/views/tool/index.vue'),
        }
    ],
})

export default router