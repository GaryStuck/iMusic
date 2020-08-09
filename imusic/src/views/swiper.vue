<template>
  <div v-swiper:mySwiper="swiperOption" :id="spID">
    <div class="swiper-wrapper">
      <swiper-slide>
        <ranking status="contents"/>
      </swiper-slide>
      <swiper-slide>
        <Singer></Singer>
      </swiper-slide>
      <swiper-slide>
        <Singer></Singer>
      </swiper-slide>
      <swiper-slide>
        <Singer></Singer>
      </swiper-slide>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import Singer from './container/singer'
  import 'swiper/css/swiper.css'
  import Ranking from './container/ranking'
  export default {
    name: 'slider',
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            stype: 'custom',
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
            renderBullet: function (index, className) {
              let text = ''
              switch (index) {
                case 0:
                  text = '推荐'
                  break
                case 1:
                  text = '歌手'
                  break
                case 2:
                  text = '排行'
                  break
                case 3:
                  text = '搜索'
                  break
              }
              return `
                <span class=${className}> ${text}</span>`
            }
          }
        }
      }
    },
    mounted () {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(0, 1000, false)
    },
    computed: {
      spID () {
        return this._uid + Date.now()
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      Singer,
      Ranking
    },
    directives: {
      swiper: directive
    }
  }
</script>

<style type="text/css">
  /*.swiper-container { !*把主要的框写好*!*/
  /*  width: 100%;*/
  /*  height:100vh;*/
  /*  border: 1px solid #aaa;*/
  /*}*/
  .swiper-pagination {
    display: flex;
    justify-content: space-around;
    align-self: baseline;
    flex-direction: row;
    color: rgba(244, 244, 245, 0.901961);
  }
  .swiper-slide { /*轮播的内容*/
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 400px;
    margin-top: 40px;
  }

  .swiper-pagination { /*装有小圆点的容器,把它移动到顶部，不过top为零时容易把内容覆盖一部分，所以减去小圆点的高度*/
    width: 100%;
    height: 25px;
    display: flex;
    top: 0;
  }
  .my-bullet {
    background: transparent;
  }
  .my-bullet-active {
    background: transparent;
    border-bottom: 1px solid #FDAE26;
    color: #FDAE26;
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    color: #fff;
    background: #007aff;
  }
</style>
