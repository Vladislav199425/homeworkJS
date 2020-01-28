// task 1 Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.

function fun1() {
    // создаю int
    let div1_1 = document.querySelector('.task1');
    let int1 = document.createElement('input');
    int1.className = 'u-1';
    div1_1.after(int1);

    // создаю кнопку 
    let but1 = document.createElement('button');
    but1.innerText = 'Puch';
    but1.className = 'u-2__push';
    int1.after(but1);

    let arr1 = [];
    let a = 0;
    // добавление в массив при нажатии кнопки push
    but1.onclick = function () {

        // проверка на пустоту 
        inpbut = +int1.value;
        if (inpbut == '') {
            let div1_1 = document.querySelector('.emptyenter');
            div1_1.innerHTML = 'введите в input массив';
        }
        arr1.push(inpbut);
        let div1 = document.createElement('div');
        div1.innerHTML = 'массив arr1 = ' + arr1;
        but1.after(div1);
    }

    //task 2
    // Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out-1
    let div2_2 = document.querySelector('.task2');
    let but2 = document.createElement('button');
    but2.className = 'u-2__pop';
    but2.innerText = 'task 2';
    div2_2.after(but2);

    function fun2() {
        arr1.pop();
        let div2 = document.createElement('div');
        div2.innerHTML = " массив arr1 метод pop  = " + arr1;
        div2.className = 'out-1';
        but2.after(div2);
    }
    but2.onclick = fun2;

    // task 3 
    //Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.

    let div3_3 = document.querySelector('.task3');
    let but3 = document.createElement('button');
    but3.className = 'u-3__shift';
    but3.innerText = 'task 3';
    div3_3.after(but3);


    function fun3() {

        let shifted = arr1.shift();

        let div3 = document.createElement('div');
        div3.innerHTML += "массив после = " + arr1 + '<br>';
        div3.innerHTML += "удаленный элемент" + shifted;
        div3.className = 'out-1';
        but3.after(div3);

    }
    but3.onclick = fun3;

    // task 4 

    // Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift ( читать за метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?

    let div4_4 = document.querySelector('.task4');
    let but4 = document.createElement('button');
    but4.className = 'u-4__unshift';
    but4.innerText = 'task 4';
    div4_4.after(but4);

    function fun4() {

        arr1.unshift(1, 2, 3, 4, 5);

        let div4 = document.createElement('div');
        div4.innerHTML += "  метод unshift добавляет  элемент " + arr1 + '<br>';
        div4.className = 'out-1';
        but4.after(div4);

    }
    but4.onclick = fun4;

}

document.querySelector('.task-1').onclick = fun1;

// task 5 
//Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. Результат применения выводите в div.out-5.
//let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

function fun5() {

    let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

    // Назавание inputa 1 
    let divt1 = document.querySelector('.div_task_5');
    divt1.innerText = "Введите  индекс элемента";

    //создаю input 1
    let inp1 = document.createElement('input');
    inp1.className = 'inp5_1';
    divt1.after(inp1);

    //Назавание inputa 2
    let divt2 = document.querySelector('.div_task_5_2');
    divt2.innerText = "Введите  количество элементов";

    //создаю input 2
    let inp2 = document.createElement('input');
    inp2.className = 'inp5_2';
    divt2.after(inp2);

    //создаю кнопку 
    let div5_3 = document.querySelector('.div_task_5_3');
    let but_splice = document.createElement('button');
    but_splice.innerText = 'splice';
    but_splice.className = 'but_splice';
    div5_3.after(but_splice);

    but_splice.onclick = () => {
        // для первого input 1
        console
        if (inp1 == '') {
            document.querySelector('.div_input_alert_1').innerHTML += "<p> Вы ввели пустую строку !!</p>";
        }
        inp1 = +inp1.value;

        // для первого input 2
        if (inp2 == '') {
            document.querySelector('.div_input_alert_2').innerHTML += "<p> Вы ввели пустую строку !!</p>";
        }
        inp2 = +inp2.value; // удаляю пробелы

        // method splice
        arr5.splice(inp1, inp2);

        // создаю div.out-5
        let divout = document.createElement('div');
        divout.innerHTML += 'массив arr method splice = ' + arr5;
        divout.className = 'divout_5';
        but_splice.after(divout);
    }
}
document.querySelector('.task_5').onclick = fun5;

//task 6 
//Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:

function fun6() {
    let arr6 = [];
    // Назавание inputa 1 
    let divt1 = document.querySelector('.div_task_6');
    divt1.innerText = "Введите  элемента для добавение в конец массива";

    //создаю input 1
    let inp1 = document.createElement('input');
    inp1.className = 'inp6';
    divt1.after(inp1);

    //создаю кнопку 
    let but_6 = document.createElement('button');
    but_6.innerText = 'метод push';
    but_6.className = 'but_push';
    inp1.after(but_6);

    let flag = 0;
    //метод push
    but_6.onclick = function () {
        num1 = +inp1.value;
        // console.log(arr6);
        if (num1.value == '') {
            console.log('enter number');
        } else if (num1.value != '') {
            arr6[flag] = num1;
            flag = flag + 1;
            num1 = '';
        }
        console.log(arr6);
        // enter array on site
        let divout = document.createElement('div');
        divout.innerHTML += 'массив arr method push = ' + arr6;
        divout.className = 'divout_6';
        but_6.after(divout);
    }



}

document.querySelector('.task_6').onclick = fun6;

//task 7
//Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
//удаляет последний элемент массива
//Выводит массив на страницу

function fun7() {
    let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

    // Назавание inputa 1 
    let divt1 = document.querySelector('.div_task_7');
    divt1.innerText = "Изначальный массив = " + arr7;

    //создаю кнопку 
    let but_7 = document.createElement('button');
    but_7.innerText = 'метод pop';
    but_7.className = 'but_pop';
    divt1.after(but_7);

    // функция, которая эмулирует работу метода pop
    but_7.onclick = () => {
        arr7.length = arr7.length - 1;
        // enter array on site
        document.querySelector('.div_task_7_out').innerHTML += 'массив arr method pop = ' + arr7 + '<br>';

    }


}
document.querySelector('.task_7').onclick = fun7;

//task 8
//Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
//Создает новый массив где нулевым элементом выступает первый элемент исходного массива
//Выводит массив на страницу

function fun8() {
    let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];

    // вывожу массив arr8
    let divt1 = document.querySelector('.div_task_8');
    divt1.innerText = "Изначальный массив = " + arr8;

    //создаю кнопку 
    let but_8 = document.createElement('button');
    but_8.innerText = 'метод shift';
    but_8.className = 'but_shift';
    divt1.after(but_8);

    // функция, которая эмулирует работу метода pop
    but_8.onclick = () => {

        arr8 = arr8.slice(1, arr8.length);
        // enter array on site
        document.querySelector('.div_task_8_out').innerHTML += 'массив arr method pop = ' + arr8 + '<br>';
    }

}
document.querySelector('.task_8').onclick = fun8;

//task 9 
//Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:

// читает содержимое input в переменную
// создает новый массив где нулевым элементов задает считанную из input строку
// дописывает остальные значения старого массива в новый
// Выводит массив на страницу

function fun9() {
    let arr9 = [1, 2, 3, 4, 5, 6, 7, 8];
    let newarr9 = [];
    // Назавание inputa 1 
    let divt1 = document.querySelector('.div_task_9');
    divt1.innerText = "введите элемент, который будет добавлен в начало массива  ";

    //создаю input 1
    let inp1 = document.createElement('input');
    inp1.className = 'inp9';
    divt1.after(inp1);

    // Назавание начальный массив
    let divt2 = document.querySelector('.div_arr_9');
    divt2.innerText = "Изначальный массив = " + arr9;

    //создаю кнопку 
    let but_9 = document.createElement('button');
    but_9.innerText = 'метод unshift';
    but_9.className = 'but_unshift';
    divt1.after(but_9);

    // функция, которая эмулирует работу метода pop
    but_9.onclick = () => {

        inp1 = +inp1.value;

        newarr9[0] = inp1;
        for (let i = 0; i < arr9.length; i++) {
            newarr9[i + 1] = arr9[i];
        }
        console.log(newarr9);
        // enter array on site
        document.querySelector('.div_task_9_out').innerHTML += 'массив arr method unshift = ' + newarr9 + '<br>';
        inp1 = "";

    }
}
document.querySelector('.task_9').onclick = fun9;

//task 10
//Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, массив arr10 выподится в div.out-10.

function fun10() {

    let arr10 = [2, 4, 6, 8, 10, 'hello'];

    document.querySelector('.div_task_10').innerHTML = 'Масссив до применения метода reverse    ' + arr10;

    //create button
    let divout = document.querySelector('.div_task_10');
    let butt = document.createElement('button');
    butt.innerText = 'метод reverse';
    butt.className = 'but_reverse';
    divout.after(butt);

    butt.onclick = () => {
        //метод reverse
        arr10.reverse();

        //вывод массива
        document.querySelector('.div_task_10_out').innerHTML = 'Масссив после применения метода reverse    ' + arr10;
    }

}
document.querySelector('.task_10').onclick = fun10;

//task 11
//Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.

function fun11() {

    //объявляю массив
    let arr11 = [0, 2, 3, 7, 8, 5, 11];

    //текст перед input
    let divt = document.querySelector('.div_task_11');
    divt.innerText = "Введите элемент, который хотите найти в массиве"

    // создаю int
    let int1 = document.createElement('input');
    int1.className = 'u-11__input';
    divt.after(int1);

    // создаю кнопку 
    let divtt = document.querySelector('.div_but_11');
    let but1 = document.createElement('button');
    but1.innerText = 'indexOf';
    but1.className = 'u-11__button';
    divtt.after(but1);

    // создаю функцию 
    but1.onclick = () => {
        let u11 = +int1.value;
        let out = arr11.indexOf(u11);

        //вывожу на страницу результат поиска элементов
        document.querySelector('.div_task_11_out').innerHTML = "Результат применения метода indexOF   " + out;

    }
}
document.querySelector('.task_11').onclick = fun11;

//task 12
//Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:

// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// Если совпадения нет выводить -1.

function fun12() {

    //объявляю массив
    let arr12 = [0, 2, 3, 7, 8, 5, 11];

    //текст перед input
    let divt = document.querySelector('.div_task_12');
    divt.innerText = "Введите элемент, который хотите найти в массиве"

    // создаю int
    let int1 = document.createElement('input');
    int1.className = 'u-12__input';
    divt.after(int1);

    // создаю кнопку 
    let divtt = document.querySelector('.div_but_12');
    let but1 = document.createElement('button');
    but1.innerText = 'indexOf';
    but1.className = 'u-12__button';
    divtt.after(but1);

    // создаю функцию 
    but1.onclick = () => {

        let u11 = +int1.value;
        let out = -1;
        console.log(u11);
        for (let i = 0; i < arr12.length; i++) {
            if (u11 == arr12[i]) {
                out = [i];
            } else if (u11 != arr12[i]) {
                continue;
            }
        }
        console.log(out);

        //вывожу на страницу результат поиска элементов
        document.querySelector('.div_task_12_out').innerHTML = "Результат применения метода indexOF <br> Элемент находитья в массиве под индексом =  " + out;

    }
}
document.querySelector('.task_12').onclick = fun12;

//task 13 
//Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:

// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.

function fun13() {
    // СОЗДАЮ МАССИВ
    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    let rev = [];
    //Отображаю старый массив
    let divt = document.querySelector('.div_task_13');
    divt.innerHTML += "Изначальный массив arr <br>" + arr;
    // создаю кнопку 
    let divtt = document.querySelector('.div_but_13');
    let but1 = document.createElement('button');
    but1.innerText = 'reverse';
    but1.className = 'u-13__button';
    divt.after(but1);

    //пишу функцию 
    but1.onclick = function funcReverse() {
        // перебрать старый массив с конца
        // первы вариант
        for (let i = arr.length; i >= 0; i--) {
            rev.push(arr[i]);
        }
        document.querySelector('.div_13_out').innerHTML = " Массив после метода reverse" + rev;
    }
}
document.querySelector('.task_13').onclick = fun13;

//task 14
//Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.

function fun14() {

    //текст перед input
    let divt = document.querySelector('.div_task_14');
    divt.innerText = "Введи число элементов в массиве"

    // создаю int
    let int1 = document.createElement('input');
    int1.className = 'u-14__input';
    divt.after(int1);

    // создаю кнопку 
    let divtt = document.querySelector('.div_but_14');
    let but1 = document.createElement('button');
    but1.innerText = 'rendom';
    but1.className = 'u-14__button';
    divtt.after(but1);

    let arr = [];
    //function
    but1.onclick = () => {

        let int = +int1.value;
        console.log(int);
        arr.length = int;
        console.log(arr.length);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(Math.random() * (100 - 0) + 0);
        }

        console.log(arr);

        //вывожу на страницу результат поиска элементов
        document.querySelector('.div122').innerHTML += 'arr = ' + arr;
    }
}
document.querySelector('.task_14').onclick = fun14;

// task 15 
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15 (элементы с четным индексом). Выведите на экран.

function fun15() {

    // использую массив
    let arr = [1, 2, 3, 4, 5];
    document.querySelector('.div_task_15').innerHTML = 'старый массив ' + arr;
    //кнопка 

    // создаю кнопку 
    let divt = document.querySelector('.div_but_15');
    let but = document.createElement('button');
    but.innerText = 'even number';
    but.className = 'u-15_button';
    divt.after(but);

    //function
    but.onclick = () => {
        console.log(arr);
        let res15 = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                res15.push(arr[i]);
            }
            console.log(res15);
        }
        document.querySelector('.div_15_out').innerHTML = "результат  " + res15;
    }
}
document.querySelector('.task_15').onclick = fun15;

//task 16
//Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.
//let arr16_1 = [3, 5, 7 ];
// let arr16_2 = [2, 4, 6 ];

function fun16() {

    // использую массив
    let arr16_1 = [3, 5, 7];
    let arr16_2 = [2, 4, 6];

    // создаю кнопку 
    let divt = document.querySelector('.div_but16');
    let but = document.createElement('button');
    but.innerText = 'concat';
    but.className = 'u-16_button';
    divt.after(but);

    // метод concat
    but.onclick = () => {
        let arr16 = arr16_1.concat(arr16_2);
        document.querySelector('.out_16').innerHTML = 'Результат метода concat  ' + arr16;
    }
}
document.querySelector('.task_16').onclick = fun16;


//task 17
//Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.

function fun17() {
    // создаю кнопку 
    let divt = document.querySelector('.div_but_17');
    let but = document.createElement('button');
    but.innerText = 'funcConcat';
    but.className = 'u-16_button';
    divt.after(but);


    let arr16_1 = [3, 5, 7];
    let arr16_2 = [2, 4, 6];

    but.onclick = function funcConcat() {
        //создал копию массива
        let arr16 = arr16_1.slice();
        console.log(arr16);
        for (let i = 0; i < arr16_2.length; i++) {
            arr16.push(arr16_2[i]);
        }

        document.querySelector('.out_17').innerHTML = 'Результат метода concat   ' + arr16;
    }
}

document.querySelector('.task_17').onclick = fun17;

// task 18
//Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes). Результат применения includes выводите на страницу в div.out-18.

function fun18() {

    //текст перед input
    let divt = document.querySelector('.div_task_18');
    divt.innerText = "Введи значение, которое хотите найти в массиве"

    // создаю int
    let int1 = document.createElement('input');
    int1.className = 'u-18__input';
    divt.after(int1);

    // создаю кнопку 
    let divtt = document.querySelector('.div_but_18');
    let but = document.createElement('button');
    but.innerText = 'includes';
    but.className = 'u-18__button';
    divtt.after(but);

    but.onclick = () => {
        let arr16_1 = [3, 5, 7, 11, 12, 13, 14];

        int1 = +int1.value;
        let known = arr16_1.includes(int1);

        document.querySelector('.out_18').innerHTML = " Результат применения метода includes " + known;
    }

}
document.querySelector('.but_18').onclick = fun18;

//task 19
//Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:

// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.

function fun19() {

    //текст перед input
    let divt = document.querySelector('.div_task_19');
    divt.innerText = "Введи значение, которое хотите найти в массиве"

    // создаю int
    let int1 = document.createElement('input');
    int1.className = 'u-19__input';
    divt.after(int1);

    // создаю кнопку 
    let divtt = document.querySelector('.div_but_19');
    let but = document.createElement('button');
    but.innerText = 'includes';
    but.className = 'u-19__button';
    divtt.after(but);

    let arr19 = [3, 5, 7, 11, 12, 13, 14];
    let strout = '';

    but.onclick = () => {

        int1 = +int1.value;
        for (let i = 0; i < arr19.length; i++) {
            if (arr19[i] === int1) {
                strout = ' true';
                console.log(strout);
                break;
            } else {
                strout = ' false';
            }

        }
        document.querySelector('.out_19').innerHTML = " Результат применения метода includes " + strout;
    }
}
document.querySelector('.but_19').onclick = fun19;

//task 20
//Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). Результа выведите на страницу.

function fun20() {
    let arr20 = ['I', 'had', 'done', 'unit', 11, ];
    //изначальный массив
    document.querySelector('.div_task_20').innerHTML = 'изначальный массив ' + arr20;


    // создаю кнопку 
    let divtt = document.querySelector('.div_but_20');
    let but = document.createElement('button');
    but.innerText = 'join';
    but.className = 'u-20__button';
    divtt.after(but);

    but.onclick = () => {
        let strout = arr20.join(' ');

        document.querySelector('.out_20').innerHTML = " Результат применения метода includes " + strout;
    }

}
document.querySelector('.but_20').onclick = fun20;