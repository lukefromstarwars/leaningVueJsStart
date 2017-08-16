<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'this is it'"></p>
        <p v-html="'<strong>in bold</strong>this is it'"></p>

      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-hili:background.delayed="'red'" v-hili="'green'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>

</style>
