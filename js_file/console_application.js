const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 3; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

(personalMovieDB.count < 10) ? alert('Вы посмотрели мало фильмов.'):(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? alert('Вы средний зритель.') : alert('Вы много смотрите кино.');

console.log(personalMovieDB);
