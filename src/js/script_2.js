"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();

}

function done() {
    console.log('Я прошёл этот урок!');
}

function done2() {
    console.log('Я прошёл этот урок22222!');
}

learnJS('JavaScript', done);
learnJS('JavaScript', done2);


// Объектыб деструктуризация объектов(ES6)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
   
};

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            // options = {}
            // key = 'colors'
            // options[key] = {}
            // options['colors'] = {}
            // i = 'border'
            // options['colors']['border']
            // options[key][i]
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(options.colors);




const user = {
    'name': 'bob',
    'surname': 'Wilson',

};


const name = 'na' + 'me';
// taks 1
console.log(user.name);
console.log(user['na' + 'me']);

// 0 1 2

const object = {
    a:1,
    b:3,
    c:{
        x: 2
    }
}
searchInObj(object, 2); // 0


const object = {
    a:2,
    b:4,
    c: 3
}
searchInObj(object, 2); // 0



const object = {
    a:1,
    b:4,
    c: 3
}
searchInObj(object, 2); // undefined

const object = {
    a:1,
    b:4,
    c: {
        x: 6,
        c: {
            b: 1
        }
    }
}
searchInObj(object, 1); // 0






function searchInObj(object) {
    console.log(128, object )
    for (let key in object) {
       if (typeof(object[key]) === 'object') {
          searchInObj(object[key]); 
       } else {
          console.log(object[key]); 
       }
    }
 }
 
 searchInObj({a: 1, b: 2, c: {x: 1, y: 3}}); // Вывод: 1 2 1 3
 










