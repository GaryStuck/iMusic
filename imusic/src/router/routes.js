export const routes = [
  {
    path: '/',
    name: 'recommend',
    redirect: '/sys/layer/recommend'
  },
  {
    path: '/sys/layer/recommend',
    name: 'recommend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/container/recommend/recommend')
  }
]
