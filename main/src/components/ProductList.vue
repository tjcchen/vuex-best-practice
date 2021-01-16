<template>
  <div class="product-list">
    <h3>{{ moduleName }}</h3>
    <div class="product-list-info">
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductList',
  // data: function() {
  //   return {
  //     module: this.$store.getters['products/getModule']
  //   }
  // },
  computed: mapState({
    moduleName: state => state.products.moduleName,
    products: state => state.products.all
  }),
  created: function() {
    // fetch data from mock API
    this.$store.dispatch('products/getAllProducts');
  }
}
</script>

<style scoped>

</style>