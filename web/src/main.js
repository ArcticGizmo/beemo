import Vue from 'vue';
import App from './App.vue';
import { API } from './api';

export function createApp() {
  const isDev = process.env.NODE_ENV === 'development';
  let hostname = '';

  if (isDev) {
    hostname = 'http://10.1.1.162:4000';
  }

  // configure vue prototypes
  Vue.prototype.$hostname = hostname;
  // @ts-ignore
  Vue.prototype.$eventBus = new Vue(hostname);
  Vue.prototype.$api = new API();

  new Vue({
    render: h => h(App),
  }).$mount('#app');
}
