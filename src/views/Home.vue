<template>
  <layout-basic>
    <div slot="content">
      <div class="row">
        <div class="col-md-12 mx-3 mb-4">
          <h1>Produtos</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="item in products" :key="item.id">
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Sale badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
                v-if="item.sale"
              >
                Sale
              </div>
              <!-- Product image-->
              <img class="card-img-top" :src="item.image" alt="..." />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">{{ item.name }}</h5>
                  <!-- Product reviews-->
                  <div
                    class="
                      d-flex
                      justify-content-center
                      small
                      text-warning
                      mb-2
                    "
                  >
                    <i
                      class="fa fa-star"
                      aria-hidden="true"
                      v-for="star in item.stars"
                      v-bind:key="star"
                    ></i>
                  </div>
                  <!-- Product price-->
                  R$ {{ item.value }}
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a
                    class="btn btn-outline-dark mt-auto"
                    href="#"
                    @click="add(item)"
                    >Adicionar</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/Basic.vue";
import productService from "../services/products";
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  components: {
    LayoutBasic,
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    ...mapActions(["addItemToCart"]),

    add(item) {
      if (confirm("Deseja realmente adicionar o item ao carrinho?")) {
        this.addItemToCart(item);
      }
    },
  },

  mounted() {
    this.products = productService.all();
  },
};
</script>