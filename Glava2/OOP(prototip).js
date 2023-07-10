"use strict";


// let a = 1.15,
//     b = 2.30;

// console.log(a + b);

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

// const soldier = {
//     health: 100,
//     armor: 200,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = {
//     health: 70
// };

// john.__proto__ = soldier;

// console.log(john.armor);
// john.sayHello();
//Ustarelo


//nOvoe

const soldier = {
    health: 100,
    armor: 200,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); //Создание проттотипа связи

// const john = {
//         health: 70
//     };

Object.setPrototypeOf(john, soldier) //Новое свойство использовать его!
// console.log(john.armor);
john.sayHello();

