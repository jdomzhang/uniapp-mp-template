<template>
  <div class="mx-2 my-2 px-3 py-3 green white--text" @click="onClickHello">
    <div class="headline py-1">Hello Component</div>
    <div class="caption">
      API Root:
      <span v-text="apiRoot"></span>
    </div>
  </div>
</template>

<style>
</style>

<script>
import componentCommon from '@/mixins/component.common'
import { sayHello } from '@/api'

export default {
  mixins: [componentCommon],
  props: {
    value: {
      type: Object,
      deafult() {
        return {}
      }
    }
  },
  methods: {
    async onClickHello() {
      let echo = await sayHello()
      wx.showModal({
        title: `${this.apiRoot}`,
        content: `From Server: ${echo}`,
        showCancel: false
      })
    }
  }
}
</script>
