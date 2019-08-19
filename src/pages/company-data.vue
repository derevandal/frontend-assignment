<template>
  <section class="Company">
    <CCard>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam.
      </span>
      <CompanyForm />
    </CCard>
  </section>
</template>
<script>
import CCard from 'Components/common/card'
import CompanyForm from 'Components/company/form'
export default {
  name: 'CompanyDataPage',
  components: {
    CCard,
    CompanyForm
  }
}
</script>
