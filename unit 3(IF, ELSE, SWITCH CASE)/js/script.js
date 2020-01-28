// task 1 
//Создайте переменную a = 4.
//  Используя конструкцию if проверьте что a == 4. 
//  Выведите сообщение в консоль.

// let a = 4;
// if (a == 4) {
//     console.log(' a = 4 ');
// }

// task 2 
//Создайте b = 8 и с = 10. 
// С помощью if, else выведите в консоль сообщение о том,
//  какая из переменных больше.

// let b = 8;
// let c = 10;
// if (c > b) {
//     console.log('c больше b ');
// }

//task 3 
//Используя else if добавьте в предыдущую задачу проверку на равенство.
let b = 8;
let c = 10;
if (c > b) {
    console.log('c больше b ');
} else if (c == b) {
    console.log('c равно b ');
}

//task 4 
// Создайте на странице 2 input, куда пользователь может вводить числа.
//  Добавьте кнопку. При нажатии кнопки выполняйте функцию, 
//  которая сравнит два числа и выведет большее на страницу.
//   Если числа равны - выводится строка "равны".

const input_4_1 = document.querySelector('.input_4_1');
const input_4_2 = document.querySelector('.input_4_2');
let div_4 = document.querySelector('.out_4');
const button_4 = document.querySelector('.button_4');
button_4.onclick = () => {
    let a4 = +input_4_1.value;
    let b4 = +input_4_2.value;
    if (a4 > b4) {
        div_4.innerHTML = a4;
    } else if (b4 > a4) {
        div_4.innerHTML = b4;
    } else {
        div_4.innerHTML = 'Числа равны';
    }
}

// task 5 
//Создайте на странице input, 
// куда пользователь может вводить год рождения. 
// Добавьте кнопку. При нажатии кнопки выполняйте функцию,
//  которая если год рождения меньше 2000 выводит на страницу возраст пользователя 
// (2019 - введенный год рождения),
//   если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.

const input_5 = document.querySelector('.input_5');
let div_5 = document.querySelector('.out_5');
const button_5 = document.querySelector('.button_5');
button_5.onclick = () => {
    let a5 = +input_5.value;
    if (a5 < 2000) {
        div_5.innerHTML = 2019 - a5;
    } else {
        console.log(2019 - a5);
    }
}

//task 6 
// Создайте input куда пользователь может ввести номер квартиры.
//  Если квартира от 1 до 32 - то выводите сообщение, о том,
//   что такая квартира есть,если другое число - сообщение о том,
//    что квартира не существует.

const input_6 = document.querySelector('.input_6');
let div_6 = document.querySelector('.out_6');
const button_6 = document.querySelector('.button_6');
button_6.onclick = function () {
    let a6 = +input_6.value;
    if (a6 >= 1 && a6 <= 32) {
        div_6.innerHTML = 'Такая квартира есть';
    } else {
        div_6.innerHTML = 'Квартиры не существует';
    }
}

//task 7 
// Создайте input куда пользователь может ввести число.
//  После нажатия кнопки - на страницу должно выводиться сообщение
//   - большие или меньше нуля это число.

const input_7 = document.querySelector('.input_7');
const button_7 = document.querySelector('.button_7');
let div_7 = document.querySelector('.out_7');

button_7.onclick = () => {
    let num_7 = +input_7.value;
    if (num_7 > 0) {
        div_7.innerHTML = 'number is above zero ';
    } else {
        div_7.innerHTML = 'number is less than zero ';
    }
}


// task 8 
//Создайте input куда пользователь может ввести число.
// После нажатия кнопки - на страницу должно выводиться сообщение
//  - четное или нет это число. Определить четное или нет число в JS очень просто.
//   Нужно получить целый остаток от деления (читать за оператор),
//    для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное,
//  если нет - не четное

const input_8 = document.querySelector('.input_8');
const button_8 = document.querySelector('.button_8');
let div_8 = document.querySelector('.out_8');

button_8.onclick = () => {
    let num_8 = +input_8.value % 2;
    if (num_8 == 0) {
        div_8.innerHTML = 'Число целое';
    } else if (num_8 != 0) {
        div_8.innerHTML = 'Число не целое';
    }
}

//task 9 
// Создайте 2 input.
//  Если оба инпута заполнены (не равны пустой строке),
//   то по нажатию кнопки число из первого инпута возведите в степень из второго input.
// Результат выведите на страницу.

let input_9_1 = document.querySelector('.input_9_1');
let input_9_2 = document.querySelector('.input_9_2');
const button_9 = document.querySelector('.button_9');
let div_9 = document.querySelector('.out_9');
button_9.onclick = function () {
    let num_9_1 = +input_9_1.value;
    let num_9_2 = +input_9_2.value;
    if (num_9_1 != '' && num_9_2 != '') {
        let a9 = num_9_1 ** num_9_2;
        div_9.innerHTML = a9;
    }
}

//task 10 
//Есть поле input куда пользователь может ввести свое имя.
//  Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'),
//   но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел,
//    но программа считывает пробелы и пытается работать. Напишите проверку,
//     которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел.
//      В остальных случаях - Hello...

const input_10 = document.querySelector('.input_10');
const button_10 = document.querySelector('.button_10');
let div_10 = document.querySelector('.out_10');
button_10.onclick = function () {
    let text10 = input_10.value;
    if (text10 != '' && text10 != ' ') {
        alert('Hello ' + text10);
    }
}

//task 11
//Хитрый пользователь научился обходить нашу предыдущую задачу,
//  и начал вводить где 3, а где и 5 пробелов.
//   Напишите программу, которая проверяет пробелы или нет введены в строку. 
//   Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. 
//   Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a.
//    Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку,
//     если нет - сообщение с содержимым input.

const input_11 = document.querySelector('.input_11');
const button_11 = document.querySelector('.button_11');
let div_11 = document.querySelector('.out_11');
button_11.onclick = function () {
    let text11 = input_11.value;
    text11 = text11.trim();
    if (text11 != '' && text11 != ' ') {
        alert('Hello ' + text11);
    } else {
        console.log('введите имя ');
    }
}

//task 12 
// Пользователь может ввести число от 1 до 3.
//  Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д.
//   Для решения используйте switch.

const input_12 = document.querySelector('.input_12');
const button_12 = document.querySelector('.button_12');
let div_12 = document.querySelector('.out_12');
button_12.onclick = function () {
    let num12 = +input_12.value;
    switch (num12) {
        case 1:
            console.log('один');
            break;
        case 2:
            console.log('два');
            break;
        case 3:
            console.log('три');
            break;
        default: {
            console.log(' меньше 1, больше 3');
            break;
        }
    }
}

// task 13 
// Пользователь может ввести номер дома.
//  Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3.
//   Используя if, elseif - реализуйте программу,
//    которая будет указывать улицу в зависимости от введенного дома.
const input_13 = document.querySelector('.input_13');
const button_13 = document.querySelector('.button_13');
let div_13 = document.querySelector('.out_13');
button_13.onclick = () => {
    let num13 = +input_13.value;
    if (num13 >= 1 && num13 <= 5) {
        div_13.innerHTML = 'street 1 ';
    } else if (num13 >= 6 && num13 <= 11) {
        div_13.innerHTML = 'street 2 ';
    } else if (num13 > 11 && num13 <= 20) {
        div_13.innerHTML = 'street 3 ';
    }
}

// task 14 
// Создайте input куда пользователь может ввести количество рентген.
// Это число от 0 и до 1000. С помощью
// if,else if реализуйте вывод по таблице:
//     от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость,
//     рвота, до 150 - смертность 5 % , до 350 - смертность 50 % за 30 суток,
//     до 600 - 90 % смертность за 2 недели.Больше 600 - смертность 100 % .
// Вывод результатов сделайте на страницу.

const input_14 = document.querySelector('.input_14');
const button_14 = document.querySelector('.button_14');
let div_14 = document.querySelector('.out_14');
button_14.onclick = () => {
    let num14 = +input_14.value;
    if (num14 >= 0 && num14 <= 1000) {
        if (num14 >= 0 && num14 <= 25) {
            div_14.innerHTML = 'не обнаруживается ';
        } else if (num14 > 25 && num14 <= 50) {
            div_14.innerHTML = 'снижение числа лимфоцитов ';
        } else if (num14 > 50 && num14 <= 100) {
            div_14.innerHTML = 'вялость, рвота ';
        } else if (num14 > 100 && num14 <= 150) {
            div_14.innerHTML = 'смертность 5 %  ';
        } else if (num14 > 150 && num14 <= 350) {
            div_14.innerHTML = 'смертность 50 % за 30 суток  ';
        } else if (num14 > 350 && num14 <= 600) {
            div_14.innerHTML = 'смертность 50 % за 30 суток  ';
        } else if (num14 > 600 && num14 <= 1000) {
            div_14.innerHTML = ' смертность 100 %   ';
        }
    }
}

//task 15 
//Создайте переменные x = 1, y = 0. 
// Выведите в консоль результат операции x && y, а затем x || y. 
// Изучите результат.

let x = 1;
let y = 0;
let res1 = x && y;
let res2 = x || y;

console.log('x =' + x);
console.log('y = ' + y);
console.log('x && y =' + res1); // 1 и  0 => 0
console.log('x || y :' + res2); // 1 или 0  => 1 

//task 16
// В Казахстане, налог на объем двигателя составляет:

// от 0 до 499 кубов - 2525 тенге
// от 500 до 1199 кубов - 5050 тенге
// от 1200 до 1599 кубов - 8275 тенге
// от 1600 до 1899 кубов - 9675 тенге
// от 1900 до 1999 кубов - 11075тенге
// от 2000 и выше кубов - 15000 тенге
// Напишите программу, где пользователь может ввести в input 
// объем двигателя и получить налог на данный двигатель.

const input_16 = document.querySelector('.input_16');
const button_16 = document.querySelector('.button_16');
let div_16 = document.querySelector('.out_16');
button_16.onclick = () => {
    let num16 = +input_16.value;
    if (num16 >= 0 && num16 <= 499) {
        div_16.innerHTML = '2525 тенге';
    } else if (num16 >= 500 && num16 <= 1199) {
        div_16.innerHTML = '5050 тенге';
    } else if (num16 >= 1200 && num16 <= 1599) {
        div_16.innerHTML = '8275 тенге';
    } else if (num16 >= 1600 && num16 <= 1899) {
        div_16.innerHTML = '9675 тенге';
    } else if (num16 >= 1900 && num16 <= 1999) {
        div_16.innerHTML = '15000  тенге';
    } else if (num16 >= 2000) {
        div_16.innerHTML = '11075  тенге';
    }
}

//task 17
// Создайте 2 input. В первый пользователь может ввести число денег в долларах.
//  Во второй - строку euro, rub, uah. Используя if, elseif
//   сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь.
//    Коэффициенты - найдите в сети интернет.
// const input_17_1 = document.querySelector('.input_17_1');
// const input_17_2 = document.querySelector('.input_17_2');
// const button_17 = document.querySelector('.button_17');
// let div_17 = document.querySelector('.out_17');
// button_17.onclick = () => {
//     let num_17 = +input_17_1.value;
//     let text_17 = input_17_2.value;

//     if (text_17 == 'euro') {
//         // if (input_17_1 != '' && input_17_2 == 'euro') {
//         euro = num_17 * 0.91;
//         div_17.innerHTML = "euro =" + euro;
//         console.log(euro);
//     } else if (text_17 == 'rub') {
//         // if (input_17_1 != '' && input_17_2 == 'euro') {
//         rub = num_17 * 64.22;
//         div_17.innerHTML = "rub =" + rub;
//         console.log(rub);
//     } else if (text_17 == 'uah') {
//         // if (input_17_1 != '' && input_17_2 == 'euro') {
//         uah = num_17 * 24.53;
//         div_17.innerHTML = "uah =" + uah;
//         console.log(uah);
//     }
// }

//task 18 
// Проделайте предыдущую задачу с помощью switch case.

const input_17_1 = document.querySelector('.input_17_1');
const input_17_2 = document.querySelector('.input_17_2');
const button_17 = document.querySelector('.button_17');
let div_17 = document.querySelector('.out_17');
button_17.onclick = () => {
    let num_17 = +input_17_1.value;
    let text_17 = input_17_2.value;
    switch (text_17) {
        case 'euro':
            euro = num_17 * 0.91;
            div_17.innerHTML = "euro =" + euro;
            console.log(euro);
            break;
        case 'rub':
            rub = num_17 * 64.22;
            div_17.innerHTML = "rub =" + rub;
            console.log(rub);
            break;
        case 'uah':
            uah = num_17 * 24.53;
            div_17.innerHTML = "uah =" + uah;
            console.log(uah);
            break;
    }
}

// task 19 
//Создайте 2 input куда пользователь может ввести числа. 
// В третий input - может ввести знак - минус, плюс, умножить, поделить.
// С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.

const input_19_1 = document.querySelector('.input_19_1');
const input_19_2 = document.querySelector('.input_19_2');
const input_19_3 = document.querySelector('.input_19_3');
const button_19 = document.querySelector('.button_19');
let div_19 = document.querySelector('.out_19');
button_19.onclick = () => {
    let num_19_1 = +input_19_1.value;
    let num_19_2 = +input_19_2.value;
    let text_19 = input_19_3.value;
    if (text_19 == "+") {
        let a19_1 = num_19_1 + num_19_2;
        div_19.innerHTML = 'summ = ' + a19_1;
    } else if (text_19 == "-") {
        let a19_2 = num_19_1 - num_19_2;
        div_19.innerHTML = 'minus = ' + a19_2;
    } else if (text_19 == "*") {
        let a19_3 = num_19_1 * num_19_2;
        div_19.innerHTML = 'multiplication = ' + a19_3;
    } else if (text_19 == "/") {
        let a19_4 = num_19_1 / num_19_2;
        div_19.innerHTML = 'division = ' + a19_4;
    }


}


// task 20
//Проделайте предыдущую задачу с помощью switch case.
// const input_19_1 = document.querySelector('.input_19_1');
// const input_19_2 = document.querySelector('.input_19_2');
// const input_19_3 = document.querySelector('.input_19_3');
// const button_19 = document.querySelector('.button_19');
// let div_19 = document.querySelector('.out_19');
// button_19.onclick = () => {
//     let num_19_1 = +input_19_1.value;
//     let num_19_2 = +input_19_2.value;
//     let text_19 = input_19_3.value;
//     if (num_19_1 != '' && num_19_2 != '' && text_19 != '') {
//         switch (text_19) {
//             case '+':
//                 let a19_1 = num_19_1 + num_19_2;
//                 div_19.innerHTML = 'summ = ' + a19_1;
//                 break;
//             case '-':
//                 let a19_2 = num_19_1 - num_19_2;
//                 div_19.innerHTML = 'minus = ' + a19_2;
//                 break;
//             case '*':
//                 let a19_3 = num_19_1 * num_19_2;
//                 div_19.innerHTML = 'multiplication = ' + a19_3;
//                 break;
//             case '/':
//                 let a19_4 = num_19_1 / num_19_2;
//                 div_19.innerHTML = 'division = ' + a19_4;
//                 break;
//         }

//     }
// }