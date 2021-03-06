import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Start from '../views/Start.vue';
import Schedule from '../views/Schedule.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/start',
    name: 'Start',
    component: Start,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
