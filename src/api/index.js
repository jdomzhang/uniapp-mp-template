import fetch from './fetch'

export const getVersion = async () => fetch(`/userdata/weapp/res/version.json`)

export const sayHello = async () => fetch(`/api/v1/hello`)

export const login = async (code) => fetch(`/api/v1/mp/wechat/login`, { code })

export const getWXPhoneNumber = async (detail) =>
  fetch(`/api/v1/mp/wechat/getphonenumber`, detail, 'POST')

export const getWXUserInfo = async (detail) =>
  fetch(`/api/v1/mp/wechat/getuserinfo`, detail, 'POST')

export const storeWXFormID = async (formID) =>
  fetch(`/api/v1/mp/wechat/storeformid`, { formID }, 'POST')

export const getCompanySites = async (companyID) =>
  fetch(`/api/v1/mp/company/${companyID}/sites`)
