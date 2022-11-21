import ticketsApi from "@/plugins/axios/ticketsApi";

export default {
  namespaced: true, //?
  state: {
    tickets: {},
  },
  getters: {
    airTickets({ tickets }) {
      return tickets;
    }
  },
  mutations: {
    SAVE_TICKETS(state, payload) {
      console.log(state);
      console.log('##########', payload.data);
      state.tickets = payload.data;
    },
  },
  actions: {
    async fetchTickets({ commit }, payload) {
      console.log('+++++++++++',payload)
      const result = await ticketsApi.get('', {
        params: {
          origin: payload.origin,
          destination: payload.destination,
          depart_date: '2022-12',
          return_date: '2022-12',
          currency: 'USD',
        }
      }).then(response => {
        console.log('$$$$$$', response);
        return response.data;
      });
      commit ('SAVE_TICKETS', result)
    }
  },
};

