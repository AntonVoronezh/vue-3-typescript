import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: "aaa", isAdmin: true },
      { id: 2, name: "bbb", isAdmin: false },
      { id: 3, name: "ccc", isAdmin: false },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    setUser(context, payload) {
      context.commit("setUser", payload);
    },
  },
  getters: {
    isUserLogged(state) {
      return !!state.user;
    },
    getAllUsers(state) {
      return state.users;
    },
    getUsers(state) {
      return state.users.filter((user) => !user.isAdmin);
    },
    getUser(state) {
      return state.user;
    },
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
  },
});
