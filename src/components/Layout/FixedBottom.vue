<template>
  <div
    class="fixed foot padding bg-white flex justify-between height-260 card-fixed"
    @click="click">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>