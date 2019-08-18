<template>
  <ul class="Breadcrumb">
    <li
      v-for="({ name, link }, index) of breadcrumbs"
      :key="`breadcrumb-${index}`"
      class="Breadcrumb__item"
    >
      <router-link :to="link" class="Breadcrumb__link">
        {{ name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CommonBreadcrumb',
  data: () => ({
    breadcrumbs: []
  }),
  watch: {
    watch: {
      $route() {
        this.setBreadcrumbs()
      }
    }
  },
  beforeMount() {
    this.setBreadcrumbs()
  },
  methods: {
    setBreadcrumbs() {
      this.breadcrumbs = this.$route.meta.breadcrumb
    }
  }
}
</script>
