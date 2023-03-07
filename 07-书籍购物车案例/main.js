const ap = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《java编程思想》',
                date: '2008-7',
                price: 90,
                count: 1
            },
            {
               id: 3,
               name: '《编程珠玑》',
               date: '2008-10',
               price: 89,
               count: 1
            },
            {
                id: 4,
                name: '《JavaScript》',
                date: '2007-9',
                price: 91,
                count: 1
            }
        ]
    },
    methods: {
        getFinalPrice(price){
            return '￥'+price.toFixed(2);
        },
        increment(index){
            if (this.books[index].count == 1){

            }
            this.books[index].count++;
            console.log('increment', index);
        },
        decrement(index){
            this.books[index].count--;
            console.log('decrement', index);
        },
        removeHandler(index){
            // 删除掉自己
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice(){
            // let totalPrice = 0;
            // // for (let i = 0; i < this.books.length; i++) {
            // //     totalPrice += this.books[i].price * this.books[i].count;
            // // }
            // for (let book of this.books) {
            //     totalPrice += book.price * book.count;
            // }
            // return totalPrice;

            return this.books.reduce((function(preValue, book){
                return preValue += book.price * book.count;
            }), 0);
        }
    },
    filters: { // 过滤器，一般是一个函数
        showPrice(price){
            return '￥'+price.toFixed(2);
        }
    }
})



const nums = [88, 89, 45, 22, 45, 76, 234, 123, 54, 67, 46];

const arr = nums.filter(function (n){
    return n < 100;
})

console.log(arr)


let total = nums.filter(function(n){
    return n < 100;
}).map(function(n){
    return n * 2;
}).reduce(function(preValue, n){
    return  preValue + n;
},0)

console.log(total);


// 箭头函数
let total1 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total1);
