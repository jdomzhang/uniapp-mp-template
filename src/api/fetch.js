import { apiRoot, debug } from './apiroot.autogen'
var Fly = require('flyio/dist/npm/wx')

function log() {
  if (debug) {
    console.log.apply(null, arguments)
  }
}

let loadingCount = 0

const showLoading = () => {
  loadingCount++
  // console.log('show: loading count:', loadingCount)
  if (loadingCount === 1) {
    wx.showLoading({
      title: '加载中'
    })
  }
}

const hideLoading = () => {
  setTimeout(() => {
    loadingCount--
    // console.log('hide: loading count:', loadingCount)
    if (loadingCount <= 0) {
      wx.hideLoading()
    }
  }, 100)
}

export default async (x, data, method = 'GET') => {
  var url = apiRoot + x
  var fly = createFly()
  if (method === 'GET') {
    return fly.get(url, data)
  } else if (method === 'PUT') {
    return fly.put(url, data)
  } else if (method === 'DELETE') {
    return fly.delete(url, data)
  } else {
    return fly.post(url, data)
  }
}

export const createFly = () => {
  var fly = new Fly()

  fly.interceptors.request.use((request) => {
    log('>>> request', request)

    showLoading()
    var token = wx.getStorageSync('authorization')

    if (token) {
      request.headers['authorization'] = token
    }
    return request
  })

  fly.interceptors.response.use(
    (response) => {
      log('<<< response', response)

      hideLoading()
      let token = response.headers.authorization
      if (token && typeof token === 'object' && token.length > 0) {
        token = token[0]
      }
      if (token) {
        log('saving authorization', token)
        wx.setStorageSync('authorization', token)
      }
      return response.data
    },
    (err) => {
      hideLoading()
      log('!!! err', err)

      // unauthorized
      if (err.response && err.response.status === 401) {
        wx.showModal({
          title: '您的权限不够',
          showCancel: false
        })
        return
      }
      // 发生网络错误后会走到这里
      log('网络错误', JSON.stringify(err.response) || '')
      wx.showModal({
        title: '错误',
        content:
          (err.response && err.response.data && err.response.data.error) ||
          JSON.stringify(err.response && err.response.data) ||
          err.message ||
          '',
        showCancel: false
      })
    }
  )

  return fly
}
