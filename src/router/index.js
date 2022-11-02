import Router from "vue-router"
import App from "@/App.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
