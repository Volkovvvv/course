'use strcit';

let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');
     }
}

start();

const  personalMovieDb = {
     count:numberOfFilms,
     movies:{},
     actors:{},
     genres:[],
     privat:false
};


function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const lastWatchedFilm  = prompt('Один из последних просмотренных фильмов?' , '');
        const mark1 = prompt('На сколько оцените его?' , '');
        if(lastWatchedFilm != null && mark1 != null && lastWatchedFilm != '' && mark1 != '' && lastWatchedFilm.length < 50){
             personalMovieDb.movies[lastWatchedFilm] = mark1;
             console.log('done');
        } else {
   
             i--;
        }
   }
   
}
rememberMyFilms();

function detectPersonalLevel (){
    if(personalMovieDb.count < 10){
        console.log('Просмотрено довольно мало фильмов');
   } else if(personalMovieDb.count > 10 && personalMovieDb.count < 30){
             console.log('Вы классический зритель');
        }
        else if(personalMovieDb.count > 30){
             console.log('Вы киноман');
        }
        else{
             console.log('Error');
        }
   
}
detectPersonalLevel();

function showMyDb(hidden){
    if(!hidden){
        console.log(personalMovieDb);
    }
}
showMyDb(personalMovieDb.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDb.genres[i - 1] =  prompt(`Ваш любимый жано под номером ${i}`);
    }
}
writeYourGenres();