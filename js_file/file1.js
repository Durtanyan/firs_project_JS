"use strict";

let a;
a = +prompt('Введите что-нибудь: ', 18);
console.log(`Переменная "a" = ${a}, тип: ${typeof(a)}`);

const obg = {
    b: 12,

};
console.log(`obg.b = ${obg.b}`);

let arr = [1, 2, 'a', true, {}, [7,]];

console.log(arr);
console.log(arr.reverse());
for (let i = 0; i < arr.length; i++) {
    console.log(typeof (arr[i]));
}
console.log(arr);
