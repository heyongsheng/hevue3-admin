import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/assets/style/normalize.css'
import directives from './directives'
import './permission'

import SvgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(directives)
  .component('svg-icon', SvgIcon)
  .mount('#app')
