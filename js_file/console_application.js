'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function detectedPersonalLevel() {
    personalMovieDB.count = numberOfFilms;
    (personalMovieDB.count < 10) ? alert('Вы посмотрели мало фильмов.'):
        (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? alert('Вы средний зритель.') :
        alert('Вы много смотрите кино.');
}

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        const answer = prompt(`Ваш любимый жанр номер ${i + 1}: `, '');
        if (answer != '' && answer != null && +isNaN(answer)) {
            personalMovieDB.genres[i] = answer;
        } else {
            i--;
        }
    }
}

let showMyDB = () => personalMovieDB.private;

function toggleVisibleMyDB() {
    let question = confirm(`Будем менять свойство "private" 
    сейчас оно в значении ${personalMovieDB.private}?`);
    if (question === true) {
        personalMovieDB.private = !personalMovieDB.private;
        alert('Просмотр базы данных запрещен.');

    } else {
        personalMovieDB.private = personalMovieDB.private;
        alert('Просмотр базы данных разрешен.');
    }

}

toggleVisibleMyDB();
start();

if (showMyDB() === false) {
    rememberMyFilms();
    writeYourGenres();
    detectedPersonalLevel();
    console.log(personalMovieDB);
} else {
    rememberMyFilms();
    writeYourGenres();
    detectedPersonalLevel();
}
