import { createApp } from 'vue'
import './style.css' // <-- Tailwind CSS
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");