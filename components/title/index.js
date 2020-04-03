import navBeh from '../../behaviors/navBeh'

Component({
  options: {
    multipSlots: true
  },
  behaviors: [navBeh],
  properties: {
    title: String
  },
  externalClasses: ['title-bar', 'title-act', 'title-txt', 'title-placeholder'],
  data: {
    button: wx.getMenuButtonBoundingClientRect(),
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight
  },
  methods: {
    back () {
      if (this.properties.onBack) {
        this.properties.onBack()
        return
      }
      wx.navigateBack({
        delta: 1
      })
    },
    home () {
      if (this.properties.onHome) {
        this.properties.onHome()
        return
      }
      const pages = getCurrentPages()
      wx.navigateBack({
        delta: pages.length,
        fail: ()=>{
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
      })
    }
  }
})
