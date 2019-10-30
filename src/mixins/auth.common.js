export default {
  methods: {
    async checkUserAuth() {
      this.log('checkUserAuth...')

      // check user setting
      let hasUserAuthorized = false

      try {
        let result = await wx.pro.getSetting()
        this.log('getSetting', result)
        hasUserAuthorized = !!result.authSetting['scope.userInfo']
      } catch (e) {
        this.log('getSetting error', e)
      }

      // set has user authorized
      this.log('hasUserAuthorized:', hasUserAuthorized)

      return hasUserAuthorized
    }
  }
}
