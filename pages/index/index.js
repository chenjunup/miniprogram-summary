import Http from '../../utils/http'
import promisify from '../../utils/wxPromisify'
const http = new Http()
const getSystemInfo = promisify(wx.getSystemInfo)

Page({
  data: {
    
  },
  onShow () {
    getSystemInfo().then(res=>console.log(res))
    http.get('v1/book/hot_list').then(res=>{
      console.log(res)
    }).catch((err)=>{

    })
    
  }
})
