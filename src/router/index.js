import Vue from 'vue'
import Router from 'vue-router'

import CompanyData from 'Pages/company-data.vue'
import CompanyPage from 'Pages/company-page.vue'

const routes = [
  { path: '/', redirect: '/company-data' },
  { path: '/company-data', component: CompanyData },
  { path: '/company-page', component: CompanyPage}
]


Vue.use(Router)

export default new Router({
  routes
})