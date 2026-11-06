let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');
enrollBtn.addEventListener("click", function () {
    status.textContent = 'Ви записані на курс!';
    status.classList.add('success');
    enrollBtn.textContent = 'Запис оформлено.';
})

let studentsName = document.querySelector('#studentsName');
let welcome = document.querySelector('#welcome');

studentsName.addEventListener("input", function () {
    let name = studentsName.value.trim();
    if (name === ".") {
        welcome.textContent = "Вітаємо, гостю!"

    }
    else {
        welcome.textContent = "Вітаємо, " +name;
    }
})

let format = document.querySelector('#format');
let price = document.querySelector('#price');

format.addEventListener("change", function () {
    let selectPrice = Number(format.value);
    price.textContent = selectPrice + "грн";
})

let detailBtn = document.querySelector('#detailBtn');
let details = document.querySelector('#details');

detailBtn.addEventListener("click", function () {
    details.classList.toggle('hidden');
    if (details.classList.contains('hidden')) {
        detailBtn.textContent = 'Показати опис'

    }
    else {
        detailBtn.textContent = 'Приховати опис';
    }
})
let card  = document.querySelector('#card');
let themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener("click", function () {
    card.classList.toggle('dark');
    if (card.classList.contains('dark')) {
        themeBtn.textContent = "Світла тема"
    }
    else {
        themeBtn.textContent = "Темна тема"
    }
})