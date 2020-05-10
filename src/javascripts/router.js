import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from 'pages/Index/Index.vue';
import Galleries from 'pages/Galleries/Index.vue';
import About from 'pages/About/Index.vue';
import Confirmation from 'pages/Confirmation/Index.vue';
import Mutations from 'pages/Mutations/Index.vue';
import MutationItem from 'pages/Mutations/MutationItem.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/galeri', component: Galleries },
  { path: '/tentang', component: About },
  { path: '/(about)', redirect: '/tentang' },
  { path: '/mutasi', component: Mutations },
  { path: '/mutasi/:id', component: MutationItem },
  { path: '/konfirmasi', component: Confirmation },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
