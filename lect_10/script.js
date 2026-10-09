// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// console.log(names);
// console.log(names[-1]);
// console.log(names.length);
//
// names2 = [];
// names2.push("Vlada");
// names2.push("Miroslava");
//
// names2.pop();
// names2.unshift("Miroslava", "Miroslava");
// names2.shift();
//
// names.slice(1, 3);
// console.log(names2);


// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// let deleted = names.splice(2, 1);
// names.splice(1, 0, "Bohdan");
// names.splice(0, 1, "Maria", "Ksuha");
//
// console.log(deleted);
// console.log(names);


// function registration (name){
//     if (name.trim().length === 0){
//         alert("Please enter a name");
//         return;
//     }
//     let duplicate = false;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name){
//             duplicate = true;
//             break;
//         }
//     }
//     if (duplicate){
//         alert("This person already exists (" + name + ")");
//         return;
//     }
//     names.push(name);
//     alert("Added user " + name);
// }
//
// function deleted(name){
//     let index = -1;
//     for (let i = 1; i < names.length; i++){
//         if (names[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("There is no such name");
//     }
//     else{
//         names.splice(index, 1);
//         alert("Deleting user " + name);
//     }
// }
//
// function count(){
//     alert("The number of people" + names.length);
// }
//
// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// registration("Mykyta");
// registration("Ivan");
// registration("     ");
// deleted("Mykyta");
// deleted("Ivan");
// count();


// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// for (let i = 0; i < names.length; i += 1) {
//     console.log(names[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

// names.forEach(function (name, index) {
//     console.log(name, index);
// })


// ----------1
// let people = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
// people.push("Влада");
// people.unshift("Аліса");
// people.pop();
// people[2] = "Мирослава";
//
// for (let i = 1; i < people.length; i++) {
//     console.log(`Людина під номером ${i + 1} це ${people[i]}`);
// }
// for (let name of people) {
//     console.log(name);
// }
// people.forEach(function(name) {
//     console.log(`У імені ${name} є ${name.length} букв`);
// });

//-------------2
let prices = [120, 250, 180, 300, 150, 400];
let sum = 0;
let dorogo = 0;
for (let price of prices) {
    sum += price;
    if (price > 200) {
        dorogo++;
    }
}
console.log("Average: " + sum/(prices.length));
console.log("Pricey tickets: " + dorogo);


let sum2 = 0;
let dorogo2 = 0;
for (let i = 0; i < prices.length; i++) {
    sum2 += prices[i];
    if (prices[i] > 200) {
        dorogo2++;
    }
}
console.log("Average: " + sum2/(prices.length));
console.log("Pricey tickets: " + dorogo2);