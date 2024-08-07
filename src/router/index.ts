import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ProductsView.vue"),
    },
   
    
    
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",

      component: () => import("../views/RegisterView.vue"),
    },
  ],
});

export default router;
