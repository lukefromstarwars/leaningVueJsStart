<template>
  <div>
    Server Status : {{status}}
    <hr>
    <button class="btn btn-warning" @click="changeStatus()">Change status</button>
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

<style>

</style>
