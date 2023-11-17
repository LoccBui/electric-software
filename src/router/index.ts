import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../components/Home.vue')
const Calculator = () => import('../components/Calculator.vue')


const ReverseMath = () => import('../views/ReverseMath.vue')
const NonReverseMath = () => import('../views/NonReverseMath.vue')
const Optional = () => import('../views/Optional.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/optional', name: 'optional', component: Calculator },
    { path: '/non-reverse/:id', name: 'non-reverse', component: NonReverseMath },
    // { path: '/calculate/:id', name: 'calculate', component: Calculator },
    // {
    //   path: '/',
    //   component: Home,
    //   children: [
    //     {
    //       path: '/optional',
    //       component: Calculator
    //     },
    //     {
    //       path: 'reverse/:id',
    //       component: ReverseMath
    //     },
    //     {
    //       path: 'non-reverse/:id',
    //       component: NonReverseMath
    //     },
    //   ]
    // },
    
      // Navigate 404 if not found any path
    { path: '/:pathMatch(.*)*',  component: PageNotFound},
    // {
    
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
