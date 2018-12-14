let outlay = [
    {
        name: 'Виза на въезд',
        price: 35,
        daily: false
    },
    {
        name: 'Проживание',
        price: 5,
        daily: true
    },
    {
        name: 'Питание',
        price: 5,
        daily: true
    },
    {
        name: 'Связь',
        price: 5,
        daily: false
    },
    {
        name: 'Индийская виза',
        price: 60,
        daily: false
    }
]

function countBudget(expenses, days) {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].daily) {
            sum += expenses[i].price * days;
        } else {
            sum += expenses[i].price;
        }
        console.log(expenses[i].name + ': $' + sum);
    }
    console.log('TOTAL: $' + sum);
}

countBudget(outlay, 30);