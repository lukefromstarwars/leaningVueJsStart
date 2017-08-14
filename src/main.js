import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";

Vue.component("app-server-status", Home);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
