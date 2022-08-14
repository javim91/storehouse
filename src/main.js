import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueSweetalert2 from 'vue-sweetalert2';
import VueClipboard from 'vue3-clipboard'

import "bootstrap/dist/css/bootstrap.css"
import './assets/css/font-awesome-all.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/css/styles.css'

createApp(App)
    .use(store)
    .use(router)
    .use(VueSweetalert2)
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
      })
    .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
