<template>
  <form class="Form" @submit.stop.prevent="onSubmit">
    <div class="Form__Group">
      <label class="Form__Label" for="company-name">Company Name</label>
      <input
        id="company-name"
        v-model="form.name"
        class="Form__Input"
        type="text"
        placeholder="e.g. Your Company Name"
      />
    </div>
    <div class="Form__Group">
      <label class="Form__Label" for="company-spend">Company Spend</label>
      <input
        id="company-spend"
        v-model="form.spend"
        class="Form__Input"
        type="tel"
        placeholder="e.g. $150,000"
      />
    </div>
    <div class="Form__Group">
      <label class="Form__Label" for="company-ability">Company Spend Ability</label>
      <input
        id="company-ability"
        v-model="form.ability"
        class="Form__Input"
        type="tel"
        placeholder="e.g. $150,000 - $330,000"
      />
    </div>
    <div class="Form__Group">
      <label class="Form__Label" for="company-notes">Notes</label>
      <textarea
        id="company-notes"
        class="Form__Input Form__Input--textarea"
        placeholder="e.g. Good Tech Company"
        readonly
        rows="6"
        :value="form.notes"
        @focus="openModal"
      />
    </div>
  </form>
</template>
<script>
export default {
  name: 'CompanyForm',
  components: {},
  data: () => ({
    form: {
      name: '',
      spend: '',
      ability: ''
    }
  }),
  methods: {
    onSubmit() {
      return
    },
    openModal() {
      console.log('lol')
    }
  }
}
</script>
