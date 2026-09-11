// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
//
// for (let i = 10; i <= 10; i += 2) {
//     console.log(i);
// }
//
// for (let i = 20; i > 0; i--) {
//     console.log(i);
// }

// let count = 0;
// for (let i = 20; i > 0; i--) {
//     count += i;
// }
// console.log(count);
//
// let sum = 0;
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);


//--------1
// for (let i = 1; i <= 100; i++){
//     if (i %  5 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }

//--------2
// for(let i = 1; i <= 100; i++){
//     if (i >25 && i % 4 === 0 && i % 6 === 0){
//         console.log(i);
//         break
//     }
// }

//--------3
// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//--------4
// let student = +prompt('Enter student count');
// let sum = 0, goodGrade = 0, badGrade = 0, maxGrade = 1, minGrade = 12;
// for (let i = 1; i <= student; i++){
//     let grade = prompt('Enter grade of sudent ' + i);
//     if (!(grade >= 1 && grade <= 12)){
//         alert("Error");
//         i--
//         continue;
//     }
//     sum += grade;
//     if (i <= 7){
//         badGrade ++;
//     }
//     else {
//         goodGrade ++;
//     }
//     if (grade > maxGrade){
//         maxGrade = grade;
//     }
//     if (grade < minGrade){
//         minGrade = grade;
//     }
//
// }
// console.log(sum);
// console.log(goodGrade);
// console.log(badGrade);
// console.log(maxGrade);
// console.log(minGrade);

//---------hw
let student = +prompt('Enter student count');
let firstMaxGrade = null, sum = 0, highGrade = 0, goodGrade = 0, badGrade = 0, maxGrade = 1, minGrade = 100;
for (let i = 1; i <= student; i++) {
    let grade = +prompt('Enter grade of sudent ' + i);
    if (!(grade >= 0 && grade <= 100)){
        alert("Error");
        i--
        continue;
    }
    sum += grade;
    if (grade === 100 && firstMaxGrade === null) {
        firstMaxGrade = i;
    }
    if (grade <= 60){
        badGrade ++;
    }
    else if (grade <= 89) {
        goodGrade ++;
    }
    else{
        highGrade ++;
    }

    if (grade > maxGrade){
        maxGrade = grade;
    }
    if (grade < minGrade){
        minGrade = grade;
    }
}
let avgGrade = sum/student;
console.log(avgGrade);
console.log("Good grade count: " + goodGrade);
console.log("Bad grade count: " + badGrade);
console.log("High grade count: " + highGrade);
console.log("Max grade is " + maxGrade);
console.log("Min grade is " + minGrade);
console.log("first max grade is found! its number is " + firstMaxGrade);