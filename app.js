let number = document.querySelector('.contador__number-value');
let plus = document.querySelector('.contador__button-plus');
let min = document.querySelector('.contador__button-min');
let reset = document.querySelector('.contador__button-reset');

let i = 0;

number.innerHTML = i;

plus.addEventListener('click', function () {
    i++;
    number.innerHTML = i;
    localStorage.setItem('contador', i);
});

min.addEventListener('click', function () {
    i--;
    number.innerHTML = i;
    localStorage.setItem('contador', i);
});

reset.addEventListener('click', function () {
    i = 0;
    number.innerHTML = i;
    localStorage.setItem('contador', i);
});

i = localStorage.getItem('contador');
number.innerHTML = i;

