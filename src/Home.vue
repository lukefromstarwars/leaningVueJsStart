<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <app-server-status v-for="server in 10">
        </app-server-status>
      </li>
    </ul>

  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
