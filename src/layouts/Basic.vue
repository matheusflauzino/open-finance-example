<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Lojinha Teste</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/cart"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i> Carrinho
              <span class="badge badge-danger" v-if="amountCart">{{
                amountCart
              }}</span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <div class="px-3 py-5">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer navbar-fixed-bottom text-center">Copy &copy;</footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LayoutBasic",
  data() {
    return {
      info: {},
    };
  },
  computed: {
    ...mapGetters(["amountCart"]),
  },
  methods: {},

  async mounted() {},
};
</script>

<style>
#logo {
  width: 150px;
}

footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
}
</style>
