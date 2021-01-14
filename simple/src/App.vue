<template>
  <div id="app">
    <img class="header-logo" alt="Vue logo" src="./assets/logo.png">
    <div class="status">
      {{ greeting }} {{ loadingStatus }}
    </div>
    <div class="fecth-btn">
      <button @click="fetchTodos()">fetchData</button>
    </div>
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos';

export default {
  name: 'App',
  components: {
    Todos
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
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .header-logo {
    width: 100px;
    height: 100px;
  }

  button {
    width: 120px;
    height: 36px;
    background: pink;
    border: none;
    outline: none;
    border-radius: 3px;
  }
}
</style>
