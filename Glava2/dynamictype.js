"use strict"

//To String

//1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2) Конкатинация - когда мы что то складываем со строкой

console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

//1)

console.log(typeof(Number('4')));

//2)

console.log(typeof(+'5'));

//3)

console.log(typeof(parseInt("15px", 10)));


let answer = +prompt("Hello", ""); // Все что мы получаем от пользователя всегда будет типом строка!!!

// To boolean

//0, '', null, undefined, NaN; //false

//1) Способ логических преобразований
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2) Способ логических преобразований

console.log(typeof(Boolean('4')));

//3)

console.log(typeof(!!"44444")); // 2 знака отрицания тоже Boolean