import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/init.css'
import './plugins/vant.js'
//导入组件
import Login from './components/Login.vue'
Vue.component('login', Login)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
