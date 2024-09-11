'use strict';
function calculateArea(r){
    let area;
    if(r<=0){
        return 0;
    }else{
        area = Math.PI * r *r;
        return area;
    }
}
let radius = 2.2;
let theArea = calculateArea(radius);
console.log('The area is: ' + theArea.toFixed(3));

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
let txt = 'abc!def!';
console.log(txt.replace(/!/g, '@'));

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
let txt1 = 'aaa bbb ccc';
console.log(txt1.substr(4,3));
console.log(txt1.substring(4,7));
console.log(txt1.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let txt2 = 'js';
console.log(txt2.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
let txt3 = 'я люблю JS!';
console.log(txt3.length);