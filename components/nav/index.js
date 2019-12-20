const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    button: app.globalData.deviceInfo.button,
    statusBarHeight: app.globalData.deviceInfo.statusBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
