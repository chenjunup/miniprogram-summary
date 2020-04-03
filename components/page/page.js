import navBeh from '../../behaviors/navBeh'

Component({
  options: {
    multipSlots: true
  },
  behaviors: [navBeh],
  properties: {
    title: String
  },
  externalClasses: ['page', 'title-bar', 'title-act', 'title-txt', 'title-placeholder'],

  data: {

  },

  methods: {

  }
})
