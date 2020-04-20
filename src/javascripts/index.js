import './apps/collected';
import './apps/copy';

import Vue from 'vue'
import App from './App.vue';

import router from './router';

const APP_WRAPPER = '.js-app-wrapper';

new Vue({
  el: APP_WRAPPER,
  router,
  render: h => h(App),
});
