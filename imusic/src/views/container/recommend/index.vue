<template>
  <div
    @touchstart="touchstart()"
    @touchend="touchend"
    @touchmove="touchmove"
  >recommend
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    data () {
      return {
        active: true,
      }
    },
    methods: {
      touchstart (event) {
        console.log(event)
      },
      touchend () {
        this.active = true
        console.log('touchend')
      },
      touchmove () {
        console.log('touchmove')
      },
    },
  }
</script>

<style scoped>

</style>
