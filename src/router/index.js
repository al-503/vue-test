// ceci est la page qui va gerer les routes en javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

// les routes
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },{
      name: 'About',
      path: '/about',
      component: About,
  }
];
// le routeur
const router =createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
