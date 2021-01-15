import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: {
      email: 'tjcchen.engineer@gmail.com'
    },
    website: 'http://www.tjcchen.cn'
  },
  modules: {
    products,
    cart
  }
});

export default store;