<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
