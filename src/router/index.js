import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/Header/Header'
import Context from '@/components/Context/Context'
import Index from '../views/Index.vue'
import bzimg from '../views/bzimg.vue'
import login from '../views/login.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/Header',
      name:"Header",
      component:Header
    },
    {
      path:'/Context',
      name:"Context",
      component:Context
    },
    {
      path:'/Index',
      name:'Index',
      component:Index
    },
    {
      path:'',
      redirect:'/Index'
    },
    {
      path:'/bzimg',
      name:'bzimg',
      component:bzimg
    },
    {
      path:'/login',
      component:login,
      name:'login',
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
