Component({
  properties: {
    title: String,
    back: {
      type: Boolean,
      value: true
    },
    home: {
      type: Boolean,
      value: true
    },
    onBack: Boolean,
    onHome: Boolean
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
