import VueRouter from 'vue-router'

// 导入对应的路由组件
import Home from './views/Home.vue'
import Member from './views/Member.vue'
import Cart from './views/Cart.vue'
import Search from './views/Search.vue'

// 3. 创建路由对象
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
