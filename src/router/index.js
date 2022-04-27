// 引入vue
import Vue from 'vue'
// 引入vue-router
import Router from 'vue-router'
// 引用HomePage页面
import HomePage from '@/components/HomePage'
import WareHouse from '@/components/WareHouse'

// Vue全局使用Router
Vue.use(Router)

export default new Router({
  // 用数组的方式配置路由
  routes: [
    // 每一个链接是一个对象
    {
      // 链接路径
      path: '/',
      // 路由名称
      name: 'HomePage',
      // 对应的组件模板
      component: HomePage
    },
    {path: '/warehouse',
      name: 'WareHouse',
      component: WareHouse
    }
  ]
})
