import Vue from "vue";

var cmp = {
  data: function() {
    return {
      status: "critical"
    };
  },
  template:
    "<p>servers status: {{status}} (<button type='text' @click='changeStatus'>change</button>)</p>",
  methods: {
    changeStatus: function() {
      this.status = "New Status";
    }
  }
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    "my-cmp": cmp
  }
});
new Vue({
  el: "#app2",
  components: {
    "my-cmp": cmp
  }
});
