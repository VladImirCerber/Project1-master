"use strict"

const box = document.getElementById('box'), //Получает один элемент 
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'), //Получить все элементы класса (псевдомассивы)
//Современные методы
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'), //Нужна точка если ищем класс /если ищем id то ставить #
    oneHeart = wrapper.querySelector('.heart'); //Получает первый попавшийся элемент
    

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = `background-color: blue; width: 500px`

btns[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'red'; //Нужно выбирать конкретный элемент

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);

// hearts[0].before(div);

// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[1].remove();
// wrapper.removeChild(hearts[1]);

// hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

//Вписываем текст в блок

div.innerHTML = "<h1>Hello world</h1>"; //когда используешь html структуру

// div.textContent = 'Hello world';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')