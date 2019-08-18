<template>
  <div id="app">
    <CNavbar />
    <main class="Main">
      <div class="container">
        <CBreadcrumb />
        <CNavigation />
        <router-view />
      </div>
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
