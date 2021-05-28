import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { Point } from '@topology/core'
import store from './store'

window.Point = Point

Vue.config.productionTip = false
Vue.use(ElementUI,{
  size:'small'
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
