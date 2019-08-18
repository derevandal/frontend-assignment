import 'Styles/main.scss';
import Vue from 'vue'
import App from './App.vue'
import router from 'Router/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})