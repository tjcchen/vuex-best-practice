<template>
  <div class="items-box">
    <div class="item" v-for="item in todos" v-bind:key="item.id">
      color: {{ item.hex }} - timestamp: {{ item.timestamp }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  }
};
</script>

<style></style>