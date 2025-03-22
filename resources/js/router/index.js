import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Teste.vue';
import ResearchCep from '../components/ResearchCep.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'ResearchCep',
    component: ResearchCep, 
  },
];

const router = createRouter({
  history: createWebHistory(), // Modo "clean" para URLs
  routes,
});

export default router;