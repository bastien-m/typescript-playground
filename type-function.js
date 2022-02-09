"use strict";
const add = (a, b) => a + b;
console.log(add(1, 2));
const incrementAndAdd = (a, b) => {
    a++;
    return add(a, b);
};
console.log(incrementAndAdd(1, 2));
