<template>
  <div class="main">

    <h5 class="mt20">Products</h5>

    <div class="col-sm-12 col-md-12 col-lg-4 mb20">
      <input
        type="text"
        id="search"
        v-model="term"
        class="form-control inline"
        placeholder="Type to search..."
      />
    </div>

    <table class="table text-left expanded">
      <thead>
        <tr>
          <th width="20%">Code</th>
          <th width="30%">Name</th>
          <th width="30%">Provider</th>
          <th width="20%" class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productsByTerm" v-bind:key="item.id" class="align-middle">
          <td>{{ item.code }}</td>
          <td>{{ item.name }}</td>
          <td>{{ providerById(item.providerId) }}</td>
          <td class="text-center">
            <button type="button" class="btn btn-danger" @click="remove(item)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <button type="button" @click="add" class="btn btn-primary btn-lg btn-fab" title="New product"><i class="fa fa-plus"></i></button>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Products",

  data() {
    return {
      term: "",
      count: 0,
    };
  },

  components: {},

  methods: {
    ...mapActions("products", ["loadProducts", "deleteProduct"]),
    ...mapActions("providers", ["loadProviders"]),

    add() {
      this.$router.push({ name: 'add-product' })
    },

    async remove(item) {
      await this.deleteProduct(item.id)
      this.loadProducts();
    },

    providerById(id) {
      const provider = this.getProviderById(id)
      return provider.name
    }

  },

  computed: {
    ...mapGetters("products", ["getProducts"]),
    ...mapGetters("providers", ["getProviderById"]),

    productsByTerm() {
      const arr = this.getProducts;
      const term = this.term;

      const res = arr.filter(obj => Object.values(obj).some(val => val.toString().toLowerCase().includes(term.toLowerCase())));
      return res;
    },    

    
  },

  created() {
    this.loadProducts();
    this.loadProviders();
  },
};
</script>

<style scoped>


</style>
