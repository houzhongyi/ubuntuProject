import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import transferStation from '@/modules/demo1/transferStation'
import base from '@/modules/demo1/Layout/base'
import column_spacing from '@/modules/demo1/Layout/column_spacing'
// import table1 from '@/modules/demo1/Table/table1'
// const overView = resolve => require ( [ "../pages/academyData/over_view.vue" ], resolve );
const table1 = resolve => require (["@/modules/demo1/Table/table1.vue"], resolve)
const button1 = resolve => require (["@/modules/demo1/button/button1"], resolve)
import table2 from '@/modules/demo1/Table/table2'
const home = resolve => require (["@/modules/demo/home"], resolve)
const prizeHome = resolve => require (["@/modules/prize/home"], resolve)
const prize = resolve => require (["@/modules/prize/prize"], resolve)
const activities = resolve => require (["@/modules/prize/activities"], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      // name: 'test',
      component: test
    },
    {
      path: '/transferStation',
      component: transferStation
    },
    {
      path: '/base',
      // name: 'base',
      component: base
    },
    {
      path: '/column',
      component: column_spacing
    },
    {
      path: '/table1',
      component: table1
    },
    {
      path: "/button1",
      component: button1
    },
    {
      path: "/table2",
      component: table2
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/prize/home",
      component: prizeHome
    },
    {
      path: "/prize/prize",
      component: prize
    },
    {
      path: "/prize/activities",
      component: activities
    }
  ]
})
