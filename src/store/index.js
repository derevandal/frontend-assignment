import Vue from 'vue'
import Vuex from 'vuex'

import activies from './modules/activies'
import companies from './modules/companies'
import spends from './modules/spends'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    activies,
    companies,
    spends
  },
  strict: debug
})
