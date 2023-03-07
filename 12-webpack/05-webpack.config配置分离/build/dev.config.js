const webpackMerge = require('webpack-merge');
// 导入baseConfig
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})