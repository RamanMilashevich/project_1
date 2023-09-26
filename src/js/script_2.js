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

function leadrnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();

}

function done() {
    console.log('Я прошёл этот урок!');
}

function done2() {
    console.log('Я прошёл этот урок22222!');
}

leadrnJS('JavaScript', done);
leadrnJS(done2, 'JavaScript');