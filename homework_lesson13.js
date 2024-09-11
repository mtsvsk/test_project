'use strict';
//Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears(), makeTea(), secret()
// Встроенные функции: console.log()
// Аргументы: myDog, 4, guests, 'Earl Grey'
// Параметры: dogname, age, cups, tea

// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.

let str = 'JS';
console.log(str.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

let str1 = 'я люблю JS!';
console.log(str1.substr(2,5));
console.log(str1.substring(2,7));
console.log(str1.slice(2,7));
console.log(str1.substr(8,2));
console.log(str1.substring(8,10));
console.log(str1.slice(8,10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

console.log(str1.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

let txt = 'абвгд';
let n = 3;
let result;
if (txt.length > n) {
    result = txt.slice(0, n).concat('...');
}
else {
    result = txt;
}
console.log(result);

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

let str2 = 'Я-люблю-JS!';
console.log(str2.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

let str3 = 'я люблю JS';
let arr = str3.split(' ');
console.log(arr);

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

let str4 = 'привет мир';
arr = str4.split('');
console.log(arr);