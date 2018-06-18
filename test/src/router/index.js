import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/Page1'
import VueIdb from 'vue-idb'

Vue.use(VueIdb)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    }
  ]
})
