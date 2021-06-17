import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'

//引入样式文件
import "@/assets/scss/index.scss"

createApp(App).use(store).use(router).use(lazyPlugin, {
  loading: '@/assets/images/default.png',
  error: '@/assets/images/default.png'
}).mount('#app')
