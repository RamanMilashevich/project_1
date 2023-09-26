




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





// циклы - for / while 
// for in 
// for of

// let num = 20;

//  function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
//  }

//  showFirstMessage("Hello World!");
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }
 
// const anotherNum = ret();
// console.log(anotherNum);

// FUNCTION EXPRESSION - let less = function() {}; - Создаётся только тогда когда доходит поток кода,  можно вызвать только после объявленияю

// const logger = function() {
//     console.log('Hello');
// };
// logger();


// Стрелочные функции () => - Не имеет своего контекста (this)

// const calk = (a, b) => a + b;

// const pussy = (a, b) => {
//     console.log('a');
//     return a + b;
// };


//Аргументы функции 

// const usdCurr = 28;
// const discount = 0.9;


// function convert(amount, curr) {
//     return curr * amount;
// }


// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++) {
//             console.log(i);
//             if (i === 3) return
//         }
//             console.log('Done');
// }

// test();

// function doNothing() {};
//     console.log(doNothing() === undefined);


// // Методы и свойства у строк и чисел:
// // Методы - это вспомогательные функции;
// // Свойства- это вспомогательные значения;


// const str = "teSt";

// // console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));




// const bigger = "pyssu jussy nou hi mother";
 
// console.log(bigger.slice(16, 18));


// const bigger_1 = "pyssu jussy nou hi mother";
 
// console.log(bigger_1.slice(16, 18));

// const nue = "bigger bigger";
// console.log(nue.substr(6, 5));


// const num_1 = 12.2;

// console.log(Math.round(num_1));


// const test = "12.2px";
// console.log(parseInt(test)); 



/* Задание на урок:

1) Первую часть задания посторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы;
3) Создать функцию writeYourGenres в которой цпользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данныз genres

*/

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', '').trim(),
              score = prompt('На сколько оцените его?', '');

        const isFilmValid = (film != null && film != '' && film.length < 50);
        const isScoreValid = score != null  && score != '';

        if (isFilmValid && isScoreValid) {
            personalMovieDB.movies[film] = score;
            console.log('done');
        } else {
            console.log('error');
            i--;

        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}


detectPersonalLevel();




function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;

//     }
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();





