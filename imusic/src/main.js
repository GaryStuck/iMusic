import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/scss/index.scss'
import './common/fonts/iconfont.css'
import FastClick from 'fastclick'
import 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
/* import it */
import 'css-doodle'
import notification from './config/notification/index'
Vue.use(notification)
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})
setTimeout(() => {
  app.$mount('#sys')
}, 500)
