import Vue from 'vue';
import App from './App.vue';

const isDev = process.env.NODE_ENV === 'development';
let hostname = '';

if (isDev) {
  hostname = 'http:/10.1.1.162:4000';
}

// configure vue prototypes
Vue.prototype.$hostname = hostname;
Vue.prototype.$eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');
