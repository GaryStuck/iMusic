export const routes = [
  {
    path: '/',
    redirect: '/swiper'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/container/recommend')
  }, {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper.vue')
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('@/views/container/singer')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import('@/views/container/ranking')
  },
  {
    path: '/investigation',
    name: 'investigation',
    component: () => import('@/views/container/investigation')
  }
]
