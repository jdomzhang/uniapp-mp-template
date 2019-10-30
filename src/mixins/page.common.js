import baseCommon from '@/mixins/base.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'

export default {
  mixins: [baseCommon, authCommon, loginCommon],

  data() {
    return {
      pageUser: {},
      hasUserAuthorized: false,
      userLoaded: false,
      customizedSharing: false
    }
  },

  computed: {
    defaultShareImage() {
      return null
      // return this.versioning(apiRoot + '/userdata/weapp/res/city/default.jpg')
    },
    defaultShareBgImage() {
      return this.formatImageURL('/userdata/weapp/res/img/sharebg.jpg')
    }
  },

  methods: {
    async onUserLoaded(user) {
      console.log('[page.common]', 'user loaded:', user)
    },

    setPageUser(user) {
      this.pageUser = user || {}
      this.hasUserAuthorized = this.app.hasUserAuthorized || false
    },

    async wait(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms)
      })
    },

    async waitingUserLoaded() {
      // wait for user is ready, timeout 10 seconds
      for (let i = 1; i < 100; i++) {
        if (getApp().globalData && getApp().globalData.user) {
          break
        }
        await this.wait(100)
      }

      const user = getApp().globalData && getApp().globalData.user
      if (user) {
        this.setPageUser(user)
        await this.onUserLoaded(user)
        this.userLoaded = true
      }
    }
  },

  onShareAppMessage() {
    return {
      path: `/pages/home/index`,
      imageUrl: this.defaultShareImage
    }
  },

  async beforeMount() {
    await this.checkUserLogin()

    if (!this.customizedSharing) {
      wx.showShareMenu({ withShareTicket: true })
    }

    // check if user has authorized
    if (this.app.hasUserAuthorized === undefined) {
      this.app.hasUserAuthorized = (await this.checkUserAuth()) === true
    }

    await this.waitingUserLoaded()
  }
}
