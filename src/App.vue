<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Me!</router-link> |
    <router-link to="/piano">Rainbow Music Notes!</router-link> |
    <router-link to="/trivia">Trivia Game!</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  animation-name: slideIn;
  animation-duration: 3s;
  
}
@keyframes slideIn {
  from {margin-left: 1000px;}
  to {margin-right: 0px;}
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: orchid;
}
</style>
