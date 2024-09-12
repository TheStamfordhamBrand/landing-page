import { createApp } from 'vue'
import './style.css'

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';      // Import AOS
import router from './router'

const app = createApp(App)

import App from './App.vue'

AOS.init();

app.use(router)
app.mount('#app')
document.title = 'Sports Continent'
