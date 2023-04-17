import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'

export const publicRouters: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',

    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: { title: '首页', icon: 'shouye', affix: true, sort: '99.99' },
      },
    ],
    meta: {
      sort: '99',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      hidden: '1',
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouters,
})

export default router
