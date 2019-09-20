// 控制台颜色插件
const chalk = require('chalk')
// 默认插件配置
const defaultPluginConfig = require("./default_plugin_config");

// color取值：red、green、yellow、blue...等
module.exports = function helper_live2d_log(msg, color = 'blue', label = defaultPluginConfig.pluginName) {
  if (defaultPluginConfig.log) {
    console.log && console.log(`\n${chalk.reset.inverse.bold[color](` ${label} `)} ${msg}`)
  }
}
