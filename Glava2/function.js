"use strict";

let num = 20; //Globalnaya peremenaya

function showFirstMessage(text) {
    console.log(text);
    let num = 10; //Localnaya peremenaya (vnutri function)
    console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {  //function declaration
    console.log("Hello");
};

logger();

//Strelochnaya fuunction

const calc = (a, b) => {
       console.log('1');
       return a + b;
};

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

//26 urok (dopolnitelniy)

const usdCurs = 28;
const eurCurs = 78;
const discount = 0.9;

function convert (amount, curr) { //ne dolzhni povtoryat kod gde mozhno etogo ne delat
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
    return undefined;
}

const res = convert(500, usdCurs)

promotion(res);
//////

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing(){};
console.log(doNothing() === undefined);

convert(500, usdCurs);
convert(500, eurCurs);

//Zadanie na rabotu s function
// 1) Создайте функцию, которая будет на вход принимать 1 аргумент 
//с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". 
//В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

function sayHello(name) {
    return `Privet, ${name}!`;
}

sayHello('Anton');

// 2) Создайте функцию, которая принимает в себя 1 аргумент 
//в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше,
// сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

//Zadanie 3
// Создайте функцию, которая будет принимать в себя 2 аргумента,
//  оба числа. Первое число - это база, второе число - 
//  это сколько раз нужно будет повторить это число в прогрессии. 
//  (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже),
//   где эти числа идут по порядку, разделенные тремя дефисами "---". 
//   После последнего числа их не должно быть.

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
    }

    getMathResult(10,5);