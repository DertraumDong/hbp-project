import Vue from 'vue'
import Router from 'vue-router'
import Relation from '@/components/relation/Relation'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Relation',
      name: 'Relation',
      component: Relation
    }
  ]
})
