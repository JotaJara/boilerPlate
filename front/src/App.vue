<template>
  <div class="ppal">
    <img class="logo" src="./assets/shop.png">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from) {
      //  limpia la alerta cuando cambia de ruta
      this.clearAlert()
    }
  }
}
</script>

<style>
body{
  background-color: #e9ecef;
  padding: 2rem 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
}
</style>
