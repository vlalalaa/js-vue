let number = +prompt("Enter number of students:");
let sum = 0;
let highGrade = 0;
let lowGrade = 0;
let maxGrade = 0;
while (number < 1 || Number.isNaN(number)) {
    number = +prompt("Enter correct number!!:");
}
for (let i=1; i<=number; i++) {
    let grade = +prompt("Enter grade for student number " + i);
    while (Number.isNaN(grade) || grade < 1 || grade > 12) {
        grade = +prompt("Enter correct grade!");
    }
    sum += grade;
    if (grade > maxGrade) {
        maxGrade = grade;
    }
    if (grade < 7) {
        lowGrade++;
    }
    else if (grade >= 7) {
        highGrade++;
    }
}
console.log("Total sum: " + sum);
console.log("Average: " + sum/number);
console.log("Grades 7 and higher: " + highGrade);
console.log("Grades lower than 7: " + lowGrade);
console.log("Max grade: " + maxGrade);