// let age = prompt('Enter your age');
// let register = confirm('Have you registered?');
// if (age >= 18 && register === true){
//     alert("You have access to the site")
// }
// else{
//     alert("Youre too young")
// }


// let accessLevel = prompt("What is your access level?");
// if (accessLevel === "teacher" || accessLevel === "admin") {
//     alert("Welcome")
// }
// else{
//     alert("Go away")
// }


// let register = confirm("Are you registered");
// if (register === true){
//     let age = prompt("What is your age?");
//     if (age >= 18){
//         alert("Welcome");
//     }
//     else {
//         alert("Please grow up! As for now go away");
//     }
// }
// else {
//     alert("Go away");
// }


// let grade = prompt("What is your grade?");
// //90-100 well done, 89-70 good, 60-69 ok, 0-60 go study
// if (grade >= 90) {
//     alert("Well done!");
// }
// else if (grade >= 70){
//     alert("Good!");
// }
// else if (grade >= 60){
//     alert("Eh, ok");
// }
// else {
//     alert("Go and study rn!");
// }


// //roles: teacher, student
// let role = prompt("What is your role?");
// let subscrition, accUnblocked;
// if (role === "teacher") {
//     accUnblocked = confirm("Is your acc unblocked");
//     if (accUnblocked === true){
//         alert("Welcome teacher")
//     }
//     else {
//         alert("Access denied");
//     }
// }
// else if (role === "student") {
//     accUnblocked = confirm("Is your acc unblocked");
//     if (accUnblocked === true){
//         subscrition = confirm("Do you have subscription");
//         if (subscrition === true){
//             alert("Welcome student");
//         }
//         else {
//             alert("Buy subscription");
//             }
//         }
//     else {
//         alert("No subscription");
//     }
// }
// else {
//     alert("Access denied");
// }


//name, count, cost
//disc if user registered, sum 1000+ and promocode = "sale" or vip status. disc 10%, if not - just sum
let registered = confirm("Are u registered");
const status = "vip";
const promocode = "sale";
const disc = 0.1;
let name = prompt("Enter product name");
let count = prompt("Enter product count");
let price = prompt("Enter product price");
let sum = price*count;
if (access === true && sum >= 1000 && (prompt("Enter promo") === "sale" || confirm("Your status") === "vip")) {
    alert("You have a disc in " + sum*disc + " gryven");
}
else {
    alert("You have to pay " + sum + " gryven");
}