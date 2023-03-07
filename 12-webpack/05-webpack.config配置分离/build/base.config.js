// 依赖node包
const path = require('path');
const webpack = require('webpack');
const htmlWebpakPlugin = require('html-webpack-plugin');
// const uglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    //publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css- loader 只负责将css文件进行加载。不负责解析
        // style-loader 负责将样式添加在DOM中生效。webpack 读取多个loader时，是从右向左的。
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: "url-loader",
          options: {
            // 当加载的图片小于limit时，会将图片编译成base64字符串形式
            // 当加载的图片大于limit时，需要使用file-loader模块进行加载。
            limit: 20000,
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        // 排除掉不需要转换的文件
        exclude: /(node_module|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归any所有'),
    new htmlWebpakPlugin({
      template: 'index.html'
    }),
    // new uglifyjsPlugin()
  ]
}