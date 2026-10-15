let activityList = [
    {
        id: 1,
        name: "програмування в стійці на руках із закритими очима",
        category: "IT",
        price: 1000,
        members: 15,
        active: true
    },
    {
        id: 2,
        name: "основи вчителювання в стилі Івана Юрійовича (а точніше ію)",
        category: "IT",
        price: 1500,
        members: 10,
        active: false
    },
    {
        id: 3,
        name: "синхронне плавання",
        category: "Спорт",
        price: 800,
        members: 20,
        active: true
    },
    {
        id: 4,
        name: "малювання маркерами на стінах",
        category: "Мистецтво",
        price: 600,
        members: 8,
        active: true
    },
    {
        id: 5,
        name: "жіноча парна акробатика",
        category: "Спорт",
        price: 500,
        members: 12,
        active: false
    }
];

let menuSelection;
do {
    menuSelection = +prompt(
        `КАТАЛОГ ГУРТКІВ
        1 - Показати всі гуртки
        2 - Знайти гурток за ID
        3 - Записати учасника
        4 - Змінити статус набору
        5 - Додати новий гурток
        6 - Показати статистику
        0 - Вихід`
    );

    if (menuSelection === 0 || menuSelection === null) {
        break;
    }

    switch (menuSelection) {

        case 6:
            if(activityList.length === 0){
                alert("Каталог порожній зроби нормально щось!");
            } else {
                let totalQuantity = activityList.length;
                let openCount = 0;
                let allParticipants = 0;
                let allPricesSum = 0;

                for(let activity of activityList){
                    if(activity.active === true){
                        openCount++;
                    }
                    allParticipants += activity.members;
                    allPricesSum += activity.price;
                }
                let meanPrice = allPricesSum / totalQuantity;
                alert(`Статистика:
                Кількість: ${totalQuantity}
                Відкритих гуртків: ${openCount}
                Кількість учасників: ${allParticipants}
                Середня ціна: ${meanPrice} грн`);
            }
            break;

        case 5:
            let inputTitle = prompt("введи назву гуртка на який хочеш:");
            if(!inputTitle || inputTitle.trim() === ""){
                alert("Error");
                break;
            }
            let inputSector = prompt("введіть напрям:");
            if(!inputSector || inputSector.trim() === ""){
                alert("Error");
                break;
            }
            let inputCost = +prompt("введи нову ціну яку бажаэш поставити:");
            if(isNaN(inputCost) || inputCost < 0){
                alert("Error");
                break;
            }
            let inputParticipants = +prompt("введи нових учасників:");
            if(isNaN(inputParticipants) || inputParticipants < 0){
                alert("Error");
                break;
            }

            let createdId = 1;
            for(let activity of activityList){
                if(activity.id >= createdId){
                    createdId = activity.id + 1;
                }
            }

            activityList.push({
                id: createdId,
                name: inputTitle,
                category: inputSector,
                price: inputCost,
                members: inputParticipants,
                active: true
            });

            alert("все супер ура!");
            break;

        case 4:
            let targetStatusId = +prompt("введіть ID для зміни статусу:");
            let activityToToggle = null;

            for(let activity of activityList){
                if(activity.id === targetStatusId){
                    activityToToggle = activity;
                    break;
                }
            }

            if(activityToToggle !== null){
                if(confirm(`змінити статус для "${activityToToggle.name}"?`)){
                    activityToToggle.active = !activityToToggle.active;
                    alert(`все вийшло! тепер буде статус: ${activityToToggle.active}`);
                }
            } else {
                alert("такого гуртка нема!!!!");
            }
            break;

        case 3:
            let enrollTargetId = +prompt("введіть ID гуртка для запису:");
            let activityToEnroll = null;

            for(let activity of activityList){
                if(activity.id === enrollTargetId){
                    activityToEnroll = activity;
                    break;
                }
            }

            if(activityToEnroll !== null){
                if(activityToEnroll.active === true){
                    if(confirm(`хочеш підтвердити запис у "${activityToEnroll.name}"?`)){
                        activityToEnroll.members++;
                        alert(`всьо по новому, тепер: ${activityToEnroll.members} учасників`);
                    }
                } else {
                    alert("більше нема місцб!!!");
                }
            } else {
                alert("такого гуртка нема!!!!");
            }
            break;

        case 2:
            let searchItemById = +prompt("Введіть ID гуртка:");
            let discoveredActivity = null;

            for(let activity of activityList){
                if(activity.id === searchItemById){
                    discoveredActivity = activity;
                    break;
                }
            }

            if(discoveredActivity !== null){
                alert(`ID: ${discoveredActivity.id}
                Назва: ${discoveredActivity.name}
                Напрям: ${discoveredActivity.category}
                Ціна: ${discoveredActivity.price} грн
                Кількість учасників: ${discoveredActivity.members}
                Статус набору: ${discoveredActivity.active}`);
            } else {
                alert("такого гуртка нема!!!!");
            }
            break;

        case 1:
            if(activityList.length === 0){
                alert("ваще нічого нема тут");
            } else {
                let displayString = "";
                activityList.forEach(activity => {
                    displayString += `ID: ${activity.id}
                    Назва: ${activity.name}
                    Напрям: ${activity.category}
                    Ціна: ${activity.price} грн
                    Кількість учасників: ${activity.members}
                    Статус набору: ${activity.active}\n\n`;
                });
                alert(displayString);
            }
            break;

        default:
            alert("Error");
            break;
    }
} while (menuSelection !== 0);