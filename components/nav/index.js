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
    }
  },
  externalClasses: ['c-title','c-nav'],
  data: {
    button: wx.getMenuButtonBoundingClientRect(),
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight
  },

  methods: {
    
  }
})
