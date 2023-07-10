"use strict"

if (4 == 5) {    //Uslovie nachinaetsya s IF
    console.log('OK!');
} else {
    console.log('ERROR!');
}

//const num = 100;

if (num < 49) {
    console.log('Error');
} else if (num >= 100) {
    console.log('mnogo');
} else {
    console.log('OK!');
}
    //1arg         2arg                   3arg         
//(num = 50) ? console.log('OK!') : console.log('Error');  ///Ternarniy argument
//4 + 4 // Binarniy argument
//+'4' //Unarniy argument

//const num = 51;

// switch(num) {
//     case 1:
//         console.log('popal');
//         break;
//     case 39:
//         console.log('popal');
//         break;
//     case 51:
//         console.log('ubit');
//         break;
//     default:
//         console.log('Hodit drugoy polzovatel');
//         break;
// }

//Logicheskie operatori

//const hamburger = 3;
//const fries = 2;
//const cola = 1;

//console.log(hamburger === 3 && fries && cola );

//console.log(1 && 0 );
//console.log(1 && -1 );
//console.log(null && 5 );
//console.log(0 && 'regergerg' );

//if (hamburger === 3 && fries && cola === 1) {
//    console.log('Pokupaem');
//} else {
//    console.log('Uhodim');
//}
// || ILI zapinaetsya na pravde
//console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Pokupaem');
// } else {
//     console.log('Uhodim');
// }

// console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);

// let jonReport, stivReport, mashaReport = 'done';

// console.log((jonReport || stivReport || mashaReport));

// console.log(!2);

// console.log( NaN || null || 2 ); // Ishet i vozvrashaet pervuyu pravdu

// console.log( NaN && 2 && undefined); // Vozvrashaet pervoe znachenie true na kotoroe natknulos

// console.log( 1 && 3 && 2 );  // Vozvrashaet poslednuyu pravdu esli vse pravda

// console.log( !1 && 2 || !3 ); //

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 2;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 1 || fries === 3 && nuggets) {
    console.log('Done!');
}

