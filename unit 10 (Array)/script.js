// task 1
//Создайте массив содержащий строки, числа, булевы значения. Выведите его в консоль.

function fun1() {
    let c = ['hello world', 1, 6, true];
    // console.log(c[1]);
    // console.log(c[3]);
    // console.log(c[7]); // undefind
    console.log(c);
    // console.log('length = ' + c.length);

}

document.querySelector('.task-1').onclick = fun1;

// task 2
//Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. Попробуйте синтаксиc elem.innerHTML = ваш_массив.

function fun2() {
    let c = ['hello world', 1, 6, true];

    // ctreate div
    let out = document.querySelector('.task-2');
    let divout = document.createElement('div');
    divout.className = ' divout_2';
    divout.classList.add('css-1');
    out.after(divout);

    //  array to display
    divout.innerHTML = c;
}
document.querySelector('.task-2').onclick = fun2;

// task 3
//Создайте массив a. Выведите длину массива a.
// const a = [2, 'hello', 17, 34, 'privet'];

function fun3() {
    const a = [2, 'hello', 17, 34, 'privet'];

    // ctreate div
    let out = document.querySelector('.task-3');
    let divout = document.createElement('div');
    divout.className = ' divout_3';
    divout.classList.add('css-1');
    out.after(divout);

    //  array to display
    divout.innerHTML = 'a.length = ' + a.length;
}
document.querySelector('.task-3').onclick = fun3;

// task 4
//Создайте массив a. Выведите нулевой, третий, восьмой элемент массива a в консоль. Сделайте вывод о 8-м элементе.
//const a = [2, 'hello', 17, 34, 'privet']

function fun4() {
    const a = [2, 'hello', 17, 34, 'privet'];

    console.log(a[0]);
    console.log(a[3]);
    console.log(a[8]); //undefined так как мы его не задали в массиве

}
document.querySelector('.task-4').onclick = fun4;

// task 5
//Создайте массив a. Выведите сумму нулевого, второго и третьего элементов массива.
//const a = [2, 'hello', 17, 34, 'privet']

function fun5() {
    const a = [2, 'hello', 17, 34, 'privet'];
    let sum = a[0] + a[2] + a[3];

    let out = document.querySelector('.task-5');
    let divout = document.createElement('div');
    divout.innerHTML = "sum = " + sum;
    divout.className = ' divout_5';
    divout.classList.add('css-1');
    out.after(divout);
}
document.querySelector('.task-5').onclick = fun5;


// task 6
//Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div.

function fun6() {
    let v = ['Vlad', 'scorpion', '1 december'];

    let out = document.querySelector('.task-6');
    let divout = document.createElement('div');
    divout.innerHTML = v;
    divout.className = 'divout_6';
    divout.classList.add('css-1');
    out.after(divout);
}
document.querySelector('.task-6').onclick = fun6;

// task 7
//Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. Вывести массив на страницу в элемент div.
//let b = ['one', 1, 2, 'two'];

function fun7() {
    let b = ['one', 1, 2, 'two'];
    // b[4] = 'hi';
    // b[5] = 'foo';
    // b[6] = 'bar';
    b.push('hi', 'foo', 'bar'); // добавляю в конец
    // b.unshift('hi', 'foo', 'bar'); // добавляю в начало


    let out = document.querySelector('.task-7');
    let divout = document.createElement('div');
    divout.innerHTML = 'array b =' + b;
    divout.className = 'divout_7';
    divout.classList.add('css-1');
    out.after(divout);
}
document.querySelector('.task-7').onclick = fun7;

// task 8
//Создайте массив b. Добавьте в него третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. Выведите массив и в консоль и на страницу. Обратите внимание, как выводятся элементы значения которых не заданы. Также выведите значение длины массива.
//let b = ['one', 1, 2, 'two'];

function fun8() {
    let b = ['one', 1, 2, 'two'];
    b[4] = 3.14;
    b[5] = 17;
    b[7] = 5;

    let out = document.querySelector('.task-8');
    let divout = document.createElement('div');
    divout.innerHTML = 'array b = ' + b + '<br>' + "b.length = " + b.length;
    divout.className = 'divout_8';
    divout.classList.add('css-1');
    out.after(divout);
}
document.querySelector('.task-8').onclick = fun8;

// task 9
//Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.

function fun9() {
    let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // вывод   3-й и 7-й элемента на страницу
    let out = document.querySelector('.task-9');
    let div9 = document.createElement('div');
    div9.innerHTML = '3-й элемент = ' + b[3] + '<br>' + "7-й элемент = " + b[7];
    div9.classList.add('css-1');
    out.after(div9);

    console.log('task 9  массив = ' + b);
}
document.querySelector('.task-9').onclick = fun9;

// task 10
//Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.

function fun10() {
    let b = [];
    b[1] = 2;
    b[5] = 6;
    b[10] = 11;
    let but10 = document.querySelector('.task-10');
    let div10 = document.createElement('div');
    div10.innerHTML += 'array b = ' + b + "<br>" + "b.length = " + b.length;
    div10.classList.add('css-1');
    but10.after(div10);

}
document.querySelector('.task-10').onclick = fun10;

// task 11
//Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. Под сменой мест понимается, что данные элементы поменяют значения - первый станет равный третьему, а третий - первому.
//const c = [77, 88, 99, 66];

function fun11() {
    let arraye = [77, 88, 99, 66];
    console.log('old array ' + arraye);
    arraye[4] = arraye[0]; //добавил элеент
    arraye[0] = arraye[2]; // первый заменил на 3
    arraye[2] = arraye[4]; // первый заменил на 3
    delete arraye[4];
    console.log('new array ' + arraye);


    let but11 = document.querySelector('.task-11');
    let div11 = document.createElement('div');
    div11.innerHTML += arraye;
    div11.classList.add('css-1');
    but11.after(div11);

}
document.querySelector('.task-11').onclick = fun11;

// task 12
//Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и последний элемент массива местами. После чего выводит массив в консоль. Длина переданного массива может меняться. Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length.

function fun12(...args) { // массив в который сохраняются лишние аргуенты


    // первый вариант

    // console.log('1' + args);
    // args.push(args[0]);
    // args.unshift(args[length]);
    // console.log('2' + args);

    // второй вариант

    // args[0] = args[args.length - 1]; // последний присваиваю первому
    // args[args.length - 1] = args[0]; //
    // delete args[args.length + 1];


    // let but12 = document.querySelector('.task-12');
    // let div12 = document.createElement('div');
    // div12.innerHTML += args;
    // div12.classList.add('css-1');
    // but12.after(div12);

}
document.querySelector('.task-12').onclick = fun12(12, 13, 14, 15);

// task 13
//Используя цикл выведите элемента массива d на страницу. Разделитель - пробел.

function fun13() {
    // инициализируем массив
    let d = ['y', 4, 22, 'o'];
    // обчеспечиваем вывод на страницу в div
    let but13 = document.querySelector('.task-13');
    let div13 = document.createElement('div');
    let out = " ";
    div13.classList.add('css-1');
    but13.after(div13);
    for (let i = 0; i < d.length; i++) {
        out += d[i] + " ";
    }
    div13.innerHTML = out;
}
document.querySelector('.task-13').onclick = fun13;

// task 14
//Используя цикл выведите на страницу массив e в обратном порядке. Разделитель - пробел.

function fun14() {
    // инициализируем массив
    let e = [1, 2, 3, 'hello', 66];
    let c = e.reverse();
    // обчеспечиваем вывод на страницу в div
    let but14 = document.querySelector('.task-14');
    let div14 = document.createElement('div');
    div14.innerHTML = c;
    div14.classList.add('css-1');
    but14.after(div14);
    console.log('e. length = ' + e.length);

}
document.querySelector('.task-14').onclick = fun14;

// task 15
//Используя цикл выведите на страницу элементы массива d, которые больше нуля. Разделитель - пробел.
//d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]

function fun15() {

    let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let out = " ";
    for (let i = 0; i < d.length; i++) {
        if (d[i] > 0) {
            out += d[i] + ' ';
        }
    }
    let but15 = document.querySelector('.task-15');
    let div15 = document.createElement('div');
    div15.innerHTML = out;
    div15.classList.add('css-1');
    but15.after(div15);
}


document.querySelector('.task-15').onclick = fun15;

// task 16
//Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.

function fun16() {

    let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let out = " ";
    let a1 = []; // четные элементы
    let a2 = []; // нечетные элементы

    for (let i = 0; i < d.length; i++) {
        if (d[i] % 2 == 0) {
            a1.push(d[i]);
        } else if (d[i] % 2 != 0) {
            a2.push(d[i]);
        }
    }

    let but16 = document.querySelector('.task-16');
    let div16 = document.createElement('div');
    div16.innerHTML += 'четные элементы ' + a1 + '</br>';
    div16.innerHTML += 'нечетные элементы ' + a2;


    div16.classList.add('css-1');
    but16.after(div16);
}

document.querySelector('.task-16').onclick = fun16;

// task 17
//Создайте массив e. Используя цикл и переменную счетчик - выведите количество элементов массива равных нулю.
//let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
function fun17() {
    let nulik = 0;
    let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    for (let i = 0; i < e.length; i++) {
        if (e[i] == 0) {
            nulik += 1;
        }
    }
    console.log('количество элементов равных нулю = ' + nulik);
    let but17 = document.querySelector('.task-17');
    let div17 = document.createElement('div');
    div17.innerHTML += 'количество элементов массива равных нулю = ' + nulik + '</br>';
    div17.classList.add('css-1');
    but17.after(div17);
}
document.querySelector('.task-17').onclick = fun17;

// task 18
//  Используя предыдущий массив e и цикл - выведите максимальное значение из массива.

function fun18() {
    let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    let max = 0;
    for (let i = 0; i < e.length; i++) {
        if (e[i] > e[max]) {
            max = i;
        }
    }
    console.log('максимальное значение из массива =' + e[max]);
    let but18 = document.querySelector('.task-18');
    let div18 = document.createElement('div');
    div18.innerHTML += 'массив = ' + e + '</br>';
    div18.innerHTML += 'максимальное значение из массива = ' + e[max];
    div18.classList.add('css-1');
    but18.after(div18);
}

document.querySelector('.task-18').onclick = fun18;

//task 19
// Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.
//let f = [-3, 0, 45, 22, 123, -485, 98, 34];

function fun19() {
    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
    let Indexmax = 0;
    for (let i = 0; i < f.length; i++) {
        if (f[i] > f[Indexmax]) {
            Indexmax = i;
        }
    }

    let but19 = document.querySelector('.task-19');
    let div19 = document.createElement('div');
    div19.innerHTML = 'индекс элемента с максимальным значением = ' + Indexmax;
    div19.classList.add('css-1');
    but19.after(div19);
}
document.querySelector('.task-19').onclick = fun19;

// task 20
// Используйте массив f. Используя цикл, посчитайте сумму элементов массива.

function fun20() {
    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
    let result = f.reduce((sum, current) => sum + current, 0);

    let but20 = document.querySelector('.task-20');
    let div20 = document.createElement('div');
    div20.innerHTML = 'сумму элементов массива =' + result;
    div20.classList.add('css-1');
    but20.after(div20);
}
document.querySelector('.task-20').onclick = fun20;