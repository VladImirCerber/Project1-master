'use strict'

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/ig;
// console.log(ans.match(reg));
//\d
//i
//g
//m
// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, "*"));

// console.log('13-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';

console.log(str.match(/\W\d\W\d/i));

// Не числа не буквы
// \D
// \W