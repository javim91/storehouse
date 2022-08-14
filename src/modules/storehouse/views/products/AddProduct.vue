<template>
  <div class="main">
    <h5 class="mt20">Add Product</h5>
    <hr>

    <label for="cif" class="form-label">Product code</label>
    <input type="text" v-model="product.code" class="form-control inline" placeholder="Product code"/>    

    <div class="mt20">

      <label for="name" class="form-label">Product name</label>
      <input type="text" v-model="product.name" @keypress.enter="save" class="form-control inline" placeholder="Product name"/>

    </div>

    <div class="mt20">

      <label for="name" class="form-label">Provider</label>
      <select class="form-control" v-model="product.providerId">
        <option value="" selected disabled>Select provider</option>
        <option v-for="provider in getProviders" v-bind:key="provider.id" :value="provider.id">
          {{ provider.name }}
        </option>
      </select>

    </div>

    <button
      type="button"
      @click="save"
      class="btn btn-primary btn-lg btn-fab"
      title="Save product"
    >
      <i class="fa fa-save"></i>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "Add Product",

  data() {
    return {
      product: {
        code: "",
        name: "",
        providerId: "",
      },
    };
  },

  components: {},

  methods: {
    ...mapActions("products", ["createProduct"]),
    ...mapActions("providers", ["loadProviders"]),

    async save() {
      if (this.product.id) {
        // Actualizar
      } else {
        await this.createProduct(this.product);

        this.$router.push({ name: "products" });
      }
    },
  },

  computed: {
    ...mapGetters("providers", ["getProviders"]),
  },

  created() {
    this.loadProviders()
  },
};
</script>

<style scoped>
.brand {
  width: 90px;
  height: 90px;
  margin: 25px auto 0px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgb(0 0 0 / 5%);
  background: #fff;
  text-align: center;
}
.image-logo {
  margin-top: 10px;
  width: 65px;
}

.inline {
  display: inline;
}
</style>
