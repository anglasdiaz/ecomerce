import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormView from '../views/FormView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import PayPage from '../views/PayPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/curso',
    name: 'Curso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/curso.vue')
  },
  {
    path:'/formview',
    name:'Formview',
    component:FormView
  },
  {
    path:'/paypage',
    name:'PayPage',
    component:PayPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
