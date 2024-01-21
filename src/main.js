import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import { MaskInput } from 'vue-3-mask';


const app = createApp(App)
app.use(ElementPlus);
app.use(createPinia())
app.use(router)
app.component('MaskInput', MaskInput);

app.mount('#app')
