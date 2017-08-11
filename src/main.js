import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    title: 'Start here',
    link: 'http://google.com',
    finishedLink: '<a href="http://www.pfcsm-opgg.be">PFCSM</a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    sayHello: function () {
      this.title = 'Pierre'
      return this.title
    },
    increaseCount: function (step, event) {
      this.counter += step
      alert(event)
    },
    decreaseCount: function () {
      this.counter--
    },
    updateCoord: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
})
