/**
 * @description List files of provided path
 */
const fs = require('fs');
const path = require('path');

/**
 * Lists files in the supplied directory path
 * @param  {String} dirPath The path to the dir
 * @return {Array}          An array that contains all the file paths
 */

module.exports = function listFiles(dirPath) {
  try {
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
