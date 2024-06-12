// 'use strict'

// let obj1 = { name: "vova"}
// let obj2 = obj1;
// console.log(obj2);

// try {
//     let obj1 = { name: "vova"}
//     let obj2 = obj1;
//     obj1.name('update');
//     console.log(obj1);
    
    
  
//   } catch (err) {
  
//     console.log('error');
  
//   }


//   //задача на проверку повторных чисел в массиве и возврат одинарных чисел

//     const arr = [1,2,3,4,5,6,3,7,8,6,7,9,0] 

//     function povtorChisel(array) {
//         const uniqueValue = [];

//         for (let i = 0; i < array.length; i++) {
//             const currentItem = array[i];
//             let count = 0;
//             for (let j = 0; j < array.length; j++) {
//                 if (currentItem === array[j]) {
//                     count++;
//                 }
//             }
//             if (count === 1) {
//                 uniqueValue.push(currentItem);
//             }
//         }
//         return uniqueValue;
        
//     }
    
//     console.log(povtorChisel(arr));


// //Реализовать функцию, которая будет суммировать числаи выводить в логи
// //Пример Sum(5)(4)(11)

// //  result log
// //      5
// //      9
// //      20

// function sum(n) {
//     console.log(n)
//     return function (a) {
//         return sum(a + n)
//     };
// }

// sum(5)
// console.log('________')
// sum(5)(4)(11)


// //sortirovka chisel

// var arr = [2, 4, 3, 9, 7, 1000, 10000000, 100, 17]

// let result = map.((num, 5, arr) => {
//     return num = 1234;
// });
// console.log(result);


// // promise

// const x = new Promise((resolve, reject) => {
//     resolve(10);
// })

// console.log(x);

// // 

// 5 == '5';

// console.log(5 == '5');

// console.log(typeof f1);
// console.log(typeof f2);
// // console.log(typeof f3);

// // function f1 () {}
// var f2 = function () {};
// // let f3 = function () {};

// // console.log(typeof f1);
// console.log(typeof f2);
// // console.log(typeof f3);

// //chto vivedet

// var o = {};
// var i = 0;

// (function () {
//     o.a = 'a';
//     i++;
// })();
// console.log(o, i);

// (function (o,i) {
//     o.b = 'b';
//     i++;
//     console.log(i);
// })(o,i);
// console.log(o, i);

// /////////

// var o = {}
// var a = []

// console.warn(o == a)
// console.warn(o === a)
// console.warn(typeof o == typeof a)
// console.warn(typeof o === typeof a)

// /////

// let age = 90;
// if (age < 14 || age > 90) {
//     console.log('Не находится в диапозоне!!!');
// } else {
//     console.log('попадает!!!')
// }

/////

let userName = prompt('Kto tam?');

if (userName === 'Admin') {
    let pass = prompt('parol?','');

    if (pass === "I am boss") {
        alert('Hello Boss');
    } else if (pass === '' || pass === null) {
        alert('otkazano!!!');
    } else {
        alert('oshibsya!');
    }
} else if (userName === '' || userName === null) {
    alert('Nazovi sebya!?');
} else {
    alert('Ya vas ne znayu!');
}