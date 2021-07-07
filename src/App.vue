<template>
  <img id="logo" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="initiation vue.js par youtube"/>
  <nav>
    <router-link to='/'>Acceuil</router-link>
    <router-link to='/about'>A propos</router-link>
    <router-view />
  </nav>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

#logo {
  width: 80px;
}
</style>
