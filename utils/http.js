import { baseUrl } from '../config'

const tips = {
  // 默认错误
  1: '网络错误',
  // 具体自定义的业务错误码
  3000: '不存在'
}

const _showError = (data) => {
  let { error, msg } = data
  let title;
  if (!Object.keys(tips).includes(error)) {
    error = 1
  }
  title = tips[error]
  if (msg) title = msg
  wx.showToast({
    title,
    duration: 2000,
    image: '/images/warn.png'
  })
}
export const request = ({url, data={}, setUpUrl, method='GET'}, noRefetch=false) => {
  if (!setUpUrl) url = baseUrl + url
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        const statusCode = res.statusCode
        if (statusCode >= 200 && statusCode < 310) {
          if (res.data.msg) {
            _showError(res.data)
          }
          resolve(res.data.data)
        } else if (statusCode === 401) {
          if (!noRefetch) {
            
          }
        } else {
          reject(null)
          _showError()
        }
      },
      fail: (err) => {
        reject(err.message)
        _showError()
      }
    })
  })
}

export const get = (url) => {
  return request({url})
}
export const post = (url,data) => {
  return request({url, data, method:'POST'})
}

class HTTP {
  constructor ({prefix}={}) {
    this.prefix = prefix
  }
  request({url, data={}, method='GET'}) {
    if (this.prefix) url = this.prefix + url
    return request({url, data, method})
  }
  get (url) {
    return this.request({url})
  }
  post (url, data) {
    return this.request({url, data, method:'POST'})
  }
}

export default HTTP
