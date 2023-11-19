import { createRouter, createWebHistory } from 'vue-router'
import { ElNotification } from 'element-plus'


import { useCounterStore } from '@/stores/counter'


// Lazy load components
const Home = () => import('../components/Home.vue')
const Calculator = () => import('../components/Calculator.vue')
const ResultNonReverse = () => import('../components/ResultNonReverse.vue')
const ResultReverse = () => import('../components/ResultReverse.vue')

const NonReverseMath = () => import('../views/NonReverseMath.vue')
const ReverseMath = () => import('../views/ReverseMath.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')


// Define like middleware
const requireValue = (to, from, next) => {
  const counterStore = useCounterStore() // the router is installed and pinia will be installed too

  if (!counterStore.inputA && !counterStore.inputB) {
    router.push('/')
    ElNotification({
      title: 'Thiếu dữ liệu',
      message: 'Chuyển về trang chủ',
      type: `error`,
    })
  } else {
    next()
  }
}


const pageError = (to, from, next) => {
  router.push('/')
  ElNotification({
    title: 'Đã xảy ra lỗi',
    message: 'Trang không tìm thấy',
    type: `error`,
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/optional', name: 'optional', component: Calculator },
    { path: '/non-reverse/:id', name: 'non-reverse', component: NonReverseMath, beforeEnter: [requireValue] },
    { path: '/reverse/:id', name: 'reverse', component: ReverseMath, beforeEnter: [requireValue] },
    { path: '/result-non-reverse', name: 'result-non-reverse', component: ResultNonReverse, beforeEnter: [requireValue] },
    { path: '/result-reverse', name: 'result-reverse', component: ResultReverse, beforeEnter: [requireValue] },
     
    { path: '/:pathMatch(.*)*',  component: PageNotFound, beforeEnter: [pageError]},  // Navigate 404 if not found any path
  ]
})

export default router
