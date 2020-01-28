
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    document.querySelector('.out-1').textContent = event.key;
}

// ваше событие здесь!!!
document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    document.querySelector('.out-2').textContent = 'keyCode :' + event.keyCode;
    console.log(event);
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeydown = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3(event) {
    let out = document.querySelector('.out-3');
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        out.textContent = 'false';
    }
    else {
        out.textContent = 'true';
    }
}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    let out = document.querySelector('.i-4').value;
    console.log(typeof (out));
    one = out.toLowerCase();
    document.querySelector('.out-4').textContent = one;

}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeyup = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    let out = document.querySelector('.i-5').value;
    let outsr = out.toUpperCase();
    document.querySelector('.out-5').textContent = outsr;

}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeyup = t5;
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
    //считываю занчения из input
    let out = document.querySelector('.i-6').value;
    let outsr = out.toUpperCase();
    //вывожу в input
    let inout = document.querySelector('.i-6');
    inout.value = outsr;
}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeyup = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [1, 2, 'f', 'aa', true];
    let out = Math.floor(Math.random() * a7.length);
    document.querySelector('.out-7').innerHTML = a7[out];
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeyup = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {

    const a = {
        i: 1,
        o: 0,
        l: 7,
    };
    if (event.key == 'i' || event.key == 'o' || event.key == 'l') {
        document.querySelector('.out-8').innerHTML += a[event.key];
        return false;
    }
    else {
        document.querySelector('.out-8').innerHTML += event.key;
    }

}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let flag = 0;
function t9(event) {
    // let out = document.querySelector('.i-9').value;
    if (event.keyCode >= 37 && event.keyCode <= 40) {
        flag++;
        document.querySelector('.out-9').textContent = flag;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let w = 75;
let h = 75;
let bor = 0;
flag = 0;
function t10() {
    if (event.keyCode == 37 || event.keyCode == 39) {
        flag++;
        bor++;
        let picture = document.querySelector('.div-10').firstElementChild;
        console.log(picture);
        picture.style.width = w + flag + 'px';

        let border = document.querySelector('.div-10');
        border.style.width = w + bor + 'px';
    }

    if (event.keyCode == 38 || event.keyCode == 40) {
        flag++;
        bor++;
        let picture = document.querySelector('.div-10').firstElementChild;
        console.log(picture);
        picture.style.height = h + flag + 'px';

        let border = document.querySelector('.div-10');
        border.style.height = h + bor + 'px';
    }
}


// ваше событие здесь!!!
document.querySelector('.i-10').onkeydown = t10;
// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(event) {
    let attr = document.querySelectorAll('.key');
    console.log(attr);
    attr.forEach(elem => {
        let at = elem.getAttribute('data');
        if (event.key == at && event.key != 'CapsLock') {
            elem.classList.add('black');
            this.onkeyup = (event) => {
                attr.forEach(elem => {
                    if (event.key == at && event.key != 'CapsLock') {
                        elem.classList.remove('black');
                    }
                }
                );
            }
        }

        else if (event.key == 'CapsLock') {
            elem.classList.toggle('black')
        }

    })
}
// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t11;
