import Home from './components/pages/Home.vue';
import DefaultPage from './components/pages/DefaultPage.vue';
import VueRouter from 'vue-router';


const ROUTES = [
  { path: '/home', component: Home },
  { path: '/default', component: DefaultPage },
];

export function createRouter() {
  return new VueRouter({ routes: ROUTES});
}
