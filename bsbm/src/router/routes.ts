import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },
  {
    path: '/about-us',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/About-us.vue') }],
  },
  {
    path: '/testimonials',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Testimonials.vue') }],
  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },

  {
    path: '/pricing',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Pricing.vue') }],
  },

  {
    path: '/gallery',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Gallery.vue') }],
  },

  {
    path: '/audio-visual',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Av-rental.vue') }],
  },

  {
    path: '/municipio/directorio',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/municipio/Directorio.vue') }],
  },

  {
    path: '/get-in-touch',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Contact-us.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
