const promisify = function (func) {
  return function (param={}) {
    return new Promise((resolve, reject)=>{
      param.success = (res) => {
        resolve(res)
      }
      param.fail = (err) => {
        reject(err)
      }
      func(param)
    })
  }
}

export default promisify
