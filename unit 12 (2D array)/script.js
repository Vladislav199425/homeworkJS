// task 1 
//Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!

function fun1() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            out += a[i][k] + ' ';
        }
        out += '<br>';
    }

    document.querySelector('.divout_1').innerHTML = out;
}
document.querySelector('.task_1').onclick = fun1;

//task 2 
//Выведите на страницу символ 3 из массива a.

function fun2() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (a[i][k] == 3) {
                out += a[i][k] + ' ';
            }
        }
    }

    document.querySelector('.divout_2').innerHTML = out;
}
document.querySelector('.task_2').onclick = fun2;

//task 3
//Выведите на страницу символ e из массива a.

function fun3() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (a[i][k] == 'e') {
                out += a[i][k] + ' ';
            }
        }
    }
    document.querySelector('.divout_3').innerHTML = out;
}
document.querySelector('.task_3').onclick = fun3;

//task 4
//Выведите на страницу содержимое третьего вложенного массива в массиве a.

function fun4() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 2; i <= 2; i++) {
        for (let k = 0; k < a[i].length; k++) {
            out += a[i][k] + ' ';
        }
    }

    document.querySelector('.divout_4').innerHTML = out;
}
document.querySelector('.task_4').onclick = fun4;

//task 5
//Выведите на страницу только первые элементы вложенных массивов массива a.

function fun5() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (k == 0) {
                out += a[i][k] + ' ';
            }
        }
        out += '<br>';
    }

    document.querySelector('.divout_5').innerHTML = out;
}
document.querySelector('.task_5').onclick = fun5;

//task 6
//Выведите на страницу только четные вложенные массивы массива a.

function fun6() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            for (let k = 0; k < a[i].length; k++) {
                out += a[i][k] + ' ';
            }
        }
        out += '<br>';
    }
    document.querySelector('.divout_6').innerHTML = out;
}
document.querySelector('.task_6').onclick = fun6;

//task 7
// Выведите на страницу только числа из массива a.

function fun7() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (typeof (a[i][k]) == 'number') {
                out += a[i][k] + ' ';
            }
        }
        out += '<br>';
    }
    document.querySelector('.divout_7').innerHTML = out;
}
document.querySelector('.task_7').onclick = fun7;

//task 8
//Выведите на страницу длины вложенных массивов в массив a.

function fun8() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        out += 'номер array ' + +
            `${i} ` + '   length =    ' + a[i].length + '<br>';
    }
    document.querySelector('.divout_8').innerHTML = out;
}
document.querySelector('.task_8').onclick = fun8;

// task 9
//Выведите на страницу элементы массива a в обратном порядке, т.е.
//9 8 7 f e ...

function fun9() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    let k = 3;
    for (let i = a.length - 1; i >= 0; i--) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            out += a[i][k] + ' ';
        }
        out += '<br>';
    }
    document.querySelector('.divout_9').innerHTML = out;
}
document.querySelector('.task_9').onclick = fun9;

//task 10
//Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:

function fun10() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            out += a[i][k] + ' ';
        }
        out += '<br>';
    }
    document.querySelector('.divout_10').innerHTML = out;
}
document.querySelector('.task_10').onclick = fun10;

//task 11
//Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

function fun11() {

    let out = '';
    let flag = true;
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (k == 0) flag = !flag;
            if (flag) {
                out += 1 + ' ';
            } else {
                out += 0 + ' ';
            }
            flag = !flag;
            document.querySelector('.divout_11').innerHTML = out;

        }
        out += '<br> ';
    }
}
document.querySelector('.task_11').onclick = fun11;

//Task 12.
//Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в
// виде шахматной доски - блоки div в нужном порядке, закранные цветом.

function fun12() {
    // butt
    let divout1 = document.querySelector('.divout_but');
    let butt = document.createElement('button');
    butt.innerText = ' go';
    divout1.after(butt);

    butt.onclick = () => {
        //новый div
        let divone = document.createElement('div');
        divone.className = 'divout_mainab';
        butt.after(divone);

        let block;
        let flag = true;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (j == 0) flag = !flag;
                block = document.createElement('div');

                if (flag) block.className = 'block black';
                else block.className = 'block white';
                divone.appendChild(block);
                flag = !flag;
            }
        }
        // document.querySelector('.divout_12').innerHTML = out;

    }
}

document.querySelector('.task_12').onclick = fun12;


//task 13
//Создайте массив, который подходит под следующие условия:

// b[0][1] == 4;
// b[3][2] == 5

function fun13() {
    let b = [
        [0, 4],
        [0],
        [0],
        [0, 0, 5]
    ];
    let out = '';
    for (let i = 0; i < b.length; i++) {
        for (let k = 0; k < b[i].length; k++) {
            out += b[i][k] + ' ';
        }
        out += '<br>';
    }
    document.querySelector('.divout_13').innerHTML = 'двумерный массив ' + '<br>' + out;
}
document.querySelector('.task_13').onclick = fun13;


//task 14
//Создайте массив, который подходит под следующие условия:

// b[0][1] == 4;
// b[3][2] == 5

function fun14() {
    let c = [
        [0, 4], ,
        5,
    ];
   

    console.log('c[0][1]   ' + c[0][1]);
    console.log('c[2]      ' + c[2]);
    
}
document.querySelector('.task_14').onclick = fun14;

//task 15
// Создайте массив, который подходит под следующие условия:

// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

function fun15() {
    let d = [
        [0, 4],
        [],
        [0, 0, 0, 5],
        [],
        [],
        [],
        [4, 5],
    ];
    let out = '';
    for (let i = 0; i < d.length; i++) {
        for (let k = 0; k < d[i].length; k++) {
            out += d[i][k] + ' ';
        }
        out += '<br>';

    }

    console.log('d[0][1]   ' + d[0][1]);
    console.log('d[2][3]   ' + d[2][3]);
    console.log('d[6]      ' + d[6]);

    document.querySelector('.divout_15').innerHTML = 'двумерный массив ' + '<br>' + out;
}
document.querySelector('.task_15').onclick = fun15;

//task 16
// Создайте массив, который подходит под следующие условия:

// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

function fun16() {
    let e = [
        [0, 4], //0
        [], //1
        [0, 0, 0, 5], //2
        [], //3
        [], //4
        [], //5
        [
            [0, 6],
        ], //6
    ];
    let out = '';
    for (let i = 0; i < e.length; i++) {
        for (let k = 0; k < e[i].length; k++) {
            out += e[i][k] + ' ';
        }
        out += '<br>';

    }

    console.log('e[0][1]   ' + e[0][1]);
    console.log('e[2][3]      ' + e[2][3]);
    console.log('e[6][0][1]      ' + e[6][0][1]);

    document.querySelector('.divout_16').innerHTML = 'двумерный массив ' + '<br>' + out;
}
document.querySelector('.task_16').onclick = fun16;

//task 17
// Создайте массив, который подходит под следующие условия:

// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;

function fun17() {
    let f = [
        [
            [],
            [0, 0, 0, 4]
        ], //0
        [], //1
        [
            [], //0
            [0, 5] //1
        ], //2
        [], //3
        [], //4
        [], //5
        [
            [0, 6],
        ], //6
    ];
    let out = '';
    for (let i = 0; i < f.length; i++) {
        for (let k = 0; k < f[i].length; k++) {
            out += f[i][k] + ' ';
        }
        out += '<br>';

    }

    console.log('f[0][1][3]   ' + f[0][1][3]);
    console.log(' f[2][1][1]     ' + f[2][1][1]);
    console.log('f[6][0][1]      ' + f[6][0][1]);

    document.querySelector('.divout_17').innerHTML = 'двумерный массив ' + '<br>' + out;
}
document.querySelector('.task_17').onclick = fun17;

//task 18
// Создайте массив, который подходит под следующие условия:

// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

function fun18() {
    let g = [
        [
            [],
            [0, 0, 0, 4]
        ], //0
        [], //1
        [
            [], //0
            [0, 0, 0, 5] //1
        ], //2
        [], //3
        [], //4
        [], //5
        [
            [0, 6],
        ], //6
    ];
    g[3] == g[5];
    let out = '';
    for (let i = 0; i < g.length; i++) {
        for (let k = 0; k < g[i].length; k++) {
            out += g[i][k] + ' ';
        }
        out += '<br>';

    }

    console.log(' g[0][1][3]   ' + g[0][1][3]);
    console.log('  g[2][1][3]     ' + g[2][1][3]);
    console.log(' g[6][0][1]      ' + g[6][0][1]);
    console.log('g[3] == g[5]     ' + g[3]);

    document.querySelector('.divout_18').innerHTML = 'двумерный массив ' + '<br>' + out;
}
document.querySelector('.task_18').onclick = fun18;

//task 19
//Выведите на страницу сумму элементов массива a (только чисел).

function fun19() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let out = '';
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            if (typeof (a[i][k]) == 'number') {
                sum += a[i][k];
            }
            out = 'сумма элементов массива a  = ' + sum + ' ';
        }
    }
    document.querySelector('.divout_19').innerHTML = out;

}
document.querySelector('.task_19').onclick = fun19;

//task 20
//Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные
// комбинации, т.е.a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.

function fun20() {
    const a = [
        [0, 0, 0],
        ['x', 'x', 'x'],
        ['x', 'x', 'x']
    ];
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            out += a[i][k] + ' ';
        }
        out += '<br>';
    }
    document.querySelector('.divout1_20').innerHTML = out;
    const b = [
        [0, 'x', 'x'],
        ['x', 0, 'x'],
        ['x', 'x', 0]
    ];
    let out1 = '<br>';
    for (let i = 0; i < b.length; i++) {
        for (let k = 0; k < b[i].length; k++) {
            out1 += b[i][k] + ' ';
        }
        out1 += '<br>';
    }
    document.querySelector('.divout2_20').innerHTML = out1;

}
document.querySelector('.task_20').onclick = fun20;