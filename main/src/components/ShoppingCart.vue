<template>
  <div class="shopping-cart">
    <h3>{{ module }} order list</h3>
    <p v-show="!products.length">Please Add Product to Shopping Cart</p>
    <div class="shopping-cart-info">
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }} * {{ product.quantity }}
        </li>
      </ul>
      <p>Total: {{ total }}</p>
      <p>
        <button :disabled="!products.length" @click="checkout(products)">Submit Order</button>
      </p>
      <p v-show="checkoutStatus">Submit {{ checkoutStatus }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ShoppingCart',
  computed: {
    ...mapState({
      module: state => state.cart.module,
    }),
    ...mapGetters({
      total: 'cart/cartTotalPrice',
      products: 'cart/cartProducts',
      checkoutStatus: 'cart/checkoutStatus',
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products);
    }
  },
  // computed: {
  //   module() {
  //     return this.$store.getters['cart/getModule']
  //   }
  // },
}
</script>

<style scoped>

</style>