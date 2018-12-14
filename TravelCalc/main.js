const logo = document.getElementsByClassName('t446__logo t-title');

let colors = [
    'red',
    'blue',
    'orange',
    'green'
]

let currentIndex = 0;

function switcher(data, element) {
    element.addEventListener('click', element.style.color = data[currentIndex]);
    currentIndex ++;
    if (currentIndex === data.length-1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
}

let outlay = [
    {
        name: 'Виза на въезд',
        price: 35,
        daily: 'false'
    },
    {
        name: 'Проживание',
        price: 5,
        daily: 'true'
    },
    {
        name: 'Питание',
        price: 5,
        daily: 'true'
    },
    {
        name: 'Связь',
        price: 5,
        daily: 'false'
    },
    {
        name: 'Индийская виза',
        price: 60,
        daily: 'false'
    }
]

function countBudget(expenses, days) {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].daily = 'true') {
            sum += expenses[i].price * days
        }
        if (expenses[i].daily = 'false') {
            sum += expenses[i].price
        }
        console.log(sum);
    }
    console.log('TOTAL: ' + sum);
}