import { baseUrl } from '../config'

const tips = {
  // 默认错误
  1: '出现一个错误，请稍后重试',
  // 具体自定义的业务错误码
  3000: '不存在'
}

class Http {
  _showError (errCode) {
    if (!Object.keys(tips).includes(errCode)) {
      errCode = 1
    }
    wx.showToast({
      title: tips[errCode],
      icon: 'none',
      duration: 2000
    })
  }
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
          // http状态码 
          // 可能有很多的 api 无论请求成功与否 都返回 http 状态码 200
          // 而是通过 data 里的自定义 errCode 去判断请求成功与否
          const statusCode = res.statusCode.toString()
          if (statusCode.startsWith(2)) {
            resolve(res.data)
          }
          else {
            // 即使在顶层处理了异常 还是要把异常 抛出去
            // 不然在调用方 promise会处于< pending >状态 代码不会往下走了
            reject()
            this._showError(res.data.errCode)
          }
        },
        fail: (err) => {
          reject()
          this._showError()
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