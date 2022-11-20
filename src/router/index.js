import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "@/pages/MainPage";

import NewsPage from '@/pages/NewsPage';
import WeatherPage from '@/pages/WeatherPage';
import TicketsPage from '@/pages/TicketsPage';
import MedCenterPage from '@/pages/MedCenterPage'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/news",
    name: "my-news-page",
    component: NewsPage,
  },
  {
    path: "/weather",
    name: "my-weather-page",
    component: WeatherPage,
  },
  {
    path: "/tickets",
    name: "my-tickets-page",
    component: TicketsPage,
  },
  {
    path: "/laboratory",
    name: "my-laboratory-page",
    component: MedCenterPage,
  }


];

const router = new VueRouter({
  routes
});

export default router;
