<template>
  <div class="product-list">
    {{ module }}
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