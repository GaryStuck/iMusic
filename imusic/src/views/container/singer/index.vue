<template>
  <div class="op-swiper">
    <swiper ref="opSwiper" :options="opOptions" :id="uId">
      <swiper-slide style="background-color: #3c484f">Slide 1</swiper-slide>
      <swiper-slide style="background-color: #f45722">Slide 2</swiper-slide>
      <swiper-slide style="background-color: #22f450">Slide 3</swiper-slide>
      <swiper-slide style="background-color: #7222f4">Slide 4</swiper-slide>
      <swiper-slide style="background-color: #f4ea22">Slide 5</swiper-slide>
      <div class="op-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'Singer',
    data () {
      return {
        opOptions: {
          effect: 'fade',
          slidesPerView: 3,
          centeredSlides: true,
          pagination: {
            el: '.op-pagination'
          }
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
