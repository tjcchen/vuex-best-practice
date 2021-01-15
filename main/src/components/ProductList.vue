<template>
  <div class="product-list">
    <h3>{{ module }}</h3>
    <div class="product-list-info">
      Product List
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  computed: {
    module() {
      return this.$store.state.products.module;
    }
  }
}
</script>

<style scoped>

</style>