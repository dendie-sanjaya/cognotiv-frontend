import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import BlogCreatePage from './components/BlogCreatePage.vue';
import BlogDetailPage from './components/BlogDetailPage.vue';

// Define route components
const routes = [
  { path: '/home', component: HomePage },
  { path: '/login', component: LoginPage },  
  { path: '/logout', component: LoginPage },  
  { path: '/register', component: RegisterPage },  
  { path: '/blog/create', component: BlogCreatePage },  
  { path: '/blog/detail/:id', component: BlogDetailPage },  
  { path: '/blog/update', component: HomePage },  
  { path: '/blog/delete', component: HomePage },  
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;