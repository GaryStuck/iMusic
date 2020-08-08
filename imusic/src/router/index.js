import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})
/**
 *  1 export default new Router({
 2     mode: 'history', //路由模式，取值为history与hash
 3     base: '/', //打包路径，默认为/，可以修改
 4     routes: [
 5     {
 6         path: string, //路径
 7         ccomponent: Component; //页面组件
 8         name: string; // 命名路由-路由名称
 9         components: { [name: string]: Component }; // 命名视图组件
10         redirect: string | Location | Function; // 重定向
11         props: boolean | string | Function; // 路由组件传递参数
12         alias: string | Array<string>; // 路由别名
13         children: Array<RouteConfig>; // 嵌套子路由
14         beforeEnter?: (to: Route, from: Route, next: Function) => void; // 路由单独钩子
15         meta: any; // 自定义标签属性，比如：是否需要登录
16         icon: any; // 图标
17         // 2.6.0+
18         caseSensitive: boolean; // 匹配规则是否大小写敏感？(默认值：false)
19         pathToRegexpOptions: Object; // 编译正则的选项
20     }
21     ]
22 })
 */
// // push
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }
//
// // replace
// const VueRouterReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace (to) {
//   return VueRouterReplace.call(this, to).catch(err => err)
// }
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 若加载时间长且不定，担心进度条走完都没有加载完，可以调用
  NProgress.inc()// 这会以随机数量递增，且永远达不到100%，也可以设指定增量
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
