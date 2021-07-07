import { createApp } from 'vue'
import App from './App.vue'

// ici on racorde les router a l app
import router from './router';

createApp(App).use(router).mount('#app')
