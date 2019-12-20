//app.js
App({
  onLaunch () {
    const button = wx.getMenuButtonBoundingClientRect()
    const systemInfo = wx.getSystemInfoSync()
    console.log(button, systemInfo)
    const deviceInfo = {
      statusBarHeight: systemInfo.statusBarHeight,
      button
    }
    this.globalData.deviceInfo = deviceInfo
  },
  onShow () {},
  globalData: {}
})