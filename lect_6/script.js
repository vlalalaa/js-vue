let event = +prompt("Оберіть подію:\n 1 - кіно \n 2 - театр \n 3 - концерт");
while (Number.isNaN(event) || event < 1 || event > 3) {
    event = +prompt("вибери правильну подію!");
}

let basePrice = 0;
switch (event) {
    case 1:
        basePrice = 150;
        break;
    case 2:
        basePrice = 220;
        break;
    case 3:
        basePrice = 350;
        break;
}

let day = +prompt("Оберіть день:\n 1 - будній\n 2 - вихідний");
while (Number.isNaN(day) || (day !== 1 && day !== 2)) {
    day = +prompt("введіть нормально цифру для дня!");
}

if (day === 2) {
    basePrice = basePrice * 1.15;
}

let ticketsCount = +prompt("введіть кількість квитків");
while (Number.isNaN(ticketsCount) || ticketsCount < 1 || ticketsCount > 6) {
    ticketsCount = +prompt("введіть нормально кількість днвів!");
}

let countTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullTickets = 0;
let sum = 0;

for (let i = 1; i <= ticketsCount; i++) {
    let age = +prompt(`введіть вік для квитка №${i}`);

    if (age === -1) {
        alert("пака пака");
        break;
    }

    while (Number.isNaN(age) || age < 0 || age > 100) {
        age = +prompt(`введіть нормальний вік!`);
        if (age === -1) {
            break;
        }
    }
    countTickets++;

    if (age <= 5) {
        freeTickets++;
        continue;
    }

    let ticketPrice = basePrice;

    if (age >= 6 && age <= 12) {
        ticketPrice = ticketPrice * 0.5;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = ticketPrice * 0.8;
        discountedTickets++;
    } else if (age >= 18 && age <= 59) {
        if (age <= 25) {
            let studentChoice = +prompt(`дай студенський`);
            while (Number.isNaN(studentChoice) || (studentChoice !== 1 && studentChoice !== 2)) {
                studentChoice = +prompt("просто скажи є учнівський чи ні!");
            }
            if (studentChoice === 1) {
                ticketPrice = ticketPrice * 0.9;
                discountedTickets++;
            }
            else {
                fullTickets++;
            }
        }
    }
    else {
        ticketPrice = ticketPrice * 0.75;
        discountedTickets++;
    }

    sum += ticketPrice;
}
if (sum > 1000) {
    sum = sum * 0.95;
}

console.log("всього квитків: " + countTickets);
console.log("безкоштовних: " + freeTickets);
console.log("зі знижкою: " + discountedTickets);
console.log("квитки повна ціна: " + fullTickets);
console.log("загальна сума " + sum);