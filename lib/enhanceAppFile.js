import Live2D from "./Live2d.vue"
// import * as config from "../package.json"
const config = require('../package.json');

export default ({
  Vue
}) => {
  // 自定义扩展参数
  Vue.prototype.$appName = config.name;
  Vue.prototype.$appUrl = config.homepage;
  Vue.prototype.$appDescription = config.description;

  // 注册Vue全局组件
  Vue.component('Live2D', Live2D)
}
