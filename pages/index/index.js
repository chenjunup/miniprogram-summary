//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad () {
    console.log(wx.getSystemInfoSync())
  }
})
