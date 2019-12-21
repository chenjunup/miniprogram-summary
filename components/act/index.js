Component({
  /**
   * 组件的属性列表
   */
  properties: {
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

  /**
   * 组件的初始数据
   */
  data: {
    button: wx.getMenuButtonBoundingClientRect()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back () {
      if (this.properties.onBack) {
        this.triggerEvent('back')
        return
      }
      wx.navigateBack({
        data: 1
      })
    },
    home () {
      if (this.properties.onHome) {
        this.triggerEvent('home')
        return
      }
      const pages = getCurrentPages()
      wx.navigateBack({
        delta: pages.length,
        fail: ()=>{
          wx.navigateTo({
            url: '/pages/index/index'
          })
        }
      })
    }
  }
})
