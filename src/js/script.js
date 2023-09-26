




// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('ERROR!');
// }


// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error');



// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!')
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0

// if (hamburger === 3 && cola === 1 && fries ) {
//     console.log('Все сыты')
// } else {
//     console.log('Мы уходим!')
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны')
// } else {
//     console.log('Мы уходим!')
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);






// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i); 
// }



// for (let i = 0; i < 3; i++) {
//     console.log(i);
    
//     for (let j = 0; j <3; j++) {
//         console.log(j);
//     }

// }


// *
// **
// ***
// ****
// *****


// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
        
//     }

//     result += '\n';

// }

// console.log(result);


// let result = '';
// const lenght = 7;

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);

//         for (let j = 0; j < 3; j++) {
//             console.log(`Second level: ${j}`);
        
//             for (let k = 0; k < 5; k++) {
            
//             if (k === 5) continue first;
//                 console.log(`Third level: ${k}`);
//         }
//     }
// }
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}