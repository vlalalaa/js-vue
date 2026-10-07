let price = [12, 5, 45, 78, 9];
const price2 = [120, 23, 45, 60, 55];
// console.log(price2[2]);
//
// price2[2] = 30;
// console.log(price2);
//
// console.log(price.length);


// let sum = 0;
// for (let i = 0; i < price.length; i++) {
//     // console.log(price[i]);
//     sum += price[i];
//     if (price[i] % 2 === 0) {
//         console.log(price[i]);
//     }
// }
// console.log(sum);

// let prices = [50, 45, 30, 100, 55];
// let limit = 50;
// let sum = 0;
// function countLimit(prices, limit){
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//         if (prices[i] > limit){
//             count++;
//         }
//     }
//     return count;
// }
// countLimit(prices, limit);
// let average = sum / prices.length;
// console.log(countLimit(prices, limit));
// console.log(average);

let n = +prompt('Enter your number');
let prices = [];
function list(n, prices){
    for (let i = 0; i < n; i++){
        let element = +prompt('Enter element of masiv');
        prices[i] = element;
    }
}
list(n, prices);
console.log(prices);