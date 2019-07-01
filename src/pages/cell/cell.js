import Vue from 'Vue'
import cell from './cell.vue'
import axios from '../../http/index'

//淘宝的弹性布局 rem与页面比列为10 ， 可根据自己实际情况下载修改代码
import 'lib-flexible'

// Vue.prototype.$post = axios.post;
Vue.prototype.$get = axios.get;
// Vue.prototype.$patch = axios.patch;
// Vue.prototype.$put = axios.put;
// Vue.prototype.$del = axios.del;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(cell)
})

//运行时构建不包含模板编译器，因此不支持 template 选项，只能用 render 选项，但即使使用运行时构建，在单文件组件中也依然可以写模板，
// 因为单文件组件的模板会在构建时预编译为 render 函数。运行时构建比独立构建要轻量30%，只有 17.14 Kb min+gzip大小。
// 上面一段是官方api中的解释。就是说，如果我们想使用template，我们不能直接在客户端使用npm install之后的vue。
