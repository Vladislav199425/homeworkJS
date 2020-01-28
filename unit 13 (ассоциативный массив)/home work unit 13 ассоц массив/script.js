// task 1
//Выведите массив a1 на страницу.

function fun1() {

    let butt = document.querySelector('.task-1');
    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task1';
    butt.after(divout);
    let a1 = {
        3: 'hello',
        'one': 'hi'
    };
    //перебор ассоциат массива
    let out = '';
    for (let key in a1) {
        out += key + '  :  ' + a1[key] + '<br>';
    }
    divout.innerHTML = out;
}
document.querySelector('.task-1').onclick = fun1;

// task 2
//Выведите на страницу элементы из масиива a2 у которых символов больше 4.

function fun2() {

    let butt = document.querySelector('.task-2');
    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task2';
    butt.after(divout);

    let a2 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    //перебор ассоциат массива
    let out = '';
    let aee = '';
    for (let key in a2) {
        let aee = a2[key].split('');
        if (aee.length >= 4) {
            console.log(aee);
            out += key + '  :  ' + a2[key] + '<br>';
        };
    }
    divout.innerHTML = out;
}
document.querySelector('.task-2').onclick = fun2;


// task 3
//Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

function fun3() {

    let butt = document.querySelector('.task-3');
    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task3';
    butt.after(divout);

    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };
    //перебор ассоциат массива
    let out = '';
    let flag = 0;
    for (let key in a3) {
        let flag = key.split('');
        if (flag.length >= 4) {
            console.log(flag);
            out += key + '  :  ' + a3[key] + '<br>';
        };
    }
    divout.innerHTML = out;
}
document.querySelector('.task-3').onclick = fun3;

// task 4
//Выведите на страницу элементы из масиива a4 у которых значение - число.

function fun4() {

    let butt = document.querySelector('.task-4');
    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task4';
    butt.after(divout);

    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };
    //перебор ассоциат массива
    let out = '';
    for (let key in a4) {
        if (typeof (a4[key]) == 'number') {
            out += key + '  :  ' + a4[key] + '<br>';
        };

    }
    divout.innerHTML = out;
}
document.querySelector('.task-4').onclick = fun4;

// task 5
//Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

function fun5() {

    let butt = document.querySelector('.task-5');
    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task4';
    butt.after(divout);

    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };
    //перебор ассоциат массива
    let out = '';
    let sum = 0;
    for (let key in a5) {
        if (typeof (a5[key]) == 'number') {
            sum += a5[key];
            out += key + '  :  ' + a5[key] + '<br>';
        };

    }
    divout.innerHTML = out;
    divout.innerHTML += ' Сумма элементов = ' + sum;
}
document.querySelector('.task-5').onclick = fun5;

// task 6
//Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа.
//Выведите массив на страницу.

function fun6() {
    let butt = document.querySelector('.task-6');
    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task6';
    butt.after(divout);

    let a6 = {
        'name': 'Кристиан',
        'age': 45,
        'sex': 'man',
        'height': 183
    };


    //перебор ассоциат массива
    let out = '';
    for (let key in a6) {
        out += key + '  :  ' + a6[key] + '<br>';
    };

    console.log(a6);
    divout.innerHTML = out;
}
document.querySelector('.task-6').onclick = fun6;

// task 7
//Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

function fun7() {
    // let butt = document.querySelector('.task-7');
    let divouter = document.querySelector('.out_task7');
    divouter.innerHTML = '<h3>Решение задачи 7</h3> <br> Введите ключ и значение ';
    //input1 
    let inp71 = document.createElement('input');
    inp71.className = ' u7-key__input';
    divouter.after(inp71);
    //input 2 
    let inp72 = document.createElement('input');
    inp72.className = ' u7-value__input';
    inp71.after(inp72);
    //button
    let but7 = document.createElement('button');
    but7.className = ' but_7';
    but7.innerText = ' Go ';
    inp72.after(but7);

    //создаю div 
    let divout = document.createElement('div');
    divout.className = ' div_task7';
    but7.after(divout);

    let a7 = {

    };
    let flag = 0;
    but7.onclick = () => {
        flag = flag + 1;
        inp1 = inp71.value;
        inp2 = inp72.value;
        let out = '';
        if (inp1 != '' && inp2 != '') {
            // записываю новый элемент

            //вывод ассоц массива
            let key = inp1;
            a7[key] = inp2;
            // a7.key = numbet;

            for (let key in a7) {
                out += key + '  :  ' + a7[key] + '<br>';
            }
        } else {
            console.log('Введите в input знаачение ');
        }

        divout.innerHTML = out;
    }

    // task 8 
    // удаляю элеммент в соответствии с ключом

    // div out
    // создаю div 8
    let divout8t = document.createElement('div');
    divout8t.className = ' div_task8t';
    divout8t.innerHTML = '<h3> Решение задачи 8</h3> <br> Введите ключ элемента, который хотите удалить  ';
    divout.after(divout8t);

    // input 8
    let inp8 = document.createElement('input');
    inp8.className = 'u8-key__input';
    divout8t.after(inp8);
    //button
    let but8 = document.createElement('button');
    but8.className = 'but_8';
    but8.innerText = 'delete';
    inp8.after(but8);
    // div out 
    //создаю div 8
    let divout8 = document.createElement('div');
    divout8.className = 'div_task8';
    but8.after(divout8);

    // Функция 
    but8.onclick = () => {

        let key = inp8.value;

        if (key != '' && key != '_proto_') {
            if (key in a7) {
                delete a7[key];
                //выводим объект 
                let out2 = '';
                for (let key in a7) {
                    out2 += key + '  :  ' + a7[key] + '<br>';
                }
                document.querySelector('.div_task8').innerHTML = out2;
            } else {
                console.log(' элемента  нет в ассоциативном массиве ');
            }
        } else {
            console.log('Enter key, don"t enter _proto_ ');
        }

    }

    //task 9
    // удаляю элементы с соответствующим значением
    // div out 
    //создаю div 9
    let divout9t = document.createElement('div');
    divout9t.className = 'div_task9t';
    divout9t.innerHTML = '<h3>Решение задачи 9</h3><br> Введите значение   элемента, который хотите удалить  ';
    divout8.after(divout9t);

    // input 9
    let inp9 = document.createElement('input');
    inp9.className = 'u9-delete-value__input';
    divout9t.after(inp9);
    //button
    let but9 = document.createElement('button');
    but9.className = 'but_9';
    but9.innerText = 'delete from value';
    inp9.after(but9);
    // div out 
    //создаю div 9
    let divout9 = document.createElement('div');
    divout9.className = 'div_task9';
    but9.after(divout9);

    // Функция 
    but9.onclick = () => {

        let valueinp = inp9.value;
        if (valueinp != '' && valueinp != '_proto_') {
            for (let key in a7) {
                if (a7[key] == valueinp) {
                    delete a7[key];
                } else {
                    console.log(' данного элемента нет в объекте');
                }
                //выводим объект 
                let out2 = '';
                for (let key in a7) {
                    out2 += key + '  :  ' + a7[key] + '<br>';
                }
                document.querySelector('.div_task9').innerHTML = out2;
            }

        } else {
            console.log('Enter value ');
        }

    }

    //task 10
    //    Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.

    // div out 
    //создаю div 10
    let divout10t = document.createElement('div');
    divout10t.className = 'div_task10t';
    divout10t.innerHTML = '<h3>Решение задачи 10 </h3><br> Введите значение   ключа, который хотите найти в массиве ';
    divout9.after(divout10t);

    // input 10
    let inp10 = document.createElement('input');
    inp10.className = 'u10-has-key__input';
    divout10t.after(inp10);
    //button
    let but10 = document.createElement('button');
    but10.className = 'but_10';
    but10.innerText = 'find an element in an array';
    inp10.after(but10);
    // div out 
    //создаю div 10
    let divout10 = document.createElement('div');
    divout10.className = 'div_task10';
    but10.after(divout10);

    // Функция 
    but10.onclick = () => {

        let finedkey = document.querySelector('.u10-has-key__input').value;
        let outstr = '';
        if (finedkey != '') {
            let key = finedkey;
            if (key in a7) {
                outstr = 'true';
            } else {
                outstr = 'false';
            }
            document.querySelector('.div_task10').innerHTML = outstr;
        } else {
            document.querySelector('.div_task10').innerHTML = 'Введи ключ который хочешь найти';

        }

    }
}
document.querySelector('.task-7').onclick = fun7;

// task 11
//Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.

function fun11() {

    let a11 = {
        'red': [
            'Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная',
        ],
        'green': [
            'Виноградарь', 'Мостицкая', 'Сырец',
            'Дорогожичи', 'Лукьяновская', 'Львовская брама', ' Золотые ворота', ' Дворец спорта', 'Кловская', 'Печерская',
            'Дружбы народов', 'Выдубичи', 'Теличка',
            'Славутич', 'Осокорки', 'Позняки',
            'Харьковская', 'Вырлица', 'Бориспольская',
            ' Красный хутор',
        ],
        'blue': [
            'Героев Днепра', 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь',
            'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»',
            'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки', 'Одесская',
        ]
    }
    //вывожу массив 
    let divout11 = document.querySelector('.div_task_11');
    let outstr = '';
    for (let key in a11) {
        outstr += key + ' :' + a11[key] + "<br>" + '<br>';
    }
    divout11.innerHTML = outstr;

    //task 12 
    //Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.

    // div out 
    //создаю div 12
    let divout12t = document.createElement('div');
    divout12t.className = 'div_task12t';
    divout12t.innerHTML = '<h3>Решение задачи 12 <br> Введите цвет ветки , который хотите найти в массиве </h3>';
    divout11.after(divout12t);

    //sel
    let sel12 = document.createElement('select');
    sel12.className = 'sel_12';
    divout12t.after(sel12);
    // red 
    let sel12_red = document.createElement('option');
    sel12_red.value = 'red';
    sel12_red.innerText = 'red';
    sel12.appendChild(sel12_red);
    //green 
    let sel12_gr = document.createElement('option');
    sel12_gr.value = 'green';
    sel12_gr.innerText = 'green';
    sel12.appendChild(sel12_gr);
    //blue 
    let sel12_bl = document.createElement('option');
    sel12_bl.value = 'blue';
    sel12_bl.innerText = 'blue';
    sel12.appendChild(sel12_bl);

    //button
    let but12 = document.createElement('button');
    but12.className = 'but_12';
    but12.innerText = 'find an element in an array';
    sel12.after(but12);


    // Функция 
    but12.onclick = () => {
        let select = sel12.value;
        let outst = '';
        for (let key in a11) {
            if (key == select) {
                outst += key + '  :  ' + a11[key] + '<br>' + '<br>';
            }
        }
        document.querySelector('.task_12_out').innerHTML += outst + "<br>";
    }


    //TASK 13 
    //Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном
    // порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!


    let task13_t = document.querySelector('#task_13_out');
    task13_t.innerHTML = '<h3>Решение задачи 13 <br> выводит станции ветки в обратном порядке</h3>';

    //button
    let but13 = document.createElement('button');
    but13.className = 'but_13';
    but13.innerText = 'Reverse array';
    task13_t.after(but13);

    // div out 
    //создаю div 13
    let divout13 = document.createElement('div');
    divout13.className = 'div_task13';
    but13.after(divout13);

    // Функция 
    but13.onclick = () => {
        let select = sel12.value;
        console.log(select);
        for (let key in a11) {
            if (key == select) {
                let outst = a11[key].reverse();
                document.querySelector('.div_task13').innerHTML += `линия  ${select}  равно  = станции в обратном порядке ${outst}`;

            }

        }

    }


}
document.querySelector('.buttask_11').onclick = fun11;



//task 14 
//Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

function fun14() {
    let a11 = {
        'red': [
            'Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная',
        ],
        'green': [
            'Виноградарь', 'Мостицкая', 'Сырец',
            'Дорогожичи', 'Лукьяновская', 'Львовская брама', ' Золотые ворота', ' Дворец спорта', 'Кловская', 'Печерская',
            'Дружбы народов', 'Выдубичи', 'Теличка',
            'Славутич', 'Осокорки', 'Позняки',
            'Харьковская', 'Вырлица', 'Бориспольская',
            ' Красный хутор',
        ],
        'blue': [
            'Героев Днепра', 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь',
            'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»',
            'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки', 'Одесская',
        ]
    }
    let but14t = document.querySelector('.task14');
    //вывести ветку на которой эта станция находится
    div14t = document.createElement('div');
    div14t.className = 'div_task14';
    div14t.innerHTML = 'Пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится';
    but14t.after(div14t);

    //button
    let but14 = document.createElement('button');
    but14.className = 'but_14';
    but14.innerText = 'Select staition';
    div14t.after(but14);

    //sel
    let sel14 = document.createElement('select');
    sel14.className = 'sel_14';
    but14.after(sel14);

    let oop;
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            oop = document.createElement('option');
            oop.innerHTML = a11[key][i];
            oop.value = a11[key][i];
            sel14.appendChild(oop);
        }
    }
    // при нажатии на кнопку 
    but14.onclick = () => {
        sel14 = sel14.value;
        let out14 = '';
        for (let key in a11) {
            for (let i = 0; i < a11[key].length; i++) {
                if (a11[key][i] == sel14) {
                    console.log(` Ветка  = key = ${key}`);
                    out14 = `станция находтся на ветке  ${key}`;
                }
            }
            document.querySelector('.task_14_out').innerText = out14;
        }
    }
}
document.querySelector('.task14').onclick = fun14;

//task 15
//Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).

function fun15() {
    //вызываю функцию
    let a11 = {
        'red': [
            'Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная',
        ],
        'green': [
            'Виноградарь', 'Мостицкая', 'Сырец',
            'Дорогожичи', 'Лукьяновская', 'Львовская брама', ' Золотые ворота', ' Дворец спорта', 'Кловская', 'Печерская',
            'Дружбы народов', 'Выдубичи', 'Теличка',
            'Славутич', 'Осокорки', 'Позняки',
            'Харьковская', 'Вырлица', 'Бориспольская',
            ' Красный хутор',
        ],
        'blue': [
            'Героев Днепра', 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь',
            'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»',
            'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки', 'Одесская',
        ]
    }
    // console.log(ac_array());
    let butt15 = document.querySelector('.task15');
    //div new
    let divt15 = document.createElement('div');
    divt15.innerText = 'Пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0). '
    butt15.after(divt15);

    //div для select2
    let divt15_1 = document.createElement('div');
    divt15_1.innerText = 'Станция номер 1  '
    divt15.after(divt15_1);

    //select1 
    let sel1 = document.createElement('select');
    sel1.className = 'select1_15';
    divt15_1.after(sel1);
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            opp = document.createElement('option')
            opp.innerHTML = a11[key][i];
            opp.value = a11[key][i];
            sel1.appendChild(opp);

        }
    }
    //div для select2
    let divt15_2 = document.createElement('div');
    divt15_2.innerText = 'Станция номер 2  '
    sel1.after(divt15_2);

    //select2
    let sel2 = document.createElement('select');
    sel2.className = 'select2_15';
    divt15_2.after(sel2);
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            opp = document.createElement('option');
            opp.innerHTML = a11[key][i];
            opp.value = a11[key][i];
            sel2.appendChild(opp);
        }
    }

    // but еще один 
    let but15_2 = document.createElement('button');
    but15_2.className = 'but_14';
    but15_2.innerText = 'Select staition';
    sel2.after(but15_2);

    //функция 
    but15_2.onclick = () => {
        //перебор 
        sel15_1 = sel1.value;
        sel15_2 = sel2.value;
        let znach1 = '';
        let znach2 = '';
        let poz1 = 0;
        let poz2 = 0;
        let difference = 0;
        let out15 = 'hkgk ';
        let rez = 0;
        for (let key in a11) {
            for (let i = 0; i < a11[key].length; i++) {
                if (sel15_1 == a11[key][i]) {
                    znach1 = key;
                    poz1 = i;
                    console.log(znach1);
                    console.log('poz1  ' + poz1)
                }
                if (sel15_2 == a11[key][i]) {
                    znach2 = key;
                    poz2 = i;
                    console.log('znach2' + znach2);
                    console.log('poz2  ' + poz2);
                }
            }

            //Станции расположены на одинаковых ветках
            if (znach1 == znach2) {
                // расчитываю количество станций между ними 
                difference = poz1 - poz2;
                rez = Math.abs(difference) - 1;
                console.log(rez);

                if (rez > 0) {
                    out15 = `${rez} Количетсво станций  между выбранными станциями`;
                    console.log('больше');
                } else if (rez == 0) {
                    out15 = `${rez} выбраны соседние станции`;
                    console.log('равно');

                }
                // Станции расположены на разных ветках 
            } else if (znach1 != znach2) {
                out15 = 'Станции расположены на разных ветках   ';
            }
        }
        document.querySelector('.task15out').innerHTML = out15;
    }
}

document.querySelector('.task15').onclick = fun15;

//task 16
//Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

function fun16() {
    let butt16 = document.querySelector('.task16');
    //div new
    let divt16 = document.createElement('div');
    divt16.innerHTML = 'Выбирите ветку  метро - в selet будут отображены станции данной ветки '
    butt16.after(divt16)
    let sab = {
        'red': [
            'Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная',
        ],
        'green': [
            'Виноградарь', 'Мостицкая', 'Сырец',
            'Дорогожичи', 'Лукьяновская', 'Львовская брама', ' Золотые ворота', ' Дворец спорта', 'Кловская', 'Печерская',
            'Дружбы народов', 'Выдубичи', 'Теличка',
            'Славутич', 'Осокорки', 'Позняки',
            'Харьковская', 'Вырлица', 'Бориспольская',
            ' Красный хутор',
        ],
        'blue': [
            'Героев Днепра', 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь',
            'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»',
            'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки', 'Одесская',
        ]
    }
    //sel
    let sel16 = document.createElement('select');
    sel16.className = 'sel_16';
    divt16.after(sel16);

    //перебор 
    let radi16 = document.querySelectorAll('#radio16')
    let opti;
    let radio1 = 0;

    for (let j = 0; j < radi16.length; j++) {
        if (radi16[j].checked) {
            radio1 = radi16[j].value;
            console.log(radio1);
            for (let key in sab) {
                if (radio1 == key) {
                    console.log(key);
                    for (let i = 0; i < sab[key].length; i++) {
                        opti = document.createElement('option');
                        opti.innerHTML = sab[key][i];
                        opti.value = sab[key][i];
                        sel16.appendChild(opti);
                    }
                }
            }
        }

    }
}

document.querySelector('.task16').onclick = fun16;

//task 17
//Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.

function fun17() {
    let a17 = {
        'red': [
            ['Академгородок', 0], 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', ['Театральная', 1],
            ['Крещатик', 1], 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', ['Лесная', 0]
        ],
        'green': [
            ['Виноградарь', 0], 'Мостицкая', 'Сырец',
            'Дорогожичи', 'Лукьяновская', 'Львовская брама', [' Золотые ворота', 1],
            [' Дворец спорта', 1], 'Кловская', 'Печерская',
            'Дружбы народов', 'Выдубичи', 'Теличка',
            'Славутич', 'Осокорки', 'Позняки',
            'Харьковская', 'Вырлица', 'Бориспольская',
            [' Красный хутор', 0]
        ],
        'blue': [
            ['Героев Днепра', 0], 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь',
            ['Майдан Незалежности', 1],
            ['Площадь Льва Толстого', 1], 'Олимпийская', 'Дворец «Украина»',
            'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки', ['Одесская', 0]
        ]
    }
    //вывожу на станицу
    console.log(a17);
    let divout17 = document.querySelector('.task17');
    let outstr = '';
    let outarr = '';
    for (let key in a17) {
        outstr += key + ' :' + '<br>';
        console.log(typeof (key));
        for (let i = 0; i <= a17[key].length; i++) {
            if (a17[key].length >= 1) {
                outstr += a17[key][i] + ' ';
            }
        }
        outstr += '<br>';
    }
    outstr += '<br>';
    divout17.innerHTML += outstr;
    divout17.innerHTML += outarr;
}
document.querySelector('.task17_but').onclick = fun17;



//task 19
//Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив
// содержащий название столицы, количество населения, площадь. Выведите его на страницу.

function fun19() {
    let a19 = {
        'Западная Азия': {
            'Китай': {
                'capital': 'Пекин',
                'number_of_poplulation': 1380083000,
                'area': '9 596 960 км²'
            },
            'Южная Корея': {
                'capital': 'Сеул',
                'number_of_poplulation': 51732586,
                'area': '99 274 км²'
            },
        },
        'Юго-Восточная Азия': {
            'Вьетнам': {
                'capital': 'Ханой',
                'number_of_poplulation': 85789573,
                'area': '329 560 км²'
            },
            'Камбоджа': {
                'capital': 'Пномпень',
                'number_of_poplulation': 14805000,
                'area': '181 040 км²'
            },
        },
        'Южная Азия': {
            'Афганистан': {
                'capital': 'Кабул',
                'number_of_poplulation': 32564342,
                'area': '652 864 км²'
            },
            'Бангладеш': {
                'capital': 'Дакка',
                'number_of_poplulation': 168957745,
                'area': '144 000 км²'
            },
        },

    }

    //вывожу его на страницу 
    let outst = '';
    for (let key in a19) {
        outst += `   ${key}`;
        outst += '<br>';
        for (let prop in a19[key]) {
            outst += `   ${prop}`;
            outst += '<br>';
            for (let lsfsf in a19[key][prop]) {
                outst += `   ${lsfsf}  :  ${a19[key][prop][lsfsf]}`;
                outst += '<br>';
            }
        }
    }
    document.querySelector('.task19').innerHTML += outst;
    console.log(a19);
}
document.querySelector('.task19_but').onclick = fun19;

//task 20
//Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.

function fun20() {
    let a19 = {
        'Китай': {
            'capital': 'Пекин',
            'number_of_poplulation': 1380083000,
            'area': '9 596 960 км²'
        },
        'Южная Корея': {
            'capital': 'Сеул',
            'number_of_poplulation': 51732586,
            'area': '99 274 км²'
        },

        'Вьетнам': {
            'capital': 'Ханой',
            'number_of_poplulation': 85789573,
            'area': '329 560 км²'
        },
        'Камбоджа': {
            'capital': 'Пномпень',
            'number_of_poplulation': 14805000,
            'area': '181 040 км²'
        },
        'Афганистан': {
            'capital': 'Кабул',
            'number_of_poplulation': 32564342,
            'area': '652 864 км²'
        },

    }

    but20t = document.querySelector('.but_task20');
    //создаю div с пояснением  
    div20t = document.createElement('div');
    div20t.innerHTML = 'выбирите страну в select';
    but20t.after(div20t);

    // but еще один 
    let but20_1 = document.createElement('button');
    but20_1.className = 'but_15';
    but20_1.innerText = 'any select ';
    div20t.after(but20_1);

    //создаю select 
    let sel20 = document.createElement('select');
    sel20.className = 'sel_20';
    but20_1.after(sel20);

    //наполняю select -- > option
    //выбрать страну

    for (let key in a19) {
        // for (let prop in a19[key]) {
        optim = document.createElement('option');
        optim.innerHTML = key;
        optim.value = key;
        sel20.appendChild(optim);
        // }
    }

    // for (let i = 0; i < sab[key].length; i++) {
    //     opti = document.createElement('option');
    //     opti.innerHTML = sab[key][i];
    //     opti.value = sab[key][i];
    //     sel16.appendChild(opti);



    // подгрузка на страницу данных о стране 
    but20_1.onclick = () => {
        let sel20v = sel20.value;
        let out20 = '';
        console.log('sel20v' + sel20v);
        for (let key in a19) {
            if (sel20v == key) {
                out20 += `  ${key}  `;
                out20 += '<br>';
                for (let prop in a19[key]) {
                    out20 += ` ${prop} : ${a19[key][prop]} `;
                    out20 += '<br>';
                }
                out20 += '<br>';
            }

        }
        document.querySelector('.task20out').innerHTML = out20;
        console.log('sel20v' + sel20v);
    }
}
document.querySelector('.but_task20').onclick = fun20;