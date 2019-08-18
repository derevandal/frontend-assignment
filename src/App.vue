<template>
  <div id="app">
    <CNavbar />
    <main>
      <CBreadcrumb />
      <CNavigation />
      <router-view />
    </main>
    <CFooter />
  </div>
</template>

<script>
import CNavbar from './components/common/navbar'
import CBreadcrumb from './components/common/breadcrumb'
import CNavigation from './components/common/navigation'
import CFooter from './components/common/footer'

export default {
  name: 'App',
  components: {
    CNavbar,
    CBreadcrumb,
    CNavigation,
    CFooter
  }
}
</script>
