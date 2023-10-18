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

let number = 5; 
 
function logNumber() {
    let number = 4; 
    console.log(number);
}

number = 6;

logNumber();
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



for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
        console.log(num);
    }
}


//Exsample 1 - Чему будет равно 
let x = 5;
alert( x++ ); 
// Ответ: 5, пример с ++x будет 6.      
// x++ - постфиксная форма и в начале возвращает исходное значение (Такая запись в начале вернёт 5, а затем прибавит 1);
// ++x - префиксная форма нам возвращает сразу изменённый результат (Такая запись сразу выведет 6).

// Exsample 2 - Чему будет равно:
console.log([] + false); // "false", []- тут является string ""
console.log([] + false - null); // "NaN" - Not a number, выводится при выполнении нематимематических операций
console.log([] + false - null + true); // "NaN" - выводится при выполнении нематеиматических операций 

// Exsample 3 - Что выведет код: let y = 1; x = y = 2; alert(x);
let y = 1; 
x = y = 2; 
alert(x); // Присваивание срабатывает с права на лево.]     
console.log(1 && 1 && null && 0 && undefined); // Оператор && всегда запинается на false в данном примере это null(выражение с лево на право), консоль покажет null - Ответ null

// Exsample 7 - Есть ли разница между выражениями? !!(a && b) (a && b)
console.log(!!(1 && 2) === (1 && 2)); // Ответ - false, урок динамическая типизация. !! - преравщает в буливое значение 

// Exsample 8 - Что выведет этот код: alert( null || 2 && 3 || 4);

console.log(null || 2 && 3 || 4); // Приоритет у && выче чем у ||, оба аргумента true то оно возвращает последнее значение в нашем случае это 3. 
// Ответ 3
// 2 && 3 // true && true берёт правое значение 
// null || 3 - вернет 3, так как null - false. 3 -true
// 3 || 4 - вернёт 3 так как оператор || (или) вовращает левое значение, в данном примере 3. Поэтому ответ будет 3. 
// && (И) - имеет вызший приортиет чем ||, данный оператор запинается на false
// || (Или) - имеет приоритет ниже чем &&, поэтому срабатывает позже. Оператор || запинается на true 

// Exsample 9 - Правда ли что a == b?
const a = [1,2,3];
const b = [1,2,3];

console.log(a == b); // ответ False - они не равны так как это 2 разных ячейки памяти, не важно что данная информация похожа, но в общем они не равны сами по себе 

//Exsample 10 - Что выведет этот код alert(+"infinity");
alert(+"Infinity");


