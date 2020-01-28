
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1(e) {
    localStorage.setItem(5, 1);
    console.log(e);
}

// значение записалось один раз при повторном вызове функции t1 перезапись одного и тогоже значения

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопке b-2. */

function t2() {
    console.log(2);
    const a2 = [5, 6, 7];
    localStorage.setItem('a2', JSON.stringify(a2));
    let b = localStorage.getItem('a2');
    b = JSON.parse(b);
    console.log(b);
    console.log(b[2]);
    console.log(typeof (b));

}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

//При повторном вызове функции файл JSON  перезаписывается , повторяется вывод в console.log  аналогичных значений.

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    console.log(3);
    let outstr = '';
    let arr3 = localStorage.getItem('a2');
    arr3 = JSON.parse(arr3);
    for (let key in arr3) {
        outstr += `Key ${key} : ${arr3[key]} <br>`;
    }
    document.querySelector('.out-3').innerHTML = outstr;
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
    const a4 = {
        hello: 'world',
        hi: 'me'
    }
    localStorage.setItem('a4', JSON.stringify(a4));
    let b4 = localStorage.getItem('a4');
    b4 = JSON.parse(b4);
    console.log(b4);
    console.log(b4.hello);
    console.log(typeof (b4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

//При повторном вызове функции файл JSON  перезаписывается , повторяется вывод в console.log  аналогичных значений.


// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    let b4 = localStorage.getItem('a4');
    b4 = JSON.parse(b4);
    let outstr = '';
    for (let key in b4) {
        outstr += ` Key ${key} : ${b4[key]} <br>`;
    }
    document.querySelector('.out-5').innerHTML = outstr;
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let a7 = new Array();

// при перезагрузке страницы массив a7  будет всегда равен пустому массиву. Незнаю как это исправить
// let b71 = JSON.parse(localStorage.getItem('a7'));
//     if (typeof (b71) == 'object') {
//         a7.concat(b71);
//         console.log(a7);
//     }



function t7() {

    let oustr = '';
    let inp7 = +document.querySelector('.i-7').value;
    if (inp7 != '') {

        document.querySelector('.out-7_1').innerHTML = '';
        a7.push(inp7);
        console.log(a7);
        localStorage.setItem('a7', JSON.stringify(a7));
        let b7 = JSON.parse(localStorage.getItem('a7'));
        for (let key in b7) {
            oustr += `${b7[key]},  `;
        }
        document.querySelector('.out-7').innerHTML = oustr;

    }
    else {
        document.querySelector('.out-7_1').innerHTML = 'Введите число в input';
    }

}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let oustr = '';
    let b7 = JSON.parse(localStorage.getItem('a7'));
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
    //вывод на страницу для наглядности
    let b8 = JSON.parse(localStorage.getItem('a7'));
    for (let key in b8) {
        oustr += `${b8[key]},  `;
    }
    document.querySelector('.out-8').innerHTML = oustr;
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;

// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */


function t9(e) {
    window.addEventListener('storage', function (e) {
        console.log('change');
        let chenge_back = localStorage.getItem('bg');
        document.querySelector('fieldset').style.background = chenge_back;
        document.querySelector('.out-9').innerHTML = localStorage.getItem('bg');
    });
}


// ваше событие здесь!!!
t9();

// Task 10 ============================================
/*  Проект. Дана переменная cart - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

// const card = {
//     'apple': 3,
//     'grape': 2
// }

function t10() {

    const cart = {
        'apple': 3,
        'grape': 2
    }
    // // добавил кнопку Save 
    let div10 = document.querySelector('.out-10');
    let but10 = document.createElement('button');
    but10.innerText = 'Save';
    but10.classList.add('save');
    div10.after(but10);
    but10.onclick = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    t11();
}
t10();
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
    let count = 0;
    let table11 = document.createElement('table');
    document.querySelector('.out-10').appendChild(table11);

    let tablehead = document.createElement('thead')
    table11.appendChild(tablehead);

    let tablebody = document.createElement('tbody')
    table11.appendChild(tablebody);

    // let row = document.createElement('tr')
    let row = document.createElement('thead')
    table11.appendChild(row);

    let titles = ['name', 'quantity'];

    for (let i = 0; i < titles.length; i++) {
        let trrow = document.createElement('th');
        row.appendChild(trrow);
        trrow.innerText = titles[i];
    }
    // функция которая описана ниже должна вызываться при изменении localStorage ?
    let b = JSON.parse(localStorage.getItem('cart'));
    for (let key in b) {
        tablebody.innerHTML += `<tr class="tr1">
        <td class="product">${key}
        </td>
        <td class="quantity">${b[key]}
        </td>
        <td >
            <button class="plus"> Plus</button>
            <button class="minus"> minus</button>
        </td>
    </tr>`;
        count += b[key]; // необходимо вывести  count  в подвале таблицы
    }
    let currentButton = document.querySelectorAll('.plus');
    currentButton.forEach(plusBtn => {
        plusBtn.addEventListener('click', e => {
            Pluse(e);
        })
    })

    function Pluse(e) {
        let currentItem = e.target.parentNode.querySelector('.product').innerHTML;
        let currentQuantity = e.target.parentNode.querySelector('.quantity').innerHTML;

        let test = JSON.parse(localStorage.getItem('cart'));
        test[currentItem] = currentQuantity + 1;
        console.log(test);

        localStorage.setItem('cart', JSON.stringify(test));
        currentItem[currentQuantity] = localStorage.setItem('cart', JSON.stringify(currentQuantity + 1));

        e.target.parentNode.querySelector('.quantity').innerHTML = currentQuantity + 1;
    }
}