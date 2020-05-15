import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '../views/Navigation.vue'
import Me from '../components/router/Me.vue'
import Fair from '../components/router/Fair.vue'
import Discover from '../components/router/Discover.vue'
import Homepage from '../components/router/Homepage.vue'

Vue.use(VueRouter)

  const routes = [
    {path: '/', redirect: '/me'},
    {path: '/navigation', component: Navigation, children: [
        {path: '/me', component: Me},
        {path: '/fair', component: Fair},
        {path: '/discover', component: Discover},
        {path: '/homepage', component: Homepage}
      ]}
  ]

const router = new VueRouter({
  routes
})

export default router
