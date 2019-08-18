const state = {
  companies: [
    {
      id: 'microsoft',
      name: 'Microsoft',
      location: 'Redmond, WA, USA',
      description:
        'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Ourmission is Groundes in both the world in which we live and the future we strive to create.',
      similarTo: ['aws', 'oracle']
    },
    {
      id: 'aws',
      name: 'Amazon Web Services (AWS)'
    },
    {
      id: 'oracle',
      name: 'Oracle'
    },
    {
      id: 'google-cloud',
      name: 'Google Cloud Platform'
    },
    {
      id: 'CenturyLink CDN',
      name: 'century-link-cdn'
    }
  ]
}
const getters = {
  getCompanyDataById: ({ companies }) => id => {
    return companies.find(e => e.id === id)
  },
  getCompanyNameById: ({ companies }) => id => {
    return companies.find(e => e.id === id).name
  }
}

export default {
  namespaced: true,
  state,
  getters
}
