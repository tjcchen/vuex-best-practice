<template>
  <div id="app">
    <img class="header-logo" alt="Vue logo" src="./assets/logo.png">
    <div class="status">
      {{ greeting }} {{ loadingStatus }}
    </div>
    <div class="fecth-btn">
      <button @click="fetchColors()">fetchData</button>
    </div>
    <Colors />
  </div>
</template>

<script>
// @ts-ignore
import Colors from './components/Colors';

export default {
  name: 'App',
  components: {
    Colors
  },
  data: function() {
    return {
      greeting: 'hello vuex!'
    };
  },
  methods: {
    fetchColors: function() {
      this.$store.dispatch('fetchColors');
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
