import Vue from 'vue'
import root from './root.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
new Vue({ // eslint-disable-line no-new
  el: '#root',
  render: h => h(root)
})
