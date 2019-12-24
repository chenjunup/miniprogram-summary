import { baseUrl } from '../config'

class Http {
  request ({url, data={}, method='GET'}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data,
        method,
        header: {
          'Content-Type': 'application/json'
        },
        success: (res) => {
          res.data.success = false
          if (res.data.success) {
            resolve(res.data.data)
          }
          else {
            reject()
            wx.showToast({
              title: '出现了一个错误',
              icon: 'none'
            })
          }
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
  get (url) {
    return this.request({url})
  }
  post (url, data) {
    return this.request({url, data, method:'POST'})
  }
}

export default Http