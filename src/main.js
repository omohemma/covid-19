import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/scss/tailwind.scss";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
