import 'Styles/main.scss'
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import vmodal from 'vue-js-modal'

Vue.use(vmodal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
