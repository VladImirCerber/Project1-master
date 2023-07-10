"use strict"

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //Ссылка на существующий обьект

// copy.a = 10; //работаем не ссылкой а с изначальным обьектом

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //создали поверхностную копию обьекта, глубокие же меняются вместе с основным обьектом

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'kaktak';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook']; //spread operatori


console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(q);

//ZADACHI
//////////////////////////////////////////////////////
//1) Напишите функцию showExperience, 
//которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
//2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными
// и возвращать строку в нужном виде.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
        str += `${lang.toUpperCase()}`;
    });

    return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);

//Zadachi
///////////////////////////////////////////////////////////////////
//1) Напишите функцию showFamily, которая будет принимать в себя массив строк
// и возвращать сообщение в нужном формате.
//showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(member => {
        str += ` ${member}`
    });

    return str;
}

//напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
//и будет выводить в консоль эти строки в нижнем регистре.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

//3) Задача с собеседований. Напишите функцию reverse, 
//которая принимает в себя строку и возвращает эту строку в обратном порядке.

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string') {
        return "Ошибка!";
    }

    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
    console.log(newStr);
}

reverse(someString);


//4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух
// разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный
// с прочими валютами:
//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
//первый - это массив со всеми доступными валютами из двух банков сразу 
//(сейчас представим, что они не могут повторяться), 
//второй - необязательный аргумент, который указывает ту валюту, 
//которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - 
//то функция возвращает строку 'Нет доступных валют'. 
//Функция возвращает строку в нужном виде.

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют!' : str = 'Доступные валюты: \n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}


///Zadachi 2.13
////////////////////////////////////////////////
//Объекты и массивы

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}


////////////////////////////////////////////////////////////
//У вас есть список учеников, которые хотят поиграть в игру:
//Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает 
//в себя массив строк. Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников 
//по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. 
//Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}
