'use strict'

localStorage.setItem('number', 5);

localStorage.getItem('number');
console.log(localStorage.getItem('number'));

localStorage.removeItem('number');
localStorage.clear();

console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
        change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    
});