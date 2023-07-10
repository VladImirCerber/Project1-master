'use strict'

const inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, password);
    request.open('GET', '/Project1-master/Glava5/urok83Ajax/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // request.send(body);
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3); //toFixed - сколько знаков после запятой.
        } else {
            inputUsd.value = "Что то пошло не так";
        }
    });

    //status - коды ошибок (404) 
    // statusText - ОК Not found
    //response - ответ который задал бэкенд разработчик
    //readyState - значение 0-5 done.
});