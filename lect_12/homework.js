let courses = [
    {id: 1, title: "HTML прикольний", category: "Frontend", price: 1200, duration: 20, rating: 4.7, available: true},
    {id: 2, title: "CSS і верстка", category: "Frontend", price: 1500, duration: 25, rating: 4.5, available: true},
    {id: 3, title: "JavaScript супер базовий", category: "Frontend", price: 2500, duration: 40, rating: 4.9, available: true},
    {id: 4, title: "Vue.js Розробка", category: "Frontend", price: 3200, duration: 45, rating: 4.8, available: false},
    {id: 5, title: "Python для хороших штучок", category: "Data Science", price: 2800, duration: 50, rating: 4.6, available: true},
    {id: 6, title: "UI/UX. Дизайн з нуля!", category: "Design", price: 2000, duration: 30, rating: 4.4, available: true},
    {id: 7, title: "Node.js та бази даних", category: "Backend", price: 3500, duration: 55, rating: 4.3, available: false},
    {id: 8, title: "Figma для найкращого вебдизайнера", category: "Design", price: 1000, duration: 15, rating: 4.8, available: true}
];

function formatCourses(list) {
    if (list.length === 0) {
        return "Курса немааа";
    }
    return list
        .map(course => `ID: ${course.id}, ${course.title} (${course.category}) ${course.price} грн, рейтинг: ${course.rating}, ${course.duration} год, доступний: ${course.available}`)
}

function findCourseById() {
    let idCourse = +prompt("Введіть ID:");
    if (isNaN(idCourse) || idCourse <= 0) {
        alert("Помилка!");
        return;
    }

    let found = courses.find(course => course.id === idCourse);
    if (found !== undefined) {
        console.log(found);
        alert(`Назва: ${found.title}\nКатегорія: ${found.category}\nЦіна: ${found.price} грн\nТривалість: ${found.duration} год\nРейтинг: ${found.rating}\nДоступний: ${found.available}`);
    } else {
        console.log("курса немаа");
        alert("Курс із таким ID нема");
    }
}


function filterByCategory() {
    let categoryInput = prompt("Введіть категорію");
    if (!categoryInput || categoryInput.trim() === "") {
        alert("нема назви категорії!");
        return;
    }

    let result = courses.filter(course => course.category.toLowerCase() === categoryInput.trim().toLowerCase());
    console.log(result);
    alert(formatCourses(result));
}

function filterByMaxPrice() {
    let maxPrice = +prompt("Введіть макс. вартість курсу");
    if (isNaN(maxPrice) || maxPrice < 0) {
        alert("помилка!");
        return;
    }

    let result = courses.filter(course => course.price <= maxPrice);
    console.log(result);
    alert(formatCourses(result));
}


function searchByTitle() {
    let searchWord = prompt("Введіть частину назви для пошуку");
    if (!searchWord || searchWord.trim() === "") {
        alert("помилкаа");
        return;
    }

    let result = courses.filter(course =>
        course.title.toLowerCase().includes(searchWord.trim().toLowerCase())
    );
    console.log(result);
    alert(formatCourses(result));
}



function getCourseTitles() {
    let titleCourses = courses.map(course => course.title);
    console.log(titleCourses);
    alert("Назви всіх курсів:\n " + titleCourses.join("\n "));
}

function getDiscountedCourses() {
    let priceCourses = courses.map(course => ({
        title: course.title,
        discountPrice: course.price * 0.85
    }));
    console.log(priceCourses);

    let output = priceCourses
        .map(item => `${item.title}: ${item.discountPrice}`)
    alert("Курси зі знижкою:\n" + output);
}

function sortByPriceAsc() {
    let sortedByPrice = [...courses].sort((a, b) => a.price - b.price);
    console.log(sortedByPrice);
    alert("Курси за зростанням вартості:\n" + formatCourses(sortedByPrice));
}


function sortByRatingDesc() {
    let sortedByRating = [...courses].sort((a, b) => b.rating - a.rating);
    console.log(sortedByRating);
    alert("Курси за спаданням рейтингу:\n" + formatCourses(sortedByRating));
}



function sortByTitleAlphabetical() {
    let sortedByTitle = [...courses].sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        return 0;
    });
    console.log(sortedByTitle);
    alert("Курси в алфавітному порядку:\n" + formatCourses(sortedByTitle));
}



function calculateAvailablePrices() {
    let availableCourses = courses.filter(course => course.available === true);

    if (availableCourses.length === 0) {
        alert("нічо зараз нема");
        return;
    }

    let total = 0;
    let prices = availableCourses.map(course => course.price);
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    let average = total / availableCourses.length;

    console.log(`всього: ${total}, середнє: ${average}`);
    alert(`доступні ${availableCourses.length}:\n вартість: ${total} грн\nсередня вартість: ${average.toFixed(2)}`);
}


let continueWork = true;

do {
    let choice = prompt(
        "КАТАЛОГ ОНЛАЙН-КУРСІВ! Виберіть дію:\n" +
        "1. Пошук курсу за ID\n" +
        "2. Вивести курси вибраної категорії\n" +
        "3. Пошук курсів за максимальною ціною\n" +
        "4. Пошук курсів за частиною назви\n" +
        "5. Показати лише назви всіх курсів\n" +
        "6. Показати курси та ціни зі знижкою 15%\n" +
        "7. Сортувати курси за зростанням вартості\n" +
        "8. Сортувати курси за спаданням рейтингу\n" +
        "9. Сортувати курси за алфавітом\n" +
        "10. Загальна та середня вартість доступних курсів"
    );
    if (choice === null) {
        break;
    }

    switch (+choice) {
        case 1:
            findCourseById();
            break;
        case 2:
            filterByCategory();
            break;
        case 3:
            filterByMaxPrice();
            break;
        case 4:
            searchByTitle();
            break;
        case 5:
            getCourseTitles();
            break;
        case 6:
            getDiscountedCourses();
            break;
        case 7:
            sortByPriceAsc();
            break;
        case 8:
            sortByRatingDesc();
            break;
        case 9:
            sortByTitleAlphabetical();
            break;
        case 10:
            calculateAvailablePrices();
            break;
        default:
            alert("веди нормальне число!");
    }

    continueWork = confirm("на головну хочеш?");
} while (continueWork);

alert("Дякую за користування каталогом!");