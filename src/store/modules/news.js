import axios from '@/plugins/axios/newsApi';

export default {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {   // отдает переменные из  state
    articlesList({ list }) {
      return list;
    }
  },
  mutations: {
    SAVE_NEWS(state, list) {
      state.list = list;
    },
  },
  actions: {
    async fetchArticle({ commit }) {
      const result = await axios.get('/?country=ua&category=technology')
        .then(response => {
          console.log('000 ',response);
          return response.data;
        });
      setTimeout(() => commit('SAVE_NEWS', result.articles), 5000);
    }
  },
  modules: {},
};
