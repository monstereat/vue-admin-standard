<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>这是按钮</div>
    <demo></demo>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import demo from 'bwebui/lib/demo'
export default {
  name: 'home-view',
  components: {
    HelloWorld
    // demo
  }
}
</script>
