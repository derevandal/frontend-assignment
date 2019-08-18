import Vue from 'vue'
import Router from 'vue-router'

import CompanyData from 'Pages/company-data.vue'
import CompanyPage from 'Pages/company-page.vue'

const routes = [
  {
    path: '/',
    redirect: '/company-data',
    meta: {
      breadcrumb: [
        {
          name: 'Home',
          link: '/'
        }
      ]
    }
  },
  {
    path: '/company-data',
    component: CompanyData,
    meta: {
      breadcrumb: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Company Data',
          link: 'company-data'
        }
      ]
    }
  },
  {
    path: '/company-page',
    component: CompanyPage,
    meta: {
      breadcrumb: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Company Page',
          link: 'company-page'
        }
      ]
    }
  }
]

Vue.use(Router)

export default new Router({
  routes
})
