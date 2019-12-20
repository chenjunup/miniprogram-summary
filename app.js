//app.js
App({
  async onLaunch () {
  // console.log('app onLaunch 1')
  // const res = await this.login()
  // console.log(res)
  // console.log('app onLaunch 2')
   const button = wx.getMenuButtonBoundingClientRect()
   const systemInfo = wx.getSystemInfoSync()
   console.log(button, systemInfo)
  },
  onShow () {
    // console.log('app onShow 1')
    // console.log('app onShow 2')
  },
  login () {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('login')
      }, 2000)
    })
  },
  globalData: {
    token: ''
  }
})