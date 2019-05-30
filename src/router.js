import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SearchIp from './views/SearchIp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search-ip',
      name: 'search-ip',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SearchIp.vue')
    }
  ]
})
