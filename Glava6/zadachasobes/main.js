//Написать функцию, либо последовательность операций, которая вернет результат следующих условий
//Результат есть строка из сконкатенированных значений элементов коллекции, расположенных в обратном порядке букв,
//результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
//результат не содержит одинаковых букв

const input = [
    { value: 'abcd', order: 4, expired: false},
    { value: 'qwer', order: 2, expired: true},
    { value: 'xyz1', order: 1, expired: false},
    { value: 'abx2', order: 3, expired: false}
];

let result = input
            .filter((e1) => !e1.expired)
            .sort((a, b) => a.order - b.order)
            .map(e1 => {
                const str = e1.value;
                return Array.from(str).reverse();
                })
            .flat()
    result = Array.from(new Set(result)).join('')
    

console.log(result);

const x = () => {
    console.log(this);
};


const a = 1.15;
const b = 2.30;

console.log(a + b);

let a = [1,2]

(function() { alert(a)})()

/////////////////

function User() { }
User.prototype = { admin: false };

let user = new User();

User.prototype = { admin: true };

alert(user.admin);

//////////////////

a = [1,2,3];
b = [1,2,3];

c = a == b;

console.log(c);

////////
// Функция sort() в JavaScript по умолчанию сортирует элементы массива как строки. Это означает, что при сортировке чисел, они сначала преобразуются в строки,
//  а затем сравниваются. Это может привести к неверным результатам при сортировке чисел.
// Для того чтобы отсортировать массив чисел корректно, необходимо передать в функцию sort() дополнительный параметр — функцию сравнения.
const array = [1, 25, 55, 77, -5, 108];

array.sort((a,b) => {
    return a - b;
});
console.log(array.sort((a,b) => {
    return a - b;
})
);

/////////////////
// Перебирающие методы массива
//forEach - просто перебирает массив

let arr = ['Яблоко', 'Апельсин', 'Груша', 'Тыква', 'Малина'];

console.log(arr.forEach(function(item, i, arr) {
    console.log(i + ': ' + item + '(massiv: ' + arr + ')');
}));

//filter - создает новый массив, который включает те элементы массива, для которых вызов функции возвратит true

const array = [1, 25, 55, 77, -5, 108];
let polozhArr = array.filter((number) => {
    return number >= 25;
});

console.log(polozhArr);

//map - создает новый массив, состоит из результатов вызова функции, для каждого элемента массива.

const names = ['JS', 'CSS', 'JavaScript', 'HTML'];

let nameLenghts = names.map(function(name) {
    return name.length;
});

console.log(nameLenghts);

//zadacha
let arr = ['Есть', 'жизнь', 'на', 'марсе'];

let result = arr.map(function(name) {
    return name.length;
});

console.log(result);


// every/some - используются для проверки массива. 1- возвращает true если вызов функции вернет true для каждого элемента.
//2- вернет true для любого положительного в массиве.

let arr = [1, -1, 2, -2, 3];

function isPositive(number) {
    return number > 0;
}

console.log(arr.every(isPositive));
console.log(arr.some(isPositive));

//reduce - для последовательной обработки каждого элемента, с сохранением промежуточного результата. Применяет функцию по очереди к каждому элементу слева направо

let arr = [2, 4, 8, 9, 10];

let result = arr.reduce((sum, current) => {
    return sum + current;
},0); // начальное значение InitialValue / Если не указать, первым значением берется первый элемент массива а перебор стартует со второго.

console.log(result - 3);
console.log(result);



function getSums(arr) {
let result = []; 
    if (!arr.length) return result;
    let totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);
    return result;
}

console.log(getSums([1, 2, 3, 4, 5]));

<<<<<<< HEAD
/////////////////

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime; 
    }
    console.log(i);
}

//////////////////

let browser = 'Edge';

if (browser == 'Edge') {
    console.log("You've got the Edge!");
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
} else {
    console.log( 'We hope that this page looks ok!' );
}

/////////////////////

const number = 0;

switch(number) {
    case 0:
        console.log('Вы ввели число 0');
        break;

    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2 или 3');
        break;
} 

//Условия и Логические операторы

let age = 90, first = 14, two = 90;

if (!(age >= first && age <= two)) {
    console.log('Вы вне диапозона');
} else {
    console.log('вы в диапозоне');
    // console.log(`Вы должны находиться от ${first} до ${two}`);
}

//Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».

////////////////////////////



for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(`Простое число: ${i}`);
    }


    ////////////if...else vmesto switch!!!

    let = browser;
        if (browser == 'Edge') {
            alert( "You've got the Edge!" );
        } else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
            alert( 'Okay we support these browsers too' );
        } else {
            alert( 'We hope that this page looks ok!' );
        }

    ////////////////////
   
    function checkAge(age) {
        return (age >= 18) || console.log('roditeli razreshili?');
    }
          
    checkAge(17);

    ///////////////////////
    function minZnach(a, b) {
        return (a < b) ? console.log(a) : console.log(b);
    }

    minZnach(2, 5);
    minZnach(3, -1);
    minZnach(1, 1);

    ///////////////////

    function pow(x, n) {
        let result = x;

        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }

    let x = 1
        
    console.log(x);

    console.log(x.length);


    //////Замыкания 

    const sayHi = (name) => {
        const greeting = 'Hello, my name is';
        return `${greeting} ${name}`
    }

    // console.log(sayHi('Jonh'));

    const Povtor = (greeting) => {
        return (name) => `${greeting} ${name}`
    }

    const sayHi = Povtor('Hello');
    console.log(sayHi('Vova'));


    //Zadacha Polindrom
    console.log('test5', isPallindrome('totot'));

    function isPallindrome (proverka) {
        proverka = proverka.toLowerCase().replace(/\W/g, '');
        const proverkaArray = [...proverka];
        const newArray = [];
        proverkaArray.forEach(element => {
            newArray.unshift(element);
        });
        const reverseProverka = newArray.join('');
        console.log(proverka);
        return proverka === reverseProverka;
    }

    console.log('Test1', isPallindrome('testing'));
    console.log('Test1', isPallindrome('Momom'));
    console.log("Test 7:", isPallindrome("A man, a plan, a canal, Panama!"));


    // let arr1 = ['h','e','l','l','o'];
    // let arr2 = [...arr1];

    // console.log(arr2);

    // function arr(...args) {
    //     let sum = 0;
    //     for (let arg of args) sum += arg;
    //     return sum;
    // }

    // console.log(arr(1,2,3));

    // Функция поиска самого короткого слова

    function findShort(words) {
        var wordsArr = words.split(' ');
        var sortedWordsArr = wordsArr.sort(function(a, b) {
            return a.length - b.length;
        });
        return sortedWordsArr[0];
    }

    console.log(findShort('Thesf Smallest word intrr sentence'));
    console.log(findShort('Just tes ng'));

    //Функция создания инициалов 

    function initials(str) {
        return str.split(/\s+/).map((w,i) => i ? w.substring(0,1).toUpperCase() + '.' : w).join(' ');
    }

    console.log(initials('Серебряков владимир александрович'));
    

    //Замыкания

    // Дочерняя(Вложенная) функция 
    //замыкает внутри себя состояние переменных обьявленных в родительской.
    function Zamikanie() {
        let a = 0;

        function Zamok() {
            a += 1;
            return a;
        }

        return Zamok;
    }


    const res = Zamikanie();
    console.log(res());
    console.log(res());
    console.log(res());

    // Promise - обьект представляющий завершение или неудачу ассинхронной операции и ее результат
    // 3 состояния: Pending(Ожидание) Fullfield (Выполнено) Rejected (Выполнено с ошибкой)

    var a = 5,
        b = 10,
        c = 20;

    let obeshanie = new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (a < b < c) {
                resolve(console.log('Данные верны'));
            } else {
                reject(console.log('Данные не верны проверьте условие'));
            }
        },1000);
    });

    //Удаление повторяющихся чисел

   

    