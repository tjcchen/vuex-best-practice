<template>
  <div id="app">
    <img class="header-logo" alt="Vue logo" src="./assets/logo.png">
    <div class="status">
      {{ greeting }} {{ loadingStatus }}
    </div>
    <div class="fecth-btn">
      <button @click="fetchTodos()">fetchData</button>
    </div>
    <div class="display-data">
      {{ todos }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data: function() {
    return {
      greeting: 'hello vuex!'
    };
  },
  methods: {
    fetchTodos: function() {
      this.$store.dispatch('fetchTodos');
    },
  },
  computed: {
    loadingStatus() {
      return this.$store.state.loadingStatus
    },
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .header-logo {
  width: 100px;
  height: 100px;
}
</style>
