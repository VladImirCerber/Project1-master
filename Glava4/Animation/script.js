'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation;
let macAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {transform: 'translateX(0) rotate(0deg)',
            filter: 'opacity(100%)'},
            {transform: 'translateX(20px) rotate(180deg)',
            filter: 'opacity(50%)'},
            {transform: 'translateX(-20px) rotate(270deg)',
            filter: 'opacity(75%)'},
            {transform: 'translateX(0) rotate(360deg)',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});

btnMacbook.addEventListener('click', () => {
    if (!macAnimation) {
        macAnimation = images[1].animate([
            {transform: 'translateY(0) rotate(0deg)',
            filter: 'opacity(100%)'},
            {transform: 'translateY(100px) rotate(180deg)',
            filter: 'opacity(50%)'},
            {transform: 'translateY(-100px) rotate(270deg)',
            filter: 'opacity(75%)'},
            {transform: 'translateY(0) rotate(360deg)',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (macAnimation.playState === 'paused') {
        macAnimation.play();
    } else {
        macAnimation.pause();
    }
});