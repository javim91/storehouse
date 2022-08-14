<template>
  <div class="main">

    <h5 class="mt20">Providers</h5>
    <hr>

    <div class="col-sm-12 col-md-12 col-lg-4 mt20">
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
          <th width="20%">CIF</th>
          <th width="60%">Nombre</th>
          <th width="20%" class="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in providersByTerm" v-bind:key="item.id" class="align-middle">
          <td>{{ item.cif }}</td>
          <td>{{ item.name }}</td>
          <td class="text-center">
            <button type="button" class="btn btn-warning mr5" @click="edit(item)"><i class="fa fa-edit"></i></button>
            <button type="button" class="btn btn-danger" @click="remove(item)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <button type="button" @click="add" class="btn btn-primary btn-lg btn-fab" title="New provider"><i class="fa fa-plus"></i></button>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "Providers",

  data() {
    return {
      term: "",
    };
  },

  components: {},

  methods: {
    ...mapActions("providers", ["loadProviders", "deleteProvider"]),

    add() {
      this.$router.push({ name: 'add-provider' })
    },

    edit(item) {
      this.$router.push({ name: 'edit-provider', params: {'id':item.id } })
    },

    async remove(item) {
      Swal.fire({
        title: `Remove ${item.name}?`,
        text: "Provider will be removed",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          await this.deleteProvider(item.id)
          this.loadProviders();
          Swal.fire(
            'Removed!',
            'Your provider has been removed.',
            'success'
          )
        }
      })
    }

  },

  computed: {
    ...mapGetters("providers", ["getProviders"]),

    providersByTerm() {
      const arr = this.getProviders;
      const term = this.term;

      const res = arr.filter(obj => Object.values(obj).some(val => val.toString().toLowerCase().includes(term.toLowerCase())));
      return res;
    },
  },

  created() {
    this.loadProviders();
  },
};
</script>

<style scoped>


</style>
