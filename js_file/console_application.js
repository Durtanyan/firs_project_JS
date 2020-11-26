'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
        while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
            numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 3; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectedPersonalLevel: () => {
        personalMovieDB.count = numberOfFilms;
        (personalMovieDB.count < 10) ? alert('Вы посмотрели мало фильмов.'):
            (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? alert('Вы средний зритель.') :
            alert('Вы много смотрите кино.');
    },
    writeYourGenres: () => {
        for (let i = 0; i <= 2; i++) {
            const answer = prompt(`Ваш любимый жанр номер ${i + 1}: `, '');
            if (answer != '' && answer != null && +isNaN(answer)) {
                personalMovieDB.genres[i] = answer;
            } else {
                i--;
            }
        }
    },
    showMyDB: () => personalMovieDB.private,
    toggleVisibleMyDB: () => {
        let question = confirm(`Будем менять свойство "private" 
        сейчас оно в значении ${personalMovieDB.private}?`);
        if (question === true) {
            personalMovieDB.private = !personalMovieDB.private;
            alert('Просмотр базы данных запрещен.');
            console.log(personalMovieDB.private);

        } else {
            personalMovieDB.private = personalMovieDB.private;
            alert('Просмотр базы данных разрешен.');
        }

    },
    visible: () => {
        if (personalMovieDB.showMyDB() === false) {
            console.log(personalMovieDB);
        } 
    },
    messendge: () => {
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}.`);

        }); 
    },
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.visible();
personalMovieDB.messendge();
