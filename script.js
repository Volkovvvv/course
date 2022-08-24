'use strcit';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');
let  personalMovieDb = {
     count:numberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
};

const lastWatchedFilm1 = prompt('Один из последних просмотренных фильмов?' , '');
const mark1 = prompt('На сколько оцените его?' , '');
const lastWatchedFilm2 = prompt('Один из последних просмотренных фильмов?' , '');
const mark2 = prompt('На сколько оцените его?' , '');

personalMovieDb.movies[lastWatchedFilm1] = mark1;
personalMovieDb.movies[lastWatchedFilm2] = mark2;

console.log(personalMovieDb);