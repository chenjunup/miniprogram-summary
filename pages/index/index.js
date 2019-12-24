import Http from '../../utils/http'
const http = new Http()

Page({
  data: {
    
  },
  onShow () {
    http.request({url:'api/todo/1', method:'DELETE'}).then(res=>{
      console.log(res)
      console.log('1111')
    }).catch(()=>{
      console.log('2222')
    })
    
  }
})
