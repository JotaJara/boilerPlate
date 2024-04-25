<template>
  <div>
      <Nav/>
      <h1>User</h1>
      <p>This page can only be accessed by Users.</p>
      <button type="button" class="btn btn-info" @click="this.logout()">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Nav
  },
  computed: {
    ...mapState('account', ['status'])
  },
  created () {
  },
  methods: {
    ...mapActions('account', ['login', 'logout'])
  }
}
</script>
