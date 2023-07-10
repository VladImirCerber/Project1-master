/* Задания на урок:

//+++++++++1) Удалить все рекламные блоки со страницы (правая часть сайта)

//+++++++++2) Изменить жанр фильма, поменять "комедия" на "драма"

//+++++++++3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

        const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };
        
        const promoadv = document.querySelectorAll('.promo__adv img'), //1
                promobg = document.querySelector('.promo__bg'), //2, 3
                genre = promobg.querySelector('.promo__genre'), //2
                promolist = document.querySelector('.promo__interactive-list'), //4
                addForm = document.querySelector('form.add'),
                addInput = addForm.querySelector('.adding__input'),
                checkbox = addForm.querySelector('[type="checkbox"]');
        
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const newFilm = addInput.value;
            const favorite = checkbox.checked;

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

            event.target.reset();
        });
        
        const deleteAdv = (arr) => {
            arr.forEach(item => {  //1
                item.remove();
            });
        };

        const makeChanges = () => {
            genre.textContent = 'драма'; //2

            promobg.style.backgroundImage = 'url("img/bg.jpg")'; //3
        };

        const sortArr = (arr) => {
            arr.sort();
        };
        
        movieDB.movies.sort();

        function createMovieList(films, parent) {
            parent.innerHTML = '';

            films.forEach((film, i) => {
                parent.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        }

        deleteAdv(promoadv);
        makeChanges();
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
    
});
