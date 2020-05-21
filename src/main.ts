// 钩子注册必须在 Vue 之前执行
import "./hook";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "./styles/element-variables.scss";
import "./vue-require-components";
Vue.use(Element);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
