import Home from './components/pages/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultPage from './components/pages/DefaultPage.vue';

Vue.use(VueRouter);

const ROUTES = [
  { name: 'Home', path: '/home', component: Home },
  {
    name: 'Games',
    path: '/games',
    children: [
      {
        path: '/tick_tack_toe',
        component: Home,
      },
      {
        path: '/squares',
        component: Home,
      },
    ],
  },
  { name: 'Sport', path: '/sport', component: Home },
  { name: 'Default Page', path: '/default', component: DefaultPage },
];

export function createRouter() {
  return new VueRouter({ routes: ROUTES });
}
