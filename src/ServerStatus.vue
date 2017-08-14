<template>
  <div>
    Server Status : {{status}}
    <br>
    <button class="btn btn-warning" @click="changeStatus()">Change status</button>
    <hr>
  </div>
</template>

<script>
export default {
  data: function () {
    return { status: "critical" };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid green;
}
</style>
