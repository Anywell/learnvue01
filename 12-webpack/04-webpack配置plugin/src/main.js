const math = require('./js/mathUtils')

console.log("hello webpack!!")
console.log("math.add: " , math.add(100, 123));
console.log("math.mul: ", math.mul(10, 20));

import {name, age, country} from "./js/info";

console.log(name)
console.log(age)
console.log(country)

// 3. 依赖css文件
require('./css/normal.css')

// 4. 依赖 less 文件
require('./css/special.less')
// document.writeln("<h2>你好啊，李银河！</h2>")

// 5.使用Vue进行开发
import Vue from 'vue'
//import App from './vue/app'

import App from './vue/app.vue'

// 定义App组件, 迁移到 app.js 中定义
// const App = {
//   template:`
//     <div>
//       <h2>这是在template里面</h2>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">按钮</button>
//       <h2>{{name}}</h2>
//     </div>
//   `,
//   data() {
//     return{
//       message: 'Hello Webpack',
//       name: 'Kobe Bryant'
//     }
//   },
//   methods: {
//     btnClick() {
//     }
//   }
// }

new Vue({
  el: '#app',
  // 使用 App 组件
  template: '<App/>',
  components: {
    App
  }
})