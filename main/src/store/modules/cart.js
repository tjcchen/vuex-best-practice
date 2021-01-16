import shop from '../../api/shop';
import { CART, PRODUCTS } from '../mutation-types';

const state = {
  items: [],
  checkoutStatus: null,
  module: 'shopping cart'
};

const mutations = {
  [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },
  [CART.INCREMENT_ITEM_QUANTITY](state, { id }) {
    let cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },
  [CART.SET_CART_ITEMS](state, { items }) {
    state.items = items;
  },
  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  }
};

const actions = {
  addProductToCart({ state, commit }, product) {
    commit(CART.SET_CHECKOUT_STATUS, null);

    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);

      // When shopping cart does not have this product, then put product to cart.
      // However, when we already have this product in cart, we increase cart product quantity by 1
      if (!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, { id: product.id });
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, cartItem);
      }

      // [IMPORTANT]: the 3rd parameter will help transform commit from local to global scope,
      // this is always helpful when invoking other module's mutations
      // Remove 1 item from products stock
      commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true });
    }
  },

  checkout({ state, commit }, products) {
    const savedCartItems = [...state.items];

    commit(CART.SET_CHECKOUT_STATUS, null);
    // empty cart
    commit(CART.SET_CART_ITEMS, { items: [] });

    // TODO: dummy code logic, need to refactor this part later
    shop.buyProducts(
      products,
      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'successful');
      },
      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'failed');

        // rollback to the cart saved status when failed
        commit(CART.SET_CART_ITEMS, { items: savedCartItems });
      }
    );
  }
};

const getters = {
  module: state => state.module,
  checkoutStatus: state => state.checkoutStatus,
  /**
   * rootState including: { cart: {...}, products: {...}, userInfo: {...}, website: '' }
   * 
   * @param {*} state current cart state
   * @param {*} getters getters object
   * @param {*} rootState root state
   */
  cartProducts(state, getters, rootState) {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },
  cartTotalPrice(state, getters) {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};