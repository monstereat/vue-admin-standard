<template>
  <div id="app" v-watermark="{text:'绝密资料，请勿外传'}">
    <router-view />
  </div>
</template>
<script>
export default ({
  name: 'app',
  created() {
    // // 阻止f12调试
    // document.addEventListener('keydown', function(e) {
    //   if (e.key === 'F12') {
    //     e.preventDefault()
    //   }
    // })
    // // 阻止菜单右键
    // document.addEventListener('contextmenu', function(event) {
    //   event.preventDefault()
    // })
  }
})
</script>

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
