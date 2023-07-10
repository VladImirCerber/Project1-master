'use strict'

//filter

// const names = ['Ivan' , 'Vladimir' , ' Ksenia' , 'Anna'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map 

// let answers = ['IvAn', 'AnNA', 'HeLLo'];

// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

//every/some

// const some = [4, 5, 6];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [4, 5, 1, 3, 2, 6 ];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);



//Zadachi /////////////////////////////////////////


let films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}



function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0);
}

checkFilms(tranformedArray);



//Zadacha 21////////////////////////////

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
}

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0)
}

getTotalIncomeAmount(funds);