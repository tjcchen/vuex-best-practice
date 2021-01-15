<template>
  <div class="shopping-cart">
    <h3>{{ module }}</h3>
    <div classs="shopping-cart-info">
      Shopping Cart Info
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  computed: {
    module() {
      return this.$store.state.cart.module;
    }
  }
}
</script>

<style scoped>

</style>