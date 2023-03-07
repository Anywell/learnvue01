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
document.writeln("<h2>你好啊，李银河！</h2>")