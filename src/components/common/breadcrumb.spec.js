import { mount } from '@vue/test-utils'

import CommonBreadcrumb from './breadcrumb.vue'

describe('breadcrumb with one child', () => {
  const $route = {
    meta: {
      breadcrumb: [
        {
          name: 'Home',
          link: '/'
        }
      ]
    }
  }
  const wrapper = mount(CommonBreadcrumb, {
    stubs: ['router-link'],
    mocks: {
      $route
    }
  })
  it('breadcrumb is not empty', () => {
    expect(wrapper.isEmpty()).toBe(false)
  })
  it('breadcrumb recieve route meta', () => {
    expect(wrapper.vm.breadcrumbs).toEqual($route.meta.breadcrumb)
  })
})

describe('breadcrumb with two childs', () => {
  const $route = {
    meta: {
      breadcrumb: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Company Page',
          link: '/company-page'
        }
      ]
    }
  }
  const wrapper = mount(CommonBreadcrumb, {
    stubs: ['router-link'],
    mocks: {
      $route
    }
  })
  it('breadcrumb is not empty', () => {
    expect(wrapper.isEmpty()).toBe(false)
  })
  it('breadcrumb recieve route meta', () => {
    const breadcrumbs = wrapper.vm.breadcrumbs.map(e => {
      return {
        name: e.name,
        link: e.link
      }
    })
    expect(breadcrumbs).toEqual($route.meta.breadcrumb)
  })
})
