let pinCode = 2026;
let attemptsLeft = 3;
while (attemptsLeft > 0) {
    let userPin = +prompt('Enter pin code');
    if (userPin === pinCode) {
        alert("Access granted!");
        break;
    }
    attemptsLeft--;
    if (attemptsLeft > 0) {
        alert("You have " + attemptsLeft + " attempts left");
    }
    else{
        alert("Access denied!");
    }
}
