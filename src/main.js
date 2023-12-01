import Vue from 'vue'
import App from './App.vue'
import router from './router'
import waterMark from './directives/waterMark.js'
import bui from 'bwebui'

Vue.use(bui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
