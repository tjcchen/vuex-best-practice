import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue'

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    loadingStatus: 'notLoading',
    colors: []
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_COLORS(state, colors) {
      state.colors = colors;
    }
  },
  actions: {
    fetchColors(context) {
      context.commit('SET_LOADING_STATUS', 'loading...');

      axios.get('http://www.colr.org/json/colors/random/7').then(response => {
        context.commit('SET_LOADING_STATUS', 'notLoading');
        context.commit('SET_COLORS', response.data.colors);
      });
    }
  },
  getters: {
    getColors(state) {
      return state.colors.filter(color => color.hex !== '');
    }
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
