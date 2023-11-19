import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: App}
  ]

}
)


const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin)

app.mount('#app')
