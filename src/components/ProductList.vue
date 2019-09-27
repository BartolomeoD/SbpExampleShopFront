<template>
  <div class="card-body">
    <div class="products-list row align-items-center justify-content-around no-gutters">
      <div
        class="card mb-3"
        style="width: 18rem;"
        v-for="(product, index) in products"
        v-bind:key="index"
      >
        <img
          src="./../assets/left-boot.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.description}}</p>
          <p class="card-text text-muted">{{product.price}} rub</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "./../helpers/http";
export default {
  name: "ProductList",
  data: function() {
    return {
      products: []
    };
  },
  mounted: function() {
    http.get("/product/list").then(response => {
      this.products = response.data
    });
  }
};
</script>