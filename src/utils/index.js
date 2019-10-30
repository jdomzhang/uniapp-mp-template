export const formatNumber = (n) => {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/**
 * date => yyyy-MM-dd
 * @param {Date} date
 */
export function CNDate(date) {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  // console.log('typeof date', date, typeof date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

export function CNTime(date) {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join('-')
}

/**
 * 800 => 8:00
 * @param {int} value
 */
export function intToTime(value) {
  const hour = parseInt(value / 100)
  const minutes = value % 100

  return `${hour}:${minutes === 0 ? '00' : minutes}`
}

export const formatTime = (date) => {
  return `${CNDate(date)} ${CNTime(date)}`
}

export const getFullURL = (appOptions) => {
  if (!appOptions) return null
  var url = appOptions.path || ''
  var params = []
  var query = appOptions.query || {}
  for (var x in query) {
    params.push(x + '=' + query[x])
  }
  if (params.length > 0) {
    url = url + '?' + params.join('&')
  }
  if (url && !url.startsWith('/')) {
    url = `/${url}`
  }
  return url
}
