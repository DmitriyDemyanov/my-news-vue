export default {
  namespaced: true,
  state: {
    users : [],
  },
  getters: {
    usersList({ users }) {
      return users;
    }
  },
  mutations: {
    SAVE_USER(state, user) {
      state.users.push(user);
    }
  },
  actions: {
    addUser({ commit }, user) {
      commit('SAVE_USER', user);
    }
  },
};