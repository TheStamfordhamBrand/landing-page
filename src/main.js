import { createApp } from 'vue'
import './style.css'

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';      // Import AOS



import App from './App.vue'

AOS.init();

createApp(App).mount('#app')
