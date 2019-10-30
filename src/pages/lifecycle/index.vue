<template>
  <div>
    <div class="mx-3 elevation-1 my-2">
      <div class="py-5 green white--text text-xs-center">
        <block v-for="(item,index) in events" :key="index">
          <div v-text="index + ': ' + item"></div>
        </block>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import pageCommon from '@/mixins/page.common'

export default {
  mixins: [pageCommon],
  data () {
    return {
      events: []
    }
  },

  onLoad () {
    this.events.push('onLoad...')
  },

  onShow () {
    this.events.push('onShow...')
  },

  onReady () {
    this.events.push('onReady...')
  },

  // this data not ready yet
  // beforeCreate () {
  //   this.events.push('beforeCreate...')
  // },

  created () {
    this.events.push('created...')
  },

  beforeMount () {
    this.events.push('beforeMount...')
  },

  mounted () {
    this.events.push('mounted...')
  }

  // beforeUpdate () {
  //   this.events.push('beforeUpdate...')
  // },

  // updated () {
  //   this.events.push('updated...')
  // }
}
</script>
