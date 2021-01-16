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
      products: 'cart/cartProducts'
    })
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