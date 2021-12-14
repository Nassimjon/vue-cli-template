import {createRouter,createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();


import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue'
import NotFoundPage from './pages/notFound'

const routers = createRouter({
  history: routerHistory,  
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    }
  ],
}); 

export default routers;

////  конфигурации роуа
// createWebHistory
// , createWebHashHistory


//// Ошибка 404
// {
//   path: "/:PathMatch(.*)*",
//   component: <h1 class="title"> 404 not found </h1>
// }