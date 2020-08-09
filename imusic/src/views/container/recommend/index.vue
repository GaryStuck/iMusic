<template>
  <div
    @touchstart="touchstart()"
    @touchend="touchend"
    @touchmove="touchmove"
  ><input type="text" value="recomment" @click="notification">
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    data () {
      return {

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
      notification() {
        this.$notify({
          content: 'successful'
        })
      }
    },
  }
</script>

<style scoped>

</style>
