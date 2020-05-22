/**
 * TODO 迁移 listFiles.js
 * @description 文件操作封装工具类
 */

const fs = require('fs');
const path = require('path');

/**
 * 删除文件夹及文件夹下所有文件
 * Delete folder and all files under folder
 * @param  {String} dirPath The path to the dir
 */
const deleteFolder = module.exports.deleteFolder = function (dirPath, delCurrDir = true) {
  if (fs.existsSync(dirPath)) {
    try {
      // 指定目录下所有文件名称
      const lsDir = fs.readdirSync(dirPath);
      lsDir.forEach(function (fileName, index) {
        const curPath = path.join(dirPath, fileName);
        // recurse
        if (fs.statSync(curPath).isDirectory()) {
          deleteFolder(curPath);
        } else {
          // delete file
          fs.unlinkSync(curPath);
        }
      });
      if (!!delCurrDir && delCurrDir) {
        fs.rmdirSync(dirPath);
      }
    } catch (ex) {
      console.warn("Delete folder error:" + ex.message);
    }
  }
}
