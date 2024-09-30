import { createApp } from 'vue'
import './style.css'
import "./assets/main.css";
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from './common/configurations/vi18n.config';

const Rinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(i18n)
app.use(Rinia)
app.use(Antd)
app.mount('#app')
