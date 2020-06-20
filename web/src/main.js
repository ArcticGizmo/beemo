import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router.js';
import { API } from './api';

export function createApp() {
  const isDev = process.env.NODE_ENV === 'development';
  let hostname = '';

  if (isDev) {
    hostname = 'http://10.1.1.162:4000';
  }

  // configure vue prototypes
  Vue.prototype.$hostname = hostname;
  Vue.prototype.$eventBus = new Vue();
  Vue.prototype.$api = new API(hostname);

  // create the router
  const router = createRouter();

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
}
