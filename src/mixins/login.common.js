import 'wx-promise-pro'
import { login, getWXUserInfo } from '@/api/index'
import baseCommon from '@/mixins/base.common'

export default {
  mixins: [baseCommon],
  methods: {
    async checkUserLogin() {
      this.log('checkUserLogin...')

      var beginTick = 0
      beginTick = Date.now()

      // check should relogin flag
      // if token expired, or is visitor, set flag to relogin
      var obj = this.getJwtPayload()
      var isExpired = obj.exp < Date.now() / 1000
      var isVisitor = !!obj.visitor || !obj.uid
      var hasUser = getApp().globalData && getApp().globalData.user

      var endTick = Date.now()
      this.log('auth checking token consumed time: ', endTick - beginTick)

      if (isExpired || isVisitor || !hasUser) {
        this.log('token is expired or is visitor, should do login...........')
        await this.doLogin()
      }
    },

    async doLogin() {
      this.log('doing login...')
      var user = null

      try {
        var result = await wx.pro.login()
        user = await login(result.code)

        await this.$store.dispatch('setUser', user)

        // this.log('API login as user', user)

        // refresh user data
        // get nickname/avatar from wechat, then save the latest wechat user info to database
        // below method may throw exception
        await this.refreshUserData(user)
      } catch (e) {
        this.log('login error:', e)
      }

      return user
    },

    async refreshUserData(user) {
      this.log('refresh user info...')
      // because user has authorized, so we can call directly
      // if A user manually unauthorized it
      // then the user exists in database, but calling below method would throw exception
      var res = await wx.pro.getUserInfo()
      this.log('wx.pro.getUserInfo', res)

      if (res) {
        // sync up user info
        var data = {
          ...res,
          wechatOpenID: user.wechatOpenID,
          wechatUnionID: user.wechatUnionID
        }
        user = await getWXUserInfo(data)
        this.log('refresh user info result', user)
        await this.$store.dispatch('setUser', user)
        getApp().globalData.user = user
      }
    }
  }
}
