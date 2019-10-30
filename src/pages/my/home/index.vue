<template>
  <div>
    <div class="bg-m-gray padding-lg" style="min-height: 100%">
      <div class="width-60 height-60 circled">
        <open-data type="userAvatarUrl" mode="aspectFill" />
      </div>
      <open-data type="userNickName" />
      <div
        class="flex flex-direction text-center text-gray text-xs align-center"
        style="margin-top:70rpx"
      >
        <div>版本 {{v}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import pageCommon from '@/mixins/page.common'
import { mapState } from 'vuex'

export default {
  mixins: [pageCommon],
  data() {
    return {
      residentSite: {}
    }
  },
  computed: {
    ...mapState({
      user: (x) => x.root.user
    })
  },
  async onShow() {
    await this.fetchData()
  },

  methods: {
    async fetchData() {}
  }
}
</script>
