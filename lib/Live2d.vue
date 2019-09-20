<template>
  <div id="live2d-widget" class="live2d-widget-container" :style="this.generateDivStyle()">
    <canvas
      v-if="config && config.enable"
      :id="this.elementName"
      :style="this.generateCanvasStyle()"
      :width="config.display.width"
      :height="config.display.height"
      :class="this.elementName"
    ></canvas>
  </div>
</template>

<script>
/* 导入看板娘js */
import "../libs/live2d.js";

const path = require("path");
// const live2d_widget = require("live2d-widget");
// const live2d_widget = require("../libs/live2d/L2Dwidget.common.js");
// import { Live2d } from "../libs/live2d/L2Dwidget.min.js";

export default {
  components: {},
  methods: {
    /** 判断是否是电脑端访问 */
    isPC() {
      let userAgentInfo = navigator.userAgent || "";
      const Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    // 生成div样式
    generateDivStyle(divStyle = {}) {
      // 生成样式json
      divStyle.position = "fixed";
      divStyle[this.config.display.position] =
        this.config.display.hOffset + "px";
      divStyle.bottom = this.config.display.vOffset + "px";
      divStyle.width = this.config.display.width + "px";
      divStyle.height = this.config.display.height + "px";
      divStyle["z-index"] = 99999;
      divStyle["opacity"] = this.config.react.opacity;
      divStyle["pointer-events"] = "none";
      // this.live2d_log(divStyle)
      return divStyle;
    },
    // 生成canvas样式
    generateCanvasStyle(canvasStyle = {}) {
      // 生成样式json
      canvasStyle.position = "absolute";
      canvasStyle["left"] = "0px";
      canvasStyle["top"] = "0px";
      canvasStyle.width = this.config.display.width + "px";
      canvasStyle.height = this.config.display.height + "px";
      // canvasStyle["z-index"] = 99999;
      // this.live2d_log(canvasStyle);
      // this.live2d_log();
      return canvasStyle;
    },
    // 统一输出日志
    live2d_log(str = this.options.pluginName) {
      if (this.options.log) {
        console.log && console.log(str);
      }
    }
  },
  computed: {
    options() {
      return JSON.parse ? JSON.parse(OPTIONS) : OPTIONS;
    },
    config() {
      return this.options.live2d;
    }
  },
  data() {
    return {
      // 渲染的DOM元素id
      elementName: "live2dcanvas",
      // 特定的模型json文件名称
      modelPathJson: {
        epsilon2_1: "Epsilon2.1",
        gf: "Gantzert_Felixander",
        "haru/01": "haru01",
        "haru/02": "haru02",
        nietzsche: "nietzche"
      }
    };
  },
  mounted() {
    this.live2d_log(
      this.$helperLive2dAppDescription +
        " ➡️ " +
        this.$helperLive2dAppName +
        " ➡️ " +
        this.$helperLive2dAppUrl
    );
    /* live2d_widget.L2Dwidget.init({
      model: {
        jsonPath: this.$withBase(
          path.join(
            "/",
            this.options.outDirName,
            this.config.model,
            this.config.pluginModelPath,
            this.config.model + ".model.json"
          )
        )
      }
    }); */
    if (this.config && this.config.enable) {
      // 是否显示看板娘
      let isShow = true;
      // this.live2d_log(this.config);
      if (!this.config.mobile.show && !this.isPC()) {
        // 手机端不显示
        isShow = false;
      }
      // 特定的模型json文件名称
      let modelPath = this.config.model;
      if (this.modelPathJson[this.config.model]) {
        modelPath = this.modelPathJson[this.config.model];
      }
      isShow &&
        loadlive2d &&
        // this.$withBase只对开头为/的路径生效
        // (packages\@vuepress\core\lib\client\app.js)
        loadlive2d(
          this.elementName,
          this.$withBase(
            path.join(
              "/",
              this.options.outDirName,
              this.config.model,
              this.config.pluginModelPath,
              modelPath + ".model.json"
            )
          )
        );
    }
  }
};
</script>
<style lang="stylus">
// @import '../styles/helper-live2d.styl'
</style>