function saveToLS(users) {
  localStorage.setItem('my-users', JSON.stringify(users));
}

function loadFromLS() {
  const users = localStorage.getItem('my-users');
  return users ? JSON.parse(users) : [];
}

export default {
  namespaced: true,
  state: {
    users : loadFromLS(),
  },
  getters: {
    usersList({ users }) {
      return users;
    }
  },
  mutations: {
    SAVE_USER(state, user) {
      state.users.push(user);
      saveToLS(state.users);
    }
  },
  actions: {
    addUser({ commit }, user) {
      commit('SAVE_USER', user);
    }
  },
};