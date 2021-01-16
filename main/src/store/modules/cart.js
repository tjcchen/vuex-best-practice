import shop from '../../api/shop';
import { CART, PRODUCTS } from '../mutation-types';

const state = {
  items: [],
  checkoutStatus: null,
  module: 'shopping cart'
};

const mutations = {
  
};

const actions = {

};

const getters = {
  module: state => state.module,
  cartProducts(state, getters, rootState) {
    // state refers to current state, while rootState refers to the root state data collection,
    // including { cart: {...}, products: {...}, userInfo: {...}, website: '' }

    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);

      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};