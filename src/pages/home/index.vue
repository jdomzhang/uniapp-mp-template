<template>
  <div>
    <div>
      <span>uniapp模版 - 首页</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pageCommon from '@/mixins/page.common'
import { apiRoot } from '@/api/apiroot.autogen'

export default {
  mixins: [pageCommon],
  data() {
    return {}
  },
  computed: {
    ...mapState({
      user: (x) => x.root.user,
      site: (x) => x.root.site
    })
  },
  async onPullDownRefresh() {
    await this.fetchData()
    wx.stopPullDownRefresh()
  },
  methods: {
    async onUserLoaded(user) {
      this.log('[onUserLoaded]', 'user loaded on page:', user)

      await this.fetchData()
    },

    async fetchData() {}
  }
}
</script>

<style lang="stylus" scoped>
/deep/ .status-bar {
  color: white;
}
</style>