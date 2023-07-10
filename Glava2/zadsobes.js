"use strict"

//Задачи с собеседований!!!
//1)
let x = 5;
alert(x++); //Postfiksnaya
//Вывод = 5

//2)
[ ] + false - null + true
console.log([] + false - null + true); //string 'false'

//3)

let y = 1;
let x = y = 2; // Последовательное присваивание
console.log(x);

//4)

sum = [] + 1 + 2;  // '12'
console.log(typeof(sum));  

//5)

console.log("12345"[3]); // вызывает элемент по порядку начиная с 0

//6)

console.log(22 && 1 && null && 0 && undefined); // И запинается на лжи
// ИЛИ запинается на правде

//7)

console.log(!!(1 && 2) === (1 && 2)); // !! Превращает в значение Boolean

//8)

console.log(null || 2 && 3 || 4);

//9)

let a = [1, 2, 3],
    b = [1, 2, 3];
console.log(a === b);

//10)

console.log(typeof(+"4"));

//11)

console.log("Ежик" > "Яблоко");

//12)

console.log(0 || "" || 2 || undefined || true || false);

