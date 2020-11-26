let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

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
    (personalMovieDB.count < 10) ? alert('Вы посмотрели мало фильмов.'):
        (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? alert('Вы средний зритель.') :
        alert('Вы много смотрите кино.');
}

function writeYourGenres(){
    for (let i = 0; i <= 2; i++ ) {
        const answer = prompt(`Ваш любимый жанр номер ${i + 1}: `, '');
        if (answer != '' && answer != null && +isNaN(answer)) {
            personalMovieDB.genres[i] = answer;
        } else {
            i--;
        }
    }
}

let showMyDB = () => personalMovieDB.private;

if (showMyDB() === false) {
    start();
    rememberMyFilms();
    writeYourGenres();
    detectedPersonalLevel();
    console.log(personalMovieDB);
}
