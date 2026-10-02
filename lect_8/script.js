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

// function showInfo(name, price = "Nemae", count) {
//     console.log("Shop u Sani")
//     console.log("Графік роботи: 08:00 - 23.00")
// }
// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscountPercent(total){
//     if (total >= 10000){
//         return 15;
//     }
//     else if (total <= 5000){
//         return 10;
//     }
//     else if (total >= 2000){
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent){
//     return total * percent / 100;
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("Введіть назву товару")
// let productPrice = prompt("Введіть вартість товару")
// let productCount = prompt("Введіть кількість товару")
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
// showInfo(productName, productPrice, productCount);
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productTotal}`);
// console.log(`Кількість ${productCount}`);
// console.log(`Сума ${productTotal}`);
// console.log(`Знижка ${discountPercent}`);
// console.log(`Суми знижки ${discountValue}`);
// console.log(`До сплати ${finalPrice}`);

// ----1
// function calculateTickets(price, count){
//     return price * count;
// }
//
// function getTicketDiscount(total){
//     if (total >= 1500){
//         return 15;
//     }
//     else if (total >= 1000){
//         return 10;
//     }
//     else if (total >= 500){
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent){
//     return total * percent / 100;
// }
//
// function calculateTicketFinalPrice(total, discount){
//     return total - discount;
// }
//
// let ticketPrice = +prompt("Введіть ціну одного квитка:");
// let ticketCount = +prompt("Введіть кількість квитків:");
//
// let total = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(total);
// let discountValue = calculateTicketDiscount(total, discountPercent);
// let finalPrice = calculateTicketFinalPrice(total, discountValue);
//
// console.log(Ціна квитка: ${ticketPrice}грн);
// console.log(Кількість квитків: ${ticketCount}шт);
// console.log(Загальна сума: ${total}грн);
// console.log(Знижка: ${discountPercent}%);
// console.log(Сума знижки: ${discountValue}грн);
// console.log(До сплати: ${finalPrice}грн);


//-----2
let savedLogin = "";
let savedPassword = "";

function registerUser(login, password) {
    savedLogin = login;
    savedPassword = password;

    console.log("Registration successful!");
}

function loginUser(login, password) {
    if (login === savedLogin && password === savedPassword) {
        return true;
    } else {
        return false;
    }
}

let action;

do {
    action = +prompt(
        "Choose action:\n" +
        "1 - Register\n" +
        "2 - Login\n" +
        "0 - Exit"
    );

    if (action === 1) {
        let inputLogin = prompt("Enter login:");
        let inputPassword = prompt("Enter password:");

        registerUser(inputLogin, inputPassword);
    }

    else if (action === 2) {
        let attemptsCount = 3;

        do {
            let inputLogin = prompt("Enter login:");
            let inputPassword = prompt("Enter password:");

            if (loginUser(inputLogin, inputPassword)) {
                console.log("Login successful!");
                break;
            } else {
                attemptsCount--;
                console.log("Incorrect login or password. Attempts left: " + attemptsCount);
            }

        } while (attemptsCount > 0);

        if (attemptsCount === 0) {
            console.log("No attempts left!");
        }
    }

    else if (action === 0) {
        console.log("Program closed");
    }

    else {
        console.log("Unknown command!");
    }

} while (action !== 0);


