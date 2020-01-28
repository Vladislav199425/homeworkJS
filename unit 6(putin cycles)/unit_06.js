//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let divtask1 = document.querySelector('.out-1');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            divtask1.innerHTML += '*';
        }
        divtask1.innerHTML += '_';
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    let divtask2 = document.querySelector('.out-2');
    for (let i = 0; i < 3; i++) {
        divtask2.innerHTML += `${i+1} ` + '<br>';
        for (let j = 0; j < 3; j++) {
            divtask2.innerHTML += '*_';
        }
        divtask2.innerHTML += '<br>';
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    let divtask3 = document.querySelector('.out-3');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            divtask3.innerHTML += '*_';
        }
        divtask3.innerHTML += '<br>';
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
function t4() {
    let divtask4 = document.querySelector('.out-4');
    let out1 = 0;
    let out2 = 10;
    for (let i = 0; i <= 21; i++) {
        if (i % 2 == 0) {
            divtask4.innerHTML += out1 + "_";
            out1 = out1 + 1;
        } else if (i % 2 != 0) {
            for (let j = 10; j >= 0; j--) {
                divtask4.innerHTML += out2 + "_";
                out2 = out2 - 1;
                break;
            }
        }
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    let divtask5 = document.querySelector('.out-5');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 6; j++) {
            if (j % 2 == 0) {
                divtask5.innerHTML += '1';
            } else if (j % 2 != 0) {
                divtask5.innerHTML += '0';
            }
        }
        divtask5.innerHTML += '<br>';
    }

}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    let divtask6 = document.querySelector('.out-6');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= 6; j++) {
            switch (j) {
                case 0:
                    divtask6.innerHTML += '1';
                    break;
                case 1:
                    divtask6.innerHTML += '0';
                    break;
                case 2:
                    divtask6.innerHTML += 'x';
                    break;
                case 3:
                    divtask6.innerHTML += '0';
                    break;
                case 4:
                    divtask6.innerHTML += '1';
                    break;
                case 5:
                    divtask6.innerHTML += 'x';
                    break;
            }

        }
        divtask6.innerHTML += '<br>';
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    let divtask7 = document.querySelector('.out-7');
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            if (i < j) break;
            divtask7.innerHTML += "*";
        }
        divtask7.innerHTML += '<br>';
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    let divtask8 = document.querySelector('.out-8');
    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < 5; j++) {
            if (i == j) break;
            divtask8.innerHTML += "*";
        }
        divtask8.innerHTML += '<br>';
    }
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    let divtas9 = document.querySelector('.out-9');
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (i == j) break;
            divtas9.innerHTML += `${j+1}` + " ";
        }
        divtas9.innerHTML += '<br>';
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let divtas10 = document.querySelector('.out-10');
    let b = 0;
    let a = 0;
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= 9; j++) {
            let z = '  0';
            a = a + 1;
            if (a < 10) {
                let sum = z + a;
                divtas10.innerHTML += " " + `${sum}`;
            } else {
                b = a;
                divtas10.innerHTML += " " + `${b}`;
            }

        }

        divtas10.innerHTML += '<br>';

    }
}

document.querySelector('.b-10').onclick = t10;