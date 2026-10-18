// function isHighScore(score){
//     return score >= 10;
// }
//
// scores = [12, 5, 4, 11, 10, 9]
//
// let highScore = scores.filter(isHighScore);
// console.log(highScore)

// scores = [12, 5, 4, 11, 10, 9]
// let highScore = scores.filter(score => score >= 10);
// console.log(highScore);

// let courses = [
//     {id: 1, title: "HTML", description: "HTML", price: 300, active: false},
//     {id: 2, title: "CSS", description: "CSS", price: 200, active: true},
//     {id: 3, title: "JavaScript", description: "JavaScript", price: 500, active: true},
//     {id: 4, title: "Vue", description: "Vue+JS", price: 600, active: false}
// ]
// let idCourse = +prompt("What is the course?");
// let found = courses.find(course => course.id === idCourse);
// if (found !== undefined) {
//     console.log(found.title);
// } else{
//         console.log("Course not found.");
// }
// let activeCourse = courses.filter(course => course.active === true);
// console.log(activeCourse);
//
// let titleCourse = courses.map(course => course.title);
// let priceCourse = courses.map(course => course.price * 0.9);
// console.log(titleCourse);
// console.log(priceCourse);

// let jsSearch = courses.filter(course => course.description.includes('JS'));
// console.log(jsSearch);

// let books = [
//     {id:1, title: "HTML for beginners", author: "Ivan Komarov", years: 2026, availability: true},
//     {id:2, title: "CSS for beginners", author: "Ivan Good", years: 2025, availability: true},
//     {id:3, title: "JS for beginners", author: "Ivan Bad", years: 2025, availability: true},
//     {id:4, title: "JS + VUE for beginners", author: "Ivan Angry", years: 2023, availability: false},
// ]
//
// let year = +prompt("What year do you want?");
// let existingBooks = books.filter((book) => book.years === year);
// console.log(existingBooks);
// let titleBooks = books.map(book => book.title);
// console.log(titleBooks);
// let search = books.filter(book => book.title.includes("beginners"));
// console.log(search);

// let price = [500, 2000, 700]
// console.log(price.sort((a, b) => a - b))

let books = [
    {id:1, title: "HTML for beginners", author: "Ivan Komarov", years: 2026, availability: true},
    {id:2, title: "CSS for beginners", author: "Ivan Good", years: 2025, availability: true},
    {id:3, title: "JS for beginners", author: "Ivan Bad", years: 2025, availability: true},
    {id:4, title: "JS + VUE for beginners", author: "Ivan Angry", years: 2023, availability: false},
]

// let lowerUpper = [...books.sort((a,b) => a.years - b.years)]
// console.log(lowerUpper)

let availableBooks = books
    .filter(book => book.availability === true)
    .sort((a, b) => a.years - b.years)
    .map(book => `${book.title} - ${book.author}`)
console.log(availableBooks);
