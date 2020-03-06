import navBeh from '../../behaviors/navBeh'

Component({
  behaviors: [navBeh],
  properties: {
    title: String
  },
  externalClasses: ['c-title','c-nav'],
  data: {
    button: wx.getMenuButtonBoundingClientRect(),
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight
  },

  methods: {
    onBack () {
      this.triggerEvent('back')
    },
    onHome () {
      this.triggerEvent('home')
    }
  }
})
