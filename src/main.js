import Vue from "vue";

Vue.component("Hello", {
  template: "<h1>Hello component</h1>"
});

/* eslint-disable no-new */
var vm = new Vue({
  el: "#app",
  data: {
    title: "App 1",
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle("App 1 updated");
      this.$refs.myButton.innerText = "Testing";
      console.log(this.$refs);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    uppercaseTitle: function() {
      return this.title.toUpperCase();
    }
  },
  watch: {
    title: function(value) {
      alert("title changed: " + value);
    }
  }
});

// setTimeout(function() {
//   vm.title = "Changed By Time";
//   vm.show();
// }, 2000);

// var vm3 = new Vue({
//   el: "Hello",
//   template: "<h1>Hello from app3</h1>"
// });
// vm3.$mount("#app3");

/* eslint-disable no-new */
new Vue({
  el: "#app2",

  data: { title: "App2" },
  methods: {
    onChange: function() {
      vm.title = "changed from app2";
    }
  }
});
