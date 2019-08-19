<template>
  <div id="app">
    <CNavbar />
    <main class="Main">
      <div class="container">
        <CBreadcrumb />
        <div class="Pagegrid">
          <CNavigation />
          <router-view class="Pageview" />
        </div>
      </div>
    </main>
    <CFooter />
  </div>
</template>

<script>
import CNavbar from 'Components/common/navbar'
import CBreadcrumb from 'Components/common/breadcrumb'
import CNavigation from 'Components/common/navigation'
import CFooter from 'Components/common/footer'

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
