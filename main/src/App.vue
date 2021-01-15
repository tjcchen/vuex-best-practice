<template>
  <div id="app">
    <div>{{ greeting }} : {{ $store.state.userInfo.email }}</div>
    <div>
      cart: {{ $store.state.cart.module }}
    </div>
    <div>
      products: {{ $store.state.products.module }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
