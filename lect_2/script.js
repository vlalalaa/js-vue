//> >= < <= == === != !==

// let a, b;
// a = "1";
// b = 1;
//
// console.log(a == b);
// console.log(a === b);

// if (умова){
//     команди;
// }

// let temp = prompt('Enter a temperature');
// let result;
// if (temp <= 0) {
//     result = "холодно";
// }
// else if (temp > 0 && temp <= 20) {
//     result = "норм";
// }
// else if (temp > 20) {
//     result = "жарко"
// }
// alert(result)

//________________________________


// const login = "admin";
// const password = "12345";
//
// let userLogin = prompt("Enter your username");
// let userPassword = prompt("Enter your password");
//
// if (userLogin === login && userPassword === password) {
//     alert("Вхід дозволений")
// }
// else {
//     alert("невірний пароль або логін")
// }


// courier 200
// post 100
// pickup 0

// let cost, deliver = prompt('яка доставка?');
//
// switch(deliver) {
//     case "courier":
//         cost = 200;
//         break;
//     case "post":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//
//     default:
//         cost = "n|a";
// }
// console.log(cost);

//________________________________________

let productName = prompt("Enter your product name");
let productPrice = +prompt("Enter your product price");
let productCount = +prompt("Enter your product count");

let hasCard = confirm("Чи є у вас дисконтна карта?");//10%

let deliveryType = prompt("Enter your delivery type: courier, post, pickup");

let totalPrice, discount = 0;

totalPrice = productPrice * productCount;

if (totalPrice > 2000) {
    sumDiscount = 0.10;
} else if (totalPrice > 1000) {
    sumDiscount = 0.05;
}
totalPrice = totalPrice - (totalPrice * sumDiscount);

if (hasCard) {
    totalPrice = totalPrice - (totalPrice * 0.10);
}

let deliveryCost = 0;


if (hasCard){
    totalPrice = (totalPrice - (totalPrice * discount)) - (totalPrice * 0.1) ;
}
else {
    totalPrice = totalPrice - (totalPrice * discount)
}
switch (deliveryType){
    case "courier":
        deliveryCost = 100;
        totalPrice += deliveryCost;
        break;
    case "post":
        deliveryCost = 50;
        totalPrice += deliveryCost;
        break;
    case "pickup":
        deliveryCost = 0;
        break;
    default:
        alert("n|a");

}


alert(
    `Деталі замовлення:\n` +
    `Товар: ${productName}\n` +
    `Кількість: ${productCount}\n` +
    `Вартість доставки: ${deliveryCost} грн\n` +
    `Загальна сума до сплати: ${totalPrice} грн`
);
