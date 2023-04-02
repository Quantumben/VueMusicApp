import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'

import './assets/main.css'

const app = createApp(App)

/*
This is where Pinia and router plugin 
is been registered.
It is done by using the function "use()"
*/

app.use(createPinia())
app.use(router)

app.mount('#app')