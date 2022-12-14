import Vue from 'vue';
import Vuex from 'vuex';
import news from '@/store/modules/news';
import weather from '@/store/modules/weather';
import tickets from '@/store/modules/tickets';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    news,
    weather,
    tickets,
  },
});
