/**
 * @description 文件操作封装工具类
 */
const fs = require('fs');
const path = require('path');

/**
 * 删除文件夹及文件夹下所有文件
 * Delete folder and all files under folder
 * @param  {String} dirPath The path to the dir
 * @param  {Boolean} delCurrDir 是否删除最外层文件夹，如果为false，则保留空文件夹，默认为true
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
      console.error("Delete folder error:" + ex.message);
    }
  }
}

/**
 * Lists files in the supplied directory path
 * @param  {String} dirPath The path to the dir
 * @return {Array}          An array that contains all the file paths
 */
const listFiles = module.exports.listFiles = function (dirPath) {
  try {
    // 指定目录下所有文件名称
    const lsDir = fs.readdirSync(dirPath);
    const filesArr = [];
    for (const fileName of lsDir) {
      const pathName = path.join(dirPath, fileName);
      if (fs.statSync(pathName).isDirectory()) {
        // 三点运算符
        filesArr.push(...listFiles(pathName));
      } else {
        filesArr.push(pathName);
      }
    }
    return filesArr;
  } catch (e) {
    console.warn("Not Found dirPath Files:" + dirPath);
    return null;
  }
};

/**
 * 获取指定目录下一级目录名称
 * @param  {String} dirPath The path to the dir
 * @return {Array}          指定目录下所有一级目录名称
 */
const listFolder = module.exports.listFolder = function (dirPath) {
  try {
    // 指定目录下所有文件名称
    const lsDir = fs.readdirSync(dirPath);
    const foldersArr = [];
    for (const dirName of lsDir) {
      const pathName = path.join(dirPath, dirName);
      if (fs.statSync(pathName).isDirectory()) {
        // 三点运算符
        // foldersArr.push(...listFolder(pathName));
        foldersArr.push(pathName);
      } else {
        // Skip
      }
    }
    return foldersArr;
  } catch (ex) {
    console.warn("Not Found dirPath Folders:" + dirPath + "error:" + ex.message);
    return null;
  }
};
