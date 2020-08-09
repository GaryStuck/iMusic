<template>
  <div v-swiper:mySwiper="swiperOption" :id="spID">
    <div class="swiper-wrapper">
      <swiper-slide>
        <vue-lazy-component
          @init="init"
          direction="horizontal"
          @beforeInit="beforeInit"
          :timeout='timeout'
          class="custom-transition"
        >
          <!-- real component-->
          <recommend/>
          <!-- skeleton component -->
          <st-skeleton slot="skeleton"/>
        </vue-lazy-component>
      </swiper-slide>
      <swiper-slide>
        <singer></singer>
      </swiper-slide>
      <swiper-slide>
        <ranking></ranking>
      </swiper-slide>
      <swiper-slide>
        <investigation></investigation>
      </swiper-slide>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import { SwiperSlide, directive } from 'vue-awesome-swiper'
  import Singer from '../views/container/singer'
  import Ranking from '../views/container/ranking'
  import Recommend from '../views/container/recommend'
  import Investigation from '../views/container/investigation'
  import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'
  import StSkeleton from './st-skeleton'
  export default {
    name: 'NavigationBar',
    data () {
      return {
        timeout: 2000,
        swiperOption: {
          shortSwipes: false,
          initialSlide: 0,
          resistance: false,
          observer: false,
          observeParents: false,
          effect: 'cube',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            stype: 'custom',
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
            renderBullet: function (index, className) {
              switch (index) {
                case 0:
                  return `
                      <span class=${className}>
                      <span class="iconfont iconhot">
                          推荐
                      </span>
                    </span>
                  `
                case 1:
                  return `
                      <span class=${className}>
                      <span class="iconfont iconcertified-supplier-fill">
                          歌手
                      </span>
                    </span>
                  `
                case 2:
                  return `
                      <span class=${className}>
                      <span class="iconfont iconfilter-fill">
                          排行
                      </span>
                    </span>
                  `
                case 3:
                  return `
                      <span class=${className}>
                      <span class="iconfont iconsearch">
                          搜索
                      </span>
                    </span>
                  `
              }
            }
          }
        }
      }
    },
    beforeMount () {
      // this.mySwiper.lazy.load();
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
    methods: {
      beforeInit () {
        console.log('模块可见或延时截止导致准备开始加载懒加载模块')
      },
      init() {
        console.log('开始加载懒加载模块，此时骨架组件开始消失')
      }
    },
    components: {
      SwiperSlide,
      VueLazyComponent,
      StSkeleton,
      Singer,
      Ranking,
      Recommend,
      Investigation
    },
    directives: {
      swiper: directive
    }
  }
</script>

<style type="text/css">
  .swiper-pagination {
    display: flex;
    justify-content: space-around;
    align-self: baseline;
    flex-direction: row;
    color: rgba(244, 244, 245, 0.901961);
    font-size: 16px;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 400px;
    margin-top: 40px;
  }

  .swiper-pagination {
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

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
  .custom-transition .lazy-component-enter {
    opacity: 0;
    transform: scale(0.4) translate(100%);
  }

  .custom-transition .lazy-component-enter-to {
    opacity: 1;
  }

  .custom-transition .lazy-component-enter-active {
    transition: all 0.5s;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .custom-transition .lazy-component-leave {
    opacity: 1;
  }

  .custom-transition .lazy-component-leave-to {
    opacity: 0;
    transform: scale(0.4) translate(-100%);
  }

  .custom-transition .lazy-component-leave-active {
    transition: all 0.5s;
  }
</style>
