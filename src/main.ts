import {createApp} from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from "@/router";
import pinia from "@/store";
import registerIcons from "@/global/register-icons";

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// createApp(App).use(router).mount('#app')


const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(registerIcons)
// app.use(ElementPlus  as any)
app.mount('#app')

