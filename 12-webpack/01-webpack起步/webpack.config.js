// 依赖node包
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(dirname, 'dist'),
    filename: 'bundle.js'
  }
}