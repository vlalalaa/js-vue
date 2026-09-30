let maxPlaces = 7;
let number = +prompt("Enter number of cars");
let correctInfo = 0;
let price;
let totalPrice = 0;
let electroCount = 0;
let maxPrice = 0;
let priceCar;
while(Number.isNaN(number) || number > maxPlaces){
    number = +prompt("Enter correct number!!!");
}
for (let i = 1; i <= number; i++){
    let hours = +prompt("Enter hours for №" + i + "car");
    if (hours === 0){
        break;
    }
    else if (hours < 0 || hours > 12){
        continue;
    }

    let type = +prompt("1 - for normal car, 2 - for electro");

    if (type === 1){
        price = 40;
    }
    else if (type === 2){
        price = 30;
        electroCount++;
    }
    else{
        alert("Wrong type!")
        continue;
    }

    if (hours > 5){
        priceCar = 0.8*price*hours;
        totalPrice += priceCar;
        correctInfo++;
        if (priceCar > maxPrice){
            maxPrice = priceCar;
        }
    }
    else{
        priceCar = price*hours;
        totalPrice += priceCar;
        correctInfo++;
        if (priceCar > maxPrice){
            maxPrice = priceCar;
        }
    }

}

console.log("Correctly processed cars: " + correctInfo);
console.log("Number of electro cars: " + electroCount);
console.log("Total price: " + totalPrice);
console.log("Max price per car: " + maxPrice);