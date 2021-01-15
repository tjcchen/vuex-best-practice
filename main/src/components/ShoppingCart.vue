<template>
  <div class="shopping-cart">
    {{ module }}
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