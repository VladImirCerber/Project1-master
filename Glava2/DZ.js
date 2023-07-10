"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Skolko filmov vi uzhe posmotreli?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Skolko filmov vi uzhe posmotreli?", "");
        } 
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Odin iz poslednih prosmotrenih filmov?", ""),
                b = prompt("Naskolko ocenite ego?", "");
        
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                    } else {
                        console.log('error');
                        i--;
                    }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Prossmotreno malo filmov');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Vi klassicheskiy zritel');
        } else if (personalMovieDB.count >= 30) {
            console.log('Vi kinoman!!!');
        } else {
            console.log('Proizoshla oshibka');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    tooggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
        personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 2; i++) { 
            // let genre = prompt(`Vash lubimiy zhanr ${i}`);

            // if (genre == '' || genre == null) {
            //     console.log('Вы ввели некоректные данные! Введите данные');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase;

            if (genres == '' || genres == null) {
                    console.log('Вы ввели некоректные данные! Введите данные');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};
