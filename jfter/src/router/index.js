import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../components/Me.vue'

Vue.use(VueRouter)

  const routes = [
    {path: '/', redirect: '/home/me'},
    {path: '/home', component: Home, children: [
        {path: '/home/me', component: Me}
      ]}
  ]

const router = new VueRouter({
  routes
})

export default router
