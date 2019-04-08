<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <router-link tag="li" :to="{name: 'home', query:{userid: 100}}"><a>Home</a></router-link>
      -
      <router-link tag="li" :to="{name: 'helloworld', params:{pid: 100}}"><a>Helloworld</a></router-link>
    </ul>

    <Parent></Parent>

    <router-view></router-view>
  </div>
</template>

<script>
import Parent from "./components/Parent.vue";

export default {
  name: 'app',
  components: {
    Parent
  },

  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app {
  background-color: yellow;
  padding: 10px;
}

#parent {
  background-color: green;
  width: 400px;
  height: 300px;
  position: relative;
  padding-left: 5px;
}

h1 {
  margin-top: 0;
}

.child {
  width: 150px;
  height: 150px;
  position:absolute;
  top: 60px;
  padding: 0px 5px 5px;
}

.childA {
  background-color: red;
  left: 20px;
}

.childB {
  background-color: blue;
  left: 190px;
}


</style>
