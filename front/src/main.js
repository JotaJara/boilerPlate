import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { store } from './_store'
import { router } from './_helpers'
import App from './App'

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
