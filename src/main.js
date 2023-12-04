import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import bui from 'bwebui'
import App from './App.vue'
import router from './router'
import waterMark from './directives/waterMark.js'

const elint = require('@monstereat/standard/stylelint.cjs')

console.log('elint', elint)
Vue.use(bui)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.directive('watermark', waterMark.directives)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
