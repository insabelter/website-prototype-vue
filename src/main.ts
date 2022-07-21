import { createApp } from 'vue'
import { LibraryComponents } from '@insabelter/component-library-vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
app.use(LibraryComponents)
app.mount('#app')
