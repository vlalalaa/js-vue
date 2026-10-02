// function name(Аргументи): void{
//
// }

// function hello(){
//     alert("Hello");
// }
//
// hello();

// function showInfo(name, price = "Nemae", count){
//     console.log("Shop u Sani")
//     console.log("Графік роботи: 08:00 - 23.00")
//     console.log(`Товар ${name}, вартість: ${price}`)
//     console.count(`SUma do oplaty: ${count * price}`);
// }
// showInfo("Зелений чай", 100, 4);

// function calculate(price, total){
//     let suma = price * total, discount, totalSuma;
//     if (suma >= 5000){
//         discount = 0.1;
//     }
//     else{
//         discount = 0;
//     }
//     totalSuma = suma * (1 - discount);
//     return totalSuma;
// }
//
// let total = calculate(500, 3)
// console.log(total);

function showInfo(name, price = "Nemae", count) {
    console.log("Shop u Sani")
    console.log("Графік роботи: 08:00 - 23.00")
}
function getProductTotal(price, count){
    return price * count;
}
function getDiscountPercent(total){
    if (total >= 10000){
        return 15;
    }
    else if (total <= 5000){
        return 10;
    }
    else if (total >= 2000){
        return 5;
    }
    else{
        return 0;
    }
}

function getDiscountValue(total, percent){
    return total * percent / 100;
}

function getFinalPrice(total, discount){
    return total - discount;
}
let productName = prompt("Введіть назву товару")
let productPrice = prompt("Введіть вартість товару")
let productCount = prompt("Введіть кількість товару")

let productTotal = getProductTotal(productPrice, productCount);
let discountPercent = getDiscountPercent(productTotal);
let discountValue = getDiscountValue(productTotal, discountPercent);
let finalPrice = getFinalPrice(productTotal, discountValue);
showInfo(productName, productPrice, productCount);
console.log(`Товар ${productName}`);
console.log(`Ціна ${productTotal}`);
console.log(`Кількість ${productCount}`);
console.log(`Сума ${productTotal}`);
console.log(`Знижка ${discountPercent}`);
console.log(`Суми знижки ${discountValue}`);
console.log(`До сплати ${finalPrice}`);