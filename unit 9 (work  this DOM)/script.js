// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1() {
    let task1 = document.querySelector('.u-1');
    task1.style.width = '200px';
    task1.style.paddingBottom = '100px';
}
func_1();

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    let task2 = document.querySelector('.u-2');
    task2.classList.add("css-1");
}
func_2();


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

function func_3() {
    let out = document.querySelectorAll('.u-3');
    for (let i = 0; i < out.length; i++) {
        out[i].onclick = function () {
            this.style.backgroundColor = 'red';
        };
    }
}
func_3();


// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

function func_4() {
    let out = document.querySelectorAll('.u-4');
    for (let i = 0; i < out.length; i++) {
        out[i].onclick = function () {
            this.classList.toggle('css-2');
        };
    }
}

func_4();

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

function func_5() {
    let out = document.querySelectorAll('.u-5');
    for (let i = 0; i < out.length; i++) {
        out[i].onclick = () => {
            out[i].classList.remove('css-3');
        };
    }
}

func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.
let but_6 = document.querySelector('.u-6');

but_6.onclick = function func_6() {
    this.classList.toggle('active');
};



// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    let a = document.createElement('div');
    let clas6 = document.querySelectorAll('.css-3');
    a.innerHTML = 'количество элементов с кассом  css-3 = ' + clas6.length;
    document.querySelector('.class-6').appendChild(a);

}
func_7();

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let out = document.querySelectorAll('.u-1');
    for (i = 0; i < out.length; i++) {
        out[i].setAttribute('title', 'test - data');
    }
}
func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

function func_9() {
    let but = document.querySelectorAll('.u-9');
    for (i = 0; i < but.length; i++) {
        but[i].onclick = () => {
            console.log(but[i].getAttribute('data'));
        };
    }

    let byt = document.querySelectorAll('.u-9');
    for (let i = 0; i < but.length; i++) {
        but[i].onclick = function () {
            console.log(this.getAttribute('data'));
            let a = document.createElement('div');
            a.innerHTML = 'атрибут элемента  ' + this.getAttribute('data');
            document.querySelector('.task9').appendChild(a);

        };

    }
}
func_9();

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

function func_10() {
    let val = document.querySelectorAll('.u-10__button');
    let out = document.querySelector('.u-10__out');
    for (let i = 0; i < val.length; i++) {
        val[i].onclick = function () {
            let a = this.getAttribute('data-currency');
            console.log(a);
            if (a == 'euro') {
                out.innerHTML = '1.2';
            } else if (a == 'usd') {
                out.innerHTML = '1';
            } else if (a == 'rub') {
                out.innerHTML = '0,016';
            }
        }
    }
}
func_10();

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

function func_11() {
    let but11 = document.querySelectorAll('.u-11__button');
    let val = document.querySelector('.u-11_out');
    val = +val.value;
    let outer = document.querySelector('.u-11');
    let outstr = ' ';
    for (let i = 0; i < but11.length; i++) {
        but11[i].onclick = function () {
            let atrit = this.getAttribute('data-currency');
            console.log(atrit);
            if (atrit == 'euro') {
                let a = val * 1.2;
                outstr = 'из usd в euro ' + a + '<br>';
                console.log(outstr);
            } else if (atrit == 'usd') {
                let a = val * 1;
                outstr = 'из usd в usd ' + a + '<br>';
                console.log(outstr);
            } else if (atrit == 'rub') {
                let a = val * 65;
                outstr = 'из usd в rub ' + a + '<br>';
                console.log(outstr);
            }
            outer.innerHTML += outstr;
        }

    }


}

func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let creat = document.createElement('div');
    creat.classList.add('css-4');
    creat.innerHTML = "function 12";
    document.querySelector('.test12').appendChild(creat);
}

func_12();

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let crea = document.createElement('span');
    crea.innerText = " Hello wolrd - append";
    crea.classList.add('css-4');
    let outp = document.querySelector('.u-13');
    outp.append(crea);
}
func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let spand14 = document.createElement('span');
    let outer = document.querySelector('.u-14');

    spand14.innerHTML = "<span> span 14 </span>";
    spand14.classList.add('css-4');
    outer.prepend(spand14);
}
func_14();


// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let outer = document.querySelector('.u-15');
    let spander = document.createElement('span');
    spander.className = ' span-15';
    spander.innerText = ' 15 ';
    outer.before(spander);

}
func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let outer = document.querySelector('.u-16__out');
    let spander = document.createElement('button');
    spander.className = 'u-16';
    spander.innerText = 'Push';
    spander.onclick = () => {
        console.log('u-16');

        let spander = document.createElement('span');
        spander.className = ' span-16';
        spander.innerText = ' u-16 ';
        outer.before(spander);
    }
    outer.appendChild(spander);
}
func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let outer = document.querySelector('.u-17');
    let spander = document.createElement('p');
    spander.className = 'u-17';
    spander.innerText = '17';
    spander.onclick = () => {
        outer.remove();
    }
    outer.after(spander);
}
func_17();

// TASK 19. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

function func_18() {
    let out = document.querySelectorAll('.out-18');
    for (i = 0; i < out.length; i++) {
        out[i].onclick = function () {
            let spander = document.createElement('p');
            spander.className = 'u-18';
            spander.innerText = '18';
            // document.body.append(div18[i]);
            // setTimeout(() => div18[i].remove(), 1000);
            out.after(spander);
        }
    }
}

func_18();
// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(text) {
    let outer = document.querySelector('.u-19');
    let liferist = document.createElement('li');
    liferist.innerHTML += text;
    outer.append(liferist);
}
func_19('текст в конце списка ');

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

function func_20() {
    let outer = document.querySelector('.u-20')
    let input20 = document.createElement('input');
    input20.className = 'inp_20';
    outer.before(input20);

    let outer1 = document.querySelector('.u-20')
    let but20 = document.createElement('button');
    but20.className = 'but_20';
    but20.classList.add('butt20');
    but20.innerText = ' Puch';
    outer1.before(but20);

    // при нажатии на кнопку push записываем текст в input  в  список
    but20.onclick = () => {
        let inters = document.querySelector('.u-20')
        let ul20 = document.createElement('li');
        ul20.className = 'li_20';
        ul20.innerText += input20.value;
        inters.prepend(ul20);
    }

    // текст над checkbox 

    let textcheck = document.createElement('p');
    textcheck.className = 'p-20';
    textcheck.innerText = 'checkbox - важное';
    outer1.before(textcheck);

    // checkbox 
    let outer2 = document.querySelector('.ul_20')
    let check20 = document.createElement('input');
    check20.type = 'checkbox';
    check20.className = 'checkbox_20';
    check20.innerText = 'checkbox - важное';
    outer1.before(check20);

    // кнопка ckeckbox
    let checkt = document.querySelector('.checkbox_20')
    let but21 = document.createElement('button');
    but21.className = 'but_21';
    but21.innerText = ' go';
    checkt.before(but21);

    let but22 = document.querySelector('.but_21');
    but22.onclick = () => {
        let che = document.querySelector('.checkbox_20');
        if (che.checked) {
            let lichek = document.querySelector('.li_20')
            lichek.classList.add('css-5');
        }
    }
}

func_20();