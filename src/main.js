import router from "./router";
import Vue from "vue";
import App from "./App.vue";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/index.css";
import axios from "axios";
Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://localhost:3000";
new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
