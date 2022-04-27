// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
// 通过npm引入vue，并实例化对象

new Vue({
  el: '#app',
  components: { App },
  // 先引入App.vue组件，之后在components中注册
  template: '<App/>',
  router,
  render: h => h(App)
}).$mount('#app')
