<template>
  <div class="product-list">
    <h3>{{ module }}</h3>
    <div class="product-list-info">
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }} - {{ product.inventory }}
  
          <button :disabled="!product.inventory" @click="addToCart(product)">
            Add To Shopping Cart
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductList',
  computed: mapState({
    module: state => state.products.module,
    products: state => state.products.all
  }),
  methods: {
    addToCart: function(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    }
  },
  created: function() {
    this.$store.dispatch('products/getAllProducts'); // fetch data from mock API
  },
  // data: function() {
  //   return {
  //     module: this.$store.getters['products/module']
  //   }
  // },
}
</script>

<style scoped>

</style>