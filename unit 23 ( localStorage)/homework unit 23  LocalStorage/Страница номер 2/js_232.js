
// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

function t9() {
    let radiobut = document.getElementsByName('rb-9');
    console.log(radiobut);
    for (let i = 0; i < radiobut.length; i++) {
        radiobut[i].onclick = () => {
            let a9 = radiobut[i].value;
            localStorage.setItem('bg', a9);
            console.log(a9);
        }
    }
}

// ваше событие здесь!!!
t9();

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}

function t10() {

}
// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
    let outsrt = '';
    window.addEventListener('storage', function (e) {
        console.log('change');
        let b11 = JSON.parse(localStorage.getItem('card'));
        for (let key in b11) {
            outsrt += `Key  ${key} : ${b11[key]} <br>`;
        }
        // let tab11 = document.createEvent('div');
        // tab11.classlist.add('table11');
        // tab11.innerHTML = "<table>        <tr><th>текст заголовка</th><th>текст заголовка</th></tr> <!--ряд с ячейками заголовков-->        <tr><td>данные</td><td>данные</td></tr> <!--ряд с ячейками тела таблицы-->        </table>";
        // tab11
        document.querySelector('.out-10').innerHTML += outsrt;
    })

}

// ваше событие здесь!!!
t11();
// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {
    // // кнопки плюс 
    // let but10 = document.querySelector('.save');
    // let butplus = document.createElement('button');
    // butplus.innerText = 'Plus';
    // butplus.classList.add('Plus');
    // but10.after(butplus);
    // // кнопки минус  
    // let butMinus = document.createElement('button');
    // butMinus.innerText = 'Minus';
    // butplus.classList.add('Minus');
    // butplus.after(butMinus);
}

// ваше событие здесь!!!
t12()
// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {

}

// ваше событие здесь!!!