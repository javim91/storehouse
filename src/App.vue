<template>
  <router-view />
</template>

<script>
import useAuth from "./modules/auth/composables/useAuth";

export default {

  setup() {

    const { checkAuthStatus } = useAuth()

    checkAuthStatus()

  }

}

</script>


<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top:54px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
