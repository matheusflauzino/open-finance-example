<template>
  <layout-basic>
    <div slot="content">
      <b-modal id="myModal">
        <ul
          v-for="item in availableInstitutions"
          class="list-group"
          :key="item.id"
        >
          <li class="list-group-item">
            <button
              class="btn btn-sm"
              href="#"
              v-b-modal="'myModal'"
              @click="selectBank(item)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
        <template #modal-footer="{}"> </template>
      </b-modal>
      <div class="row">
        <div class="col-md-12 mx-3 mb-4">
          <h1>Checkout</h1>
          <div class="card my-3">
            <div v-if="!openBankingFlow" class="col-md-6 my-3">
              <h4>Escolher meio de pagamento</h4>
              <b-button block variant="primary">Cartão de crédito</b-button>
              <b-button block variant="primary">Boleto bancário</b-button>
              <b-button @click="start()" block variant="primary"
                >Pix via Open Banking</b-button
              >
            </div>
            <div v-if="openBankingFlow" class="col-md-6 my-3">
              <h4>Escolher instituição do pagamento</h4>
              <b-button v-b-modal="'myModal'" block variant="primary"
                >Listar instituições</b-button
              >
              <b-button block @click="back()">Voltar</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/Basic.vue";
import { mapGetters } from "vuex";
import financialInstitutionsService from "../services/financial-institutions";

export default {
  name: "CheckoutPage",
  components: {
    LayoutBasic,
  },

  data() {
    return {
      openBankingFlow: false,
      availableInstitutions: [],
    };
  },

  computed: {
    ...mapGetters(["itemsCart", "amountCart"]),
  },

  methods: {
    start() {
      this.openBankingFlow = true;
    },
    back() {
      this.openBankingFlow = false;
    },
  },

  async mounted() {
    this.availableInstitutions = await financialInstitutionsService.all();
  },
};
</script>

<style></style>
