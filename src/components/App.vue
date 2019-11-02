//  App.vue

<template>
  <div id="app"  class='container'>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/fruits">Fruits</router-link> |
      <router-link to="/vegetables">Vegetables</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #dee1e4;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
