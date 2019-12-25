import Http from '../../utils/http'
import promisify from '../../utils/wxPromisify'

const http = new Http()
const getSystemInfo = promisify(wx.getSystemInfo)

Component({
  properties: {

  },

  data: {

  },
  pageLifetimes: {
    async show () {
      const userInfo = await this.login()
      console.log({userInfo})
      console.log('111111')
    }
  },

  methods: {
    login () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('login user Info')
        }, 1000)
      })
    }
  }
})
