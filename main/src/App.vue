<template>
  <div id="app">
    <div>{{ greeting }} : {{ $store.state.userInfo.email }}</div>
    <ProductList />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  },
  data: function() {
    return {
      greeting: 'VueJS'
    };
  },
  computed: {
    products() {
      return null;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
