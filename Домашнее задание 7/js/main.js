// Задание первое

let nick = document.querySelector('#name');

let A = prompt('Введите имя!');
console.log(A);

function myNick() {
    nick.innerHTML = A;
}

// Задание второе

let c = prompt('Введите первое число!');
console.log(+c);
let d = prompt('Введите второе число!');
console.log(+d);

function plus(c, d) {
    console.log(Number(c) + Number(d));
    return Number(c) + Number(d);
}

function minus(c, d) {
    console.log(c - d);
    return c - d;
}

function umnogit(c, d) {
    console.log(c * d);
    return c * d;
}

function razdelit(c, d) {
    console.log(c / d);
    return c / d;
}