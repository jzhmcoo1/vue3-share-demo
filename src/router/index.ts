import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/main-layout.vue'),
    redirect: '/intro',
    children: [
      {
        path: '/todolist',
        component: () => import('@/pages/todolist.vue'),
      },
      {
        path: '/intro',
        component: () => import('@/pages/intro.vue'),
      },
    ],
  },
];
