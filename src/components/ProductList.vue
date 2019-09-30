<template>
  <div class="card-body">
    <div class="products-list row align-items-center justify-content-around no-gutters">
      <div
        class="card mb-3"
        style="width: 18rem;"
        v-for="(product, index) in products"
        v-bind:key="index"
      >
        <img src="./../assets/left-boot.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.description}}</p>
          <div class="row align-items-center justify-content-between no-gutters">
            <div class="card-text text-muted">{{product.price}} rub</div>
            <b-button variant="success" v-on:click="buyProduct(product.id)">КУПИТЬ</b-button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="qr-code-modal"
      no-close-on-esc
      no-close-on-backdrop
      hide-header-close
      hide-footer
      title="Оплатите qr-код"
      header-class="qr-modal-header"
    >
      <h5 class="text-center"></h5>
      <div class="row justify-content-around">
        <img class="sbp-qr-code" :src="qrCodeEncoded" alt />
      </div>
      <div class="row justify-content-around">
        <b-spinner v-show="waitingPurchaise" variant="success" label="Spinning"></b-spinner>
        <div class="flex-column align-items-center justify-content-around text-center" v-show="!waitingPurchaise">
          <b-alert v-show="isSuccessPayment" variant="success" show>Успешная оплата</b-alert>
          <b-alert v-show="!isSuccessPayment" variant="error" show>Ошибка оплаты</b-alert>
          <b-button block variant="success" v-on:click="closeQrModal">Закрыть</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { http } from "./../helpers/http";
export default {
  name: "ProductList",
  data: function() {
    return {
      products: [],
      activeProductId: 0,
      waitingPurchaise: false,
      isSuccessPayment: false,
      qrCodeEncoded: "data:image/jpeg;base64,",
      qrId: ""
    };
  },
  mounted: function() {
    http.get("/product/list").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    closeQrModal: function() {
      this.$bvModal.hide("qr-code-modal");
    },
    buyProduct: function(productId) {
      this.waitingPurchaise = true;
      this.$bvModal.show("qr-code-modal");
      this.activeProductId = productId;
      http
        .post("/payment/buy", {
          productId: productId
        })
        .then(async r => {
          this.qrId = r.data.qrId;
          this.qrCodeEncoded = `data:image/jpeg;base64,${r.data.encodedQr}`;
          while (this.waitingPurchaise) {
            await http.get(`/payment/status/${this.qrId}`).then(r => {
              if (r.data.status != 1) {
                this.waitingPurchaise = false;
                if (r.data.status == 0) {
                  this.isSuccessPayment = true;
                } else {
                  this.isSuccessPayment = false;
                }
              }
            });
          }
        });
    }
  }
};
</script>

<style>
.sbp-qr-code {
  max-height: 300px;
  max-width: 300px;
}
.qr-modal-header {
  display: flex !important;
  flex-flow: row !important;
  justify-content: space-around !important;
}
</style>