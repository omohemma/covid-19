import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/scss/tailwind.scss";
import "./registerServiceWorker";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-157126873-2",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
