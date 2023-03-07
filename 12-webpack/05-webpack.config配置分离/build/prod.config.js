const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
// 导入baseConfig
const baseConfig = require('./base.config');


// 合并配置
module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyjsPlugin()
  ],
})