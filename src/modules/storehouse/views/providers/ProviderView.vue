<template>
  <div class="main">
    <h5 class="mt20" v-if="provider.id">Edit Provider</h5>
    <h5 class="mt20" v-else>Add Provider</h5>
    <hr>

    <label for="cif" class="form-label">CIF</label>
    <input type="text" v-model="provider.cif" class="form-control inline" placeholder="CIF"/>    

    <div class="mt20">

      <label for="name" class="form-label">Provider name</label>
      <input type="text" v-model="provider.name" @keypress.enter="save" class="form-control inline" placeholder="Provider name"/>

    </div>

    <button
      type="button"
      @click="save"
      class="btn btn-primary btn-lg btn-fab"
      title="Save provider"
    >
      <i class="fa fa-save"></i>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Provider View",

    props: {
        id: {
            type: String,
        }
    },

    data() {
        return {
            provider: {
                cif: "",
                name: "",
            },
        };
    },

    components: {},

    computed: {           
        ...mapGetters("providers", ["getProviderById"]),
    },

    methods: {
        ...mapActions("providers", ["createProvider", "updateProvider"]),

        loadProvider() {
            const provider = this.getProviderById( this.id )
            if( provider ) {
                this.provider = provider
            }
        },

        async save() {
            if (this.provider.id) {
                await this.updateProvider(this.provider);
            } else {
                await this.createProvider(this.provider);
            }          

            this.$router.push({ name: "providers" });
        },
    },

    created() {
        this.loadProvider()
    },

    // watch id...if you reload the page or access to another id after "created()"..provider will not be show
    watch: {
        id() {
            console.log(this.id)
            this.loadProvider()
        }
    }
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
