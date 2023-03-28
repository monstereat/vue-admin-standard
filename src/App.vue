<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "app",
	components: {
		HelloWorld
	}
};
</script>

<style>
#app {
	margin-top: 60px;
	text-align: center;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
