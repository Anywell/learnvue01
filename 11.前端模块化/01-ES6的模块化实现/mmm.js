// 导入模块中定义的变量
import {flag, sum} from "./aaa.js";

if (flag){
  console.log('小明是天才。。。')
}

// 2. 直接导入export定义的变量
import {num1, weight} from "./aaa.js"
console.log('num1 = ' , num1);
console.log('weight = ', weight);

// 3. 导入 export的function 和 类
import {total, Person} from "./aaa.js"

console.log("total方法：", total(200,300))

// 创建Person对象
const p = new Person('jack', 30);
p.run();

// 4.导入export default的变量
// import addr from "./aaa.js"
// console.log(addr)

import func from "./aaa.js"
func("你好啊")

// 5.统一全部导入
import * as aaa from "./aaa.js"

console.log(aaa.flag);
console.log(aaa.sum(199, 299));