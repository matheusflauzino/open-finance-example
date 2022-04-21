<template>
  <layout-basic>
    <div slot="content">
      <div class="row">
        <div class="col-md-12 mx-3 mb-4">
          <h1>Checkout</h1>
        </div>
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
      <div class="row"></div>
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/Basic.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "CheckoutPage",
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
  },

  methods: {
    ...mapActions(["addItemToCart"]),
  },

  mounted() {},
};
</script>
