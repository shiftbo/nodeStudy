//根据CommonJS

//导出模块的办法

const path = require('path')

let absPath = path.resolve(__dirname)

// 第一种
// exports.showPath = () => {
//   console.log(absPath);
// }

// 第二种

module.exports = {
  showPath: () => {
    console.log(absPath);
  }
}