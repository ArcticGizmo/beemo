import Home from './components/pages/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

// Icons
import ControllerIcon from './components/icons/Controller.vue';

// Pages
import DefaultPage from './components/pages/DefaultPage.vue';
import IconPage from './components/pages/icons/IconPage.vue';

// games
import GamesHome from './components/pages/games/GamesHome.vue';
import TickTackToe from './components/pages/games/tick_tack_toe/TickTackToe.vue';

Vue.use(VueRouter);

const ROUTES = [
  { path: '*', redirect: '/icons' },
  { name: 'Home', path: '/home', component: Home },
  { name: 'Icons', path: '/icons', component: IconPage },
  { name: 'Sport', path: '/sport', component: Home },
  { name: 'Default Page', path: '/default', component: DefaultPage },
  {
    name: 'Games',
    path: '/games',
    component: GamesHome,
    icon: ControllerIcon,
    children: [
      {
        name: 'Tick-Tack-Toe',
        path: 'tick_tack_toe',
        component: TickTackToe,
      },
      {
        name: 'Squares',
        path: 'squares',
        component: DefaultPage,
      },
    ],
  },
];

export function createRouter() {
  return new VueRouter({ routes: ROUTES });
}
