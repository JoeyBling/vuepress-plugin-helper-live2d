'use strict';

/* 全局默认配置(插件定义的常量) */
module.exports = {
  // 全局开启是否打印控制台日志
  log: true,
  // 插件名称
  pluginName: 'vuepress-plugin-helper-live2d',
  // 输出目录(不要以/结尾)
  outDir: '.vuepress/public',
  // 输出public目录下的自定义文件夹名称(不要以/结尾)
  outDirName: 'live2d',
  dest: "/",
  // 默认看板娘配置(此处插件配置可更改)
  live2d: {
    enable: true, // 是否启用(default: true)
    // 模型名称(default: hibiki)>>>取值请参考：
    // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    model: 'hibiki',
    // 模型的文件路径(请不要更改此项)
    pluginModelPath: 'assets',
    display: {
      position: "right", // 显示位置：left/right(default: 'right')
      width: 135, // 模型的长度(default: 135)
      height: 300, // 模型的高度(default: 300)
      hOffset: 65, //  水平偏移(default: 65)
      vOffset: 0, //  垂直偏移(default: 0)
    },
    mobile: {
      show: false // 是否在移动设备上显示(暂时没有移动设备上的缩放配置)(default: false)
    },
    react: {
      opacity: 0.8 // 模型透明度(default: 0.8)
    }
  }
};
