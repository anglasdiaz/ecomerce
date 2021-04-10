import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormView from '../views/FormView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import PayPage from '../views/PayPage.vue'
import DetailBuy from '../views/DetailBuy.vue'
import firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/curso/:id',
    name: 'Curso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Curso')
  },
  {
    path:'/formview',
    name:'Formview',
    component:FormView
  },
  {
    path:'/paypage',
    name:'PayPage',
    component:PayPage,
    meta:{
      requireAuth:true
    }
  }
  ,
  {
    path:'/detailBuy',
    name:'DetailBuy',
    component:DetailBuy,
    meta:{
      requireAuth:true
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  let user= firebase.auth().currentUser;
  let authentified = to.matched.some(record=>record.meta.requireAuth);
 
  if(authentified && !user){
    next('/')
  }else{
    next()
  }
 })


export default router
