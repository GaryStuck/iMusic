<template>
  <swiper ref="opSwiper" :options="opOptions" :id="uId">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="op-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'Singer',
    data () {
      return {
        opOptions: {
          effect: 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          pagination: {
            el: '.op-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.opSwiper.$swiper
      },
      uId () {
        return this._uid + Date.now()
      }
    },
    mounted () {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss" scoped>

</style>
