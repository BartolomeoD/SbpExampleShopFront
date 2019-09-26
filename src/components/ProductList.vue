<template>
  <div class="card-body">
    <div class="products-list row align-items-center justify-content-around no-gutters">
      <div class="card mb-3" style="width: 18rem;" v-for="(product, index) in products"  v-bind:key="index">
        <img
          src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.description}}</p>
          <p class="card-text text-muted">{{product.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data: function() {
    return {
      products: [
        {
          name: "Навзание продукта 1",
          description: "Описание продукта",
          price: "Цена продукта"
        },
        {
          name: "Навзание продукта 1",
          description: "Описание продукта",
          price: "Цена продукта"
        },
        {
          name: "Навзание продукта 1",
          description: "Описание продукта",
          price: "Цена продукта"
        },
        {
          name: "Навзание продукта 1",
          description: "Описание продукта",
          price: "Цена продукта"
        },
        {
          name: "Навзание продукта 1",
          description: "Описание продукта",
          price: "Цена продукта"
        },
        {
          name: "Навзание продукта 1",
          description: "Описание продукта",
          price: "Цена продукта"
        }
      ]
    };
  }
};
</script>