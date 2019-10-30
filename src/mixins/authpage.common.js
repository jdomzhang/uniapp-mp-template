import baseCommon from '@/mixins/base.common'
import verCommon from '@/mixins/ver.common'
import authCommon from '@/mixins/auth.common'
import loginCommon from '@/mixins/login.common'

export default {
  mixins: [baseCommon, verCommon, authCommon, loginCommon],

  methods: {},

  async beforeMount() {
    await this.checkUserLogin()
    // // check if user has agreed to use this weapp
    // // if no, redirect to auth page
    // let userAgreed = await this.checkUserAuth()
    // if (!userAgreed) {
    //   wx.reLaunch({
    //     url: `/pages/auth/main`
    //   })
    // }
  }
}
