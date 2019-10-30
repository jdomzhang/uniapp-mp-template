<script>
import 'wx-promise-pro'
import baseCommon from '@/mixins/base.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'

export default {
  mixins: [baseCommon, authCommon, loginCommon],

  data() {
    return {
      hasHidden: false
    }
  },

  globalData: {
    statusBar: null
  },
  async onLaunch(options) {
    this.saveAppOptions(options)
    const app = this.$mp.app.globalData
  },

  async onShow() {
    await this.checkUserAuth()
    // const isUserAuthorized = await this.checkUserAuth()
    if (this.hasHidden) {
      // relogin
      this.hasHidden = false
      await this.checkUserLogin()
    }
  },

  async onHide() {
    this.hasHidden = true
  },

  methods: {
    saveAppOptions(options) {
      wx.setStorageSync('appOptions', options)
    }
  }
}
</script>


<style>
@import './style/colorui/main.css';
@import './style/colorui/icon.css';
</style>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import './style/index.styl';
</style>
