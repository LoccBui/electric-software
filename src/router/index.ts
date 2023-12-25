import { createRouter, createWebHistory } from 'vue-router'
import { ElNotification } from 'element-plus'

// Stores
import { useCounterStore } from '@/stores/counter'
import { useGuiStore } from '@/stores/gui'

// Lazy load components
const Home = () => import('../components/Home.vue')
const LandingLayout = () => import('../components/LandingLayout.vue')
const Calculator = () => import('../components/Calculator.vue')
const ResultNonReverse = () => import('../components/ResultNonReverse.vue')
const ResultReverse = () => import('../components/ResultReverse.vue')
const LandingPage = () => import('../components/LandingPage.vue')
// Views
const NonReverseMath = () => import('../views/NonReverseMath.vue')
const ReverseMath = () => import('../views/ReverseMath.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')
const Testing = () => import('../views/Testing.vue')


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

const requireTitle = (to, from, next) => {
  const guiStore = useGuiStore()

  if (!guiStore.titleTopic) {
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

// Route Configuration
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingPage },
    {
      path: '/optional',
      component: LandingLayout,
      children: [
        {
          path: '',
          component: Calculator
        },
        { path: '/inputing', component: Home},
        { path: '/non-reverse/:id', component: NonReverseMath, beforeEnter: [requireTitle]},
        { path: '/reverse/:id', component: ReverseMath, beforeEnter: [requireTitle]},
        { path: '/result-non-reverse', component: ResultNonReverse },
        { path: '/result-reverse', component: ResultReverse },
      ]
    },
    { path: '/:pathMatch(.*)*',  component: PageNotFound, beforeEnter: [pageError]},  // Navigate 404 if not found any path
  ]
})

export default router
