import Vue from "vue";
import App from "./App.vue";

Vue.directive("hili", {
  bind (el, binding, vnode) {
    // el.style.backgroundColor = "green";
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 1000;
    }
    setTimeout(function() {
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
