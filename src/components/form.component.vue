<template>
  <form @submit="formSubmit" report-submit="true">
    <slot />
  </form>
</template>

<style>

</style>

<script>
import formCommon from '@/mixins/form.common'

export default {
  mixins: [formCommon],
  data () {
    return {}
  }
}
</script>
