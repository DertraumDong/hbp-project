import Vue from 'vue'
import Router from 'vue-router'
import Relation from '@/components/relation/Relation'
import RelationAdd from '@/components/relation/RelationAdd'
import Index from '@/components/Index'
import Manage from '@/components/manage/Manage'
import ManageAdd from '@/components/manage/ManageAdd'
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
    },
    {
      path: '/addRelation',
      name: 'RelationAdd',
      component: RelationAdd
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/addManage',
      name: 'ManageAdd',
      component: ManageAdd
    }
  ]
})
