import Home from './components/pages/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultPage from './components/pages/DefaultPage.vue';
import ControllerIcon from './components/icons/Controller.vue';

Vue.use(VueRouter);

const ROUTES = [
  { path: '*', redirect: '/games/tick_tack_toe'},
  { name: 'Home', path: '/home', component: Home },
  { name: 'Sport', path: '/sport', component: Home },
  { name: 'Default Page', path: '/default', component: DefaultPage },
  {
    name: 'Games',
    path: '/games',
    component: Home,
    icon: ControllerIcon,
    children: [
      {
        name: 'Tick-Tack-Toe',
        path: 'tick_tack_toe',
        component: Home,
      },
      {
        name: 'Squares',
        path: 'squares',
        component: Home,
      },
    ],
  },
];

export function createRouter() {
  return new VueRouter({ routes: ROUTES });
}
