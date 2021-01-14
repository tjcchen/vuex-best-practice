import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue'

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    loadingStatus: 'notLoading',
    todos: []
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    fetchTodos(context) {
      context.commit('SET_LOADING_STATUS', 'loading...');

      axios.get('http://www.colr.org/json/colors/random/7').then(response => {
        context.commit('SET_LOADING_STATUS', 'notLoading');
        context.commit('SET_TODOS', response.data.colors);
      });
    }
  },
  getters: {
    getTodos(state) {
      return state.todos.filter(todo => todo.hex !== '');
    }
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
