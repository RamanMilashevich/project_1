'use strict';

// function hello() {
//     console.log("Hello world");
// }
// hello();

// function hi() {
//     console.log('Say hi!');
// }
// hi();

// const arr = [1, 14, 4, 30, 54];
// const sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);


// // To string - превращение в строку 

// // 1) 
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2) конкритинация - сложение строки с чем-то выводит string, так как значение превращается в string

// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // To number - превращение строки в число 

// // 1)
// console.log(typeof(Number('4')));

// // 2) превращение строки в number с помощью оператора +

// console.log(typeof(+'5'));

// // 3) превращение с помощью метода parseInt

// console.log(typeof(parseInt("15px", 10)));




// let answ = +prompt('Hello', "");

// // to booleen

// // 0, '', null, undefined, NaN; - false

// // 1) способ нативного преобразования.
// let swither = null;

// if (swither) {
//     console.log('Working...')
// }

// swither = 1; // 1 - в логическом контексте true

// if (swither) {
//     console.log('Working...')
// }

// // 2) способ 

// console.log(typeof(Boolean('4')));

// // 3 Способ  

// console.log(typeof(!!'4'));

// Замыкание и лексическое окружение

let number = 5; debugger
 
function logNumber() {
    let number = 4; debugger
    console.log(number);
}

number = 6;

logNumber(); debugger

// Лексическое окружение 


function createCounter() {
     let counter = 0;

     const myFunction = function() {
        counter = counter + 1;
        return counter;
     }

     return myFunction;
}

const increment = createCounter(); 

const c1 = increment();
const c2 = increment();
const c3 = increment();


console.log(c1, c2, c3);

