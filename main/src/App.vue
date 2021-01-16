<template>
  <div id="app">
    <div class="basic-info">
      <h3>basic information</h3>
      <div>{{ greeting }} : {{ email }}</div>
      <div>Website: {{ website }}</div>
    </div>
    <hr/>
    <ProductList />
    <hr/>
    <ShoppingCart />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
      greeting: 'Vuex'
    };
  },
  computed: mapState({
    email: state => state.userInfo.email,
    website: state => state.website  
  })
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
