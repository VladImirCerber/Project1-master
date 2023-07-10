'use strict'

// let number = 5; debugger

// function logNumber() {

//     console.log(number); debugger //Внутренее лексическое окружение содержит локальные переменные
// }

// number = 6; // внешнее снаружи

// logNumber(); debugger

// number = 8; // внешнее снаружи

// logNumber(); debugger

function createCounter() {
    let counter = 0;

    const myFunction = function() {debugger
        counter = counter + 1; debugger
        return counter; debugger
    }

    return myFunction;
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);

{
    let msg = 'Hello';

}

console.log(msg);

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {  //Лексическое окружение может  существовать внутри любых скобок
        let num = 3;
        return num;
    }
    
}

console.log(num);

const result = getSum(5, 6);
const getSum = function(a, b) {
    return a + b;
}