import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(jquery)
Vue.use(bootstrap)
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
