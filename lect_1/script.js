//alert("Hello");
//const name = "Vlada";
//let age = 16;
//const isStudent = true;

//console.log(typeof isStudent); //перевіряє тип даних
// + - * / % **

//let num1 = prompt("Enter num1");
//let num2 = prompt("Enter num2");

//console.log(num1 + num2);
//console.log((num1 - 0) + (num2 - 0));
//console.log(Number(num2) + Number(num2));

//let num3 = 13;
//console.log(typeof String(num3));

let productName = prompt("Enter your product name");
let productPrice = +prompt("Enter your product price");
let productCount = +prompt("Enter your product count");
let delivery = +prompt("Enter your delivery");
let discount = +prompt("Enter your discount in %");

//let totalPrice = productPrice * productCount + delivery;
let totalPrice = ((productPrice - (productPrice / 100 * discount)) * productCount) + delivery;

console.log(`Product name: ${productName} на суму: ${totalPrice}`);
alert("Product  is " + productPrice + "\n total price is " + totalPrice);

let bankBalance = +prompt("Enter your bank balance");
let leftMoney = (bankBalance - totalPrice);
alert("You have " + leftMoney + " dollars left in yout bank acc");
