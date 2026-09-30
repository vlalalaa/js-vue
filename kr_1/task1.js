let age = +prompt("What is your age?");
let day = +prompt("1 if today weekday, 2 if weekend");
let price;
if (day === 1){
    price = 200;
}
else if (day === 2){
    price = 250;
}
else  {
    alert("Error: incorrect day type!");
}

while (age <1 || age >= 100 || Number.isNaN(age)){
    age = +prompt("Enter correct age!");
}
if (age <8){
    price = 0;
}
else if (age >=8 && age <18){
    price = 0.5*price;
}
else if (age >=60){
    price = 0.6*price;
}
console.log("Your price:" + price);