// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++
// }

// let userNumber = +prompt('Enter your number');
// while (userNumber < 1 || userNumber >= 10) {
//     userNumber = +prompt('error');
//     console.log("error");
// }

// console.log(Number("7"));
// console.log(Number("hello"));

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 100) {
//     age = +prompt("Error. Enter your age correctly");
// }
// console.log(age);

// const correctPin = 1234;
// let userPin = +prompt("Enter a valid pin");
// let attemptCount = 1;
// while (correctPin !== userPin && attemptCount < 3) {
//     userPin = +prompt("Enter a valid pin");
//     attemptCount++;
// }
// if (userPin === correctPin) {
//     console.log("Welcome");
// }
// else{
//     console.log("Wrong pin");
// }

// const correctPin = 1234;
// let attemptCount = 1;
// while (attemptCount < 3) {
//     let userPin = +prompt("Enter a valid pin");
//     if (userPin === correctPin) {
//         console.log("welcome");
//         break
//     }
//     console.log("error");
//     attemptCount++;
// }

// let menuChoice;
//
// do {
//     menuChoice = prompt("What is your choice? \n 1 = see menu \n 2 = settings \n 3 = statistics \n 0 = exit");
//     if (menuChoice === "1") {
//         console.log("opening profile");
//     }
//     else if (menuChoice === "2") {
//         console.log("opening settings");
//     }
//     else if (menuChoice === "3") {
//         console.log("opening statistics");
//     }
//     else{
//         console.log("error");
//     }
// } while (menuChoice !== "0");

// //-----------------------------
// while (true) {
//     let menuChoice = prompt("What is your choice? \n 1 = see menu \n 2 = settings \n 3 = statistics \n 0 = exit");
//
//     if (menuChoice === "1") {
//         console.log("opening profile");
//     } else if (menuChoice === "2") {
//         console.log("opening settings");
//     } else if (menuChoice === "3") {
//         console.log("opening statistics");
//     } else if (menuChoice === "0") {
//         break;
//     } else {
//         console.log("error");
//     }
// }
//----------------------------

// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let grade = +prompt(`Enter a number N ${count + 1}`);
//     if (Number.isNaN(grade) || grade < 1 || grade > 12) {
//         alert("Please enter a correct number");
//         continue;
//     }
//     sum += grade;
//     count ++;
//
// }
// console.log(sum);
// console.log(sum / 5);

// let questionsNumber = 1, score = 0;
// while (questionsNumber <- 5) {
//     let questions = '', correctAnswer = '';
//     switch (questionsNumber) {
//         case 1:
//             questions += "Ключове слово для створення змінної";
//             correctAnswer = 'let';
//             break;
//             case 2:
//                 questions = 'Оператор and'
//             correctAnswer = '&&';
//                 break;
//             case 3:
//                 questions = "Оператор or"
//             correctAnswer = '||';
//                 break;
//             case 4:
//                 questions = "Як зупинити цикл?"
//             correctAnswer = break;
//             case 5:
//                 questions = "Строга нерівність позначається"
//             correctAnswer = '===';
//             break;
//     }
//     let answer = prompt(Запитання № ${questionsNumber} is 5\n${questions});
//     if (answer === '') {
//         alert("Відповідь не може бути пуста");
//         continue;
//     }
//     if (answer === correctAnswer) {
//         alert("Вірно!");
//         score++;
//     } else {
//         alert("Не вірно!");
//     }
//     questionsNumber++;
// }
// if (score === 5) {
//     alert("Ти молодець!")
// }
// else if (score >= 3) {
//     alert("Ок")
// }
// else {
//     alert("Треба вчитись")
// }


// HW
let age = +prompt("Enter your age:");
while (Number.isNaN(age) || age <= 12 || age >= 90) {
    age = +prompt("enter normal age!:");
}
const correctPassword = 1234;
let password = +prompt("enter a valid password!!!");
let attempt = 1;

while (attempt < 3 && password !== correctPassword) {
    password = +prompt("enter a valid password!!!");
    attempt++;
}
if (password === correctPassword) {
    console.log("welcome");
    let menu;
    do {
        menu = +prompt(
            "Choose from menu:\n 1 - Personal Account\n 2 - Messages\n 3 - Settings\n 0 - Exit"
        );

        switch (menu) {
            case 1:
                alert("Personal cabinet");
                break;
            case 2:
                alert("Messages");
                break;
            case 3:
                alert("Settings");
                break;
            case 0:
                alert("Exit");
                break;
            default:
                alert("there is no such option");
                break;
        }
    } while (menu !== 0);
} else {
    console.log("go away");
}