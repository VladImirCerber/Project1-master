"use strict"

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //получаем все узлы
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild); // получаем первого ребенка который является элементом
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode); // получаем родителя

// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}