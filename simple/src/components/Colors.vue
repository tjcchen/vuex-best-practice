<template>
  <div class="items-box">
    <div class="item" v-for="item in colors" v-bind:key="item.id">
      color: {{ item.hex }} - timestamp: {{ item.timestamp }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Colors',
  computed: {
    colors() {
      return this.$store.getters.getColors
    }
  }
};
</script>

<style></style>