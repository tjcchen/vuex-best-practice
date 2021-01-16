import shop from '../../api/shop';
import { PRODUCTS } from '../mutation-types';

const state = {
  all: [],
  module: 'products'
};

const mutations = {
  [PRODUCTS.SET_PRODUCTS](state, products) {
    state.all = products;
  },
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, { id }) {
    const products = state.all.find(product => product.id === id);
    products.inventory--;
  }
};

const actions = {
  getAllProducts: ({ commit }) => {
    shop.getProducts(products => {
      commit(PRODUCTS.SET_PRODUCTS, products)
    });
  }
};

const getters = {
  module: state => state.module
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};