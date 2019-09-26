<template>
  <div id="app">
    <div class="container">
      <div class="card">
        <Header shopName="Магазин заинтегрировавшийся С СБП" />
        <product-list/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "app",
  components: {
    Header,
    ProductList
  }
};
</script>

<style>
</style>
