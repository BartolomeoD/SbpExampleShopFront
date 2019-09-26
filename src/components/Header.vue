<template>
  <div class="card-header">{{shopName}}</div>
</template>
  
<script>
export default {
  name: "Header",
  props: {
    shopName: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
