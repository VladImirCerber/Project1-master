"use strict"

// let num = 50;

// while(num < 55) {
//     console.log(num);
//     num++;
// }                                     //цикл - пока выполняется выполнить какое то действие

// do {                                     //цикл do
//     console.log(num);
//     num++;
// }
// while (num < 55);
// let num = 50;
// for (let i = 1; i < 8; i++) {                         //цикл for (задается переменная; условие при котором завершится; шаг цикла;)
//     if (i == 6) {
//         //break;
//         continue;
//     }
    
//     console.log(i);
//     num++;
// }

//ЦИКЛ ВНУТРИ ЦИКЛА

// for (let i = 0; i < 3; i++) { 
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);

//     }
// }

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);

// first: for (let i = 0; i < 3; i++) { 
//         console.log('First level: ${i}');
//         for (let j = 0; j < 3; j++) {
//             console.log('Second level: ${j}');
//             for (let k = 0; k < 3; k++) {
//                 if (k === 2) break first;
//                 console.log('Third level: ${k}');
    
//         }
//     }
// }



//Uprazhnenie 3
//Zadanie 1
let num = 5;

while (num<=10) {
    console.log(num);
    num++;
}

//Zadanie 2
for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
}

//Zadanie 3
for (let i = 2; i <= 10; i++) {
    console.log(i++);
}

//Zadanie 4
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }

//Zadanie 5
const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++){
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers[4])
console.log(arrayOfNumbers);
return arrayOfNumbers;

//Dopolnitelniye zadaniya
//Zadanie 1
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);
return result;

//Zadanie 2
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }
    
    
    console.log(data);
    return data;
}

//Zadanie 3
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;


