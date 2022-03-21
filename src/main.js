import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFinalModal from 'vue-final-modal'
import VCalendar from 'v-calendar';

import 'v-calendar/dist/style.css';

const app = createApp(App)

app.use(Store)
app.use(Router)
app.use(VueAxios, axios)
app.use(VueFinalModal)
app.use(VCalendar, {})
app.mount('#app')
//variables globales
const uri ={
    local : 'http://localhost:8000'
}

//Nombre de la app
app.config.globalProperties.$app_name = 'Tkambio'
//Uri 
app.config.globalProperties.$uri = uri.local