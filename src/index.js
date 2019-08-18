import 'Styles/main.scss';
import Vue from 'vue'
import App from './App.vue'
import router from 'Router/index.js'

import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})