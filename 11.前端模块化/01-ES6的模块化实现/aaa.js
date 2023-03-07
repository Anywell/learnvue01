
let name = '小明';
let age = 30;
var  flag = true;

function sum(num1, num2){
  return num1 + num2;
}

if (flag){
  console.log(sum(20 , 30));
}

// 导出需要的变量和函数
export {
  flag, sum
}



//2. 导出方式2
export var num1 = 1000;
export var weight = 60;

// 3.导出函数/类
export function total(num1, num2){
  return num1, num2
}

export class Person{
  //  构造器
  constructor(name, age){
    this.name = name;
    this,age = age;
  }
  run(){
    console.log(this.name , " run...")
  }
}

// 4. export default
const address = '北京市';

// export {
//   address
// }
// export default 有且只能有一个
// export default address

// 5.export default 一个函数，可以不勇写函数名
export default function(argument){
  console.log(argument)
}

