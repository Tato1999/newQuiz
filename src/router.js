import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/main.vue"
import Type from "./pages/select.vue"
import Physic from "./pages/physic.vue"
import Login from "./pages/login.vue"
import Register from "./pages/register"
import Stage from "./pages/stage"
import Profile from "./pages/profile"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/type",
    name: "Type",
    component: Type,
  },
  {
    path: "/physic",
    name: "Physic",
    component: Physic,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/stage",
    name: "Stage",
    component: Stage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;