import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/js/checkSize.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/assets/css/main.scss";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
