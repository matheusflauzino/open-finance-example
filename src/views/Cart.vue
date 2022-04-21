<template>
  <layout-basic>
    <div slot="content">
      <div class="row">
        <div class="col-md-12 mx-3 mb-4">
          <h1>Seu Carrinho</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Produto</th>
                <th scope="col"></th>
                <th scope="col" class="text-center">Qtd</th>
                <th scope="col" class="text-right">Valor</th>
                <th scope="col" class="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in itemsCart" :key="item.id">
                <td class="align-middle">{{ item.name }}</td>
                <td class="align-middle">
                  <img :src="item.image" width="120em" class="img-thumbnail" />
                </td>
                <td class="align-middle text-center">
                  {{ item.amount }}
                </td>
                <td class="align-middle text-right">
                  {{ item.value.toFixed(2) }}
                </td>
                <td class="align-middle text-right">
                  {{ item.amount * item.value.toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">Seu pedido</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Tipo de Pagamento:</strong> PIX
              </li>
            </ul>
          </div>

          <div
            class="p-3 mb-2 mt-4 font-weight-bold rounded"
            style="background-color: rgba(0, 0, 0, 0.03)"
          >
            Total:
            <div class="float-sm-right">R$ {{ total }}</div>
          </div>

          <b-button href="/checkout" block variant="primary"
            >Processar Pagamento</b-button
          >

          <div class="mt-2 text-center">
            <b-link to="/" class="text-muted">
              <i class="fa fa-arrow-left" aria-hidden="true"></i> Continuar
              comprando
            </b-link>
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
import { mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
    LayoutBasic,
  },

  data() {
    return {
      products: [],
    };
  },

  computed: {
    ...mapGetters(["itemsCart"]),

    total() {
      return this.itemsCart.reduce(
        (accumulator, item) => accumulator + item.value,
        0
      );
    },
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
