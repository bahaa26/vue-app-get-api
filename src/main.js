import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios';
import api from './api'

const app = createApp(App)

app.mixin(api)
app.use(router)
app.config.globalProperties.axios = Axios;
app.mount('#app')
