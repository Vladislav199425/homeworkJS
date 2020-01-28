
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1(event) {
    console.log(event)
    document.querySelector('.out-1').innerHTML += 'touch ';
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);
// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let flag = 0
function t2(event) {
    flag++;
    document.querySelector('.out-2').innerHTML = flag;
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2)

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    document.querySelector('.out-3').innerHTML = 1;
}

function t32(event) {
    document.querySelector('.out-3').innerHTML = 2;
}
// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3)
document.querySelector('.div-3_2').addEventListener('touchstart', t32)

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4(event) {
    console.log(event);
    document.querySelector('.div-4').addEventListener('touchstart', t41);

}
function t41() {
    console.log(2);
    document.querySelector('.out-4').innerHTML = 'touch';
}
// ваше событие здесь!!!
document.querySelector('.div-but').addEventListener('touchstart', t4);;
// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    console.log(1);
    // document.querySelector('.div-but').addEventListener('null', t4);

    // ПОКА ПРОПУСТИЛ !!!!!
}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('touchstart', t5);
// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent = 'touchend';
}

// ваше событие здесь!!!
//заменил ontouchend на touchend, так как проверить иначе в браузере невозможно
document.querySelector('.div-4').addEventListener('touchend', t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    console.log(1);
    let blok = document.querySelector('.div-7');
    blok.style.background = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').addEventListener('touchstart', t7);
// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
    console.log(a8);
    // items[Math.floor(Math.random()*items.length)];
    let rand = a8[Math.floor(Math.random() * a8.length)];
    console.log(typeof (rand));
    let blok = document.querySelector('.div-8');
    blok.style.background = rand;
}

// ваше событие здесь!!!
document.querySelector('.div-8').addEventListener('touchstart', t8)

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    console.log(event);
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w = 75;
function t10() {
    flag++;
    console.log(1);
    let blosk = document.querySelector('.div-10');
    blosk.style.width = w + flag + 'px';
}

// ваше событие здесь!!!
document.querySelector('.div-10').addEventListener('touchmove', t10);
// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    console.log(event);
    let radiusX = event.touches[0].radiusX;
    let radiusY = event.touches[0].radiusY;
    document.querySelector('.out-11').innerHTML = 'radiusX   ' + radiusX + '<br>';
    document.querySelector('.out-11').innerHTML += 'radiusY  ' + radiusY;
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('touchstart', t11);



// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/
const a = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
function t12(event) {
    // оперделим кнопки 
    let butprev = document.querySelector('.prev');
    let butnext = document.querySelector('.next');

    let flag = 0;

    //оперделил изображения в html документе
    let imgsmall = document.querySelectorAll('div-12-wrapper>img');
    let imgmax = document.querySelector('.div-12-maxx > img');


    //добавляю кнопку для сборса  задания 

    let butresrt = document.createElement('button');
    butresrt.classList.add('reset');
    butresrt.classList.add('button-primary');
    butresrt.innerText = 'reset';
    butnext.after(butresrt);

    // по нажатию на катринку
    imgsmall.forEach(function (item, index) {
        item.classList.remove('active-img');
        item.onclick = function () {
            imgmax.src = `img/${a[index]}`;
            console.log(index);
            item.classList.add('active-img');

        }

        if (item.src != imgmax.src) {
            item.classList.remove('active-img');
            console.log(' else item' + item);
            console.log(imgmax.src);
        }

        // с кнопкой prev
        // prev - то появляется изображение идущее перед текущим.
        butprev.onclick = function () {
            flag = index;
            if (flag == 0) {
                imgmax.src = `img/${a[a.length]}`;
                console.log('index if ' + flag);
            }
            else if (flag > 0) {
                flag--;
                imgmax.src = `img/${a[flag]}`;
                console.log('index else ' + flag);
            }
        }
        // кнопка next
        butnext.onclick = () => {
            flag = index;
            console.log('next flag' + flag);
            console.log('a.length' + a.length);
            if (flag == a.length - 1) {
                console.log('flag == a.length')
                let ou = 0;
                imgmax.src = `img/${a[ou]}`;
                console.log('index if 2 ' + flag);
            }
            else if (flag >= 0) {
                flag++;
                imgmax.src = `img/${a[flag]}`;
                console.log('index else 2' + flag);
            }
        }

    })

    // работа с  reset
    butresrt.onclick = () => {
        imgmax.src = `img/${a[0]}`;
    }



}

// ваше событие здесь!!!
t12();


