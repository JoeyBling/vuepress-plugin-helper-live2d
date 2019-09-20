import Live2D from "./Live2d.vue"
import * as config from "../package.json"

export default ({
  Vue
}) => {
  // 自定义扩展参数
  Vue.prototype.$helperLive2dAppName = config.name;
  Vue.prototype.$helperLive2dAppUrl = config.homepage;
  Vue.prototype.$helperLive2dAppDescription = config.description;

  // 注册Vue全局组件
  Vue.component('Live2D', Live2D)
}
