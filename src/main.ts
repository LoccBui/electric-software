import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
