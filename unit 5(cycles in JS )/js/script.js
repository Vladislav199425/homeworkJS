// unit 5
// Циклы в JavaScript (часть 1)


// task 1 
//Выведите в консоль с помощью цикла числа от 1 до 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// task 2
//Выведите на страницу с помощью цикла числа от 1 до 10.
let div1 = document.querySelector('.divtack1');
for (let i = 1; i <= 10; i++) {
    div1.innerHTML += i + ' ';
}

//task 3 
//Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.
let div2 = document.querySelector('.divtack2');
for (let i = 10; i >= 0; i--) {
    div2.innerHTML += i + ' ';
}

//task 4 
//Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.
let div4 = document.querySelector('.divtack4');
for (let i = 0; i <= 10; i += 2) {
    div4.innerHTML += i + ' ';
}

//task 5 
//Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.
let div5 = document.querySelector('.divtack5');
for (let i = 21; i >= 0; i -= 2) {
    div5.innerHTML += i + ' ';
}

//task 6
//Используя строку ****** - нарисуйте квадрат 6х6 и выведите его на страницу.
let div6 = document.querySelector('.divtack6');
for (let i = 1; i <= 6; i++) {
    div6.innerHTML += "******" + '<br>';
}

//task 7
//Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от введенного пользователем в input до нуля.
let inp7 = document.querySelector('#inptask7');
let but7 = document.querySelector('#buttask7');
let div7 = document.querySelector('#divtack7');
but7.onclick = () => {
    let e = +inp7.value;
    console.log(e);
    for (; e >= 0; e--) {
        div7.innerHTML += e + ' ';
    }
}

//task 8
//Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем чисел. Считаем что второе число всегда больше первого.
let inp81 = document.querySelector('#inptask81');
let inp82 = document.querySelector('#inptask82');
let div8 = document.querySelector('#divtack8');
let but8 = document.querySelector('#buttask8');
but8.onclick = () => {
    let num1 = inp81.value;
    let num2 = +inp82.value;
    for (num2; num2 >= num1; num2--) {
        div8.innerHTML += num2 + ' ';
    }
}

//task 9
//Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод, если нет - выводим alert о ошибке.
let inp91 = document.querySelector('#inptask91');
let inp92 = document.querySelector('#inptask92');
let div9 = document.querySelector('#divtack9');
let but9 = document.querySelector('#buttask9');
but9.onclick = () => {
    let num1 = inp91.value;
    let num2 = +inp92.value;
    if (num1 < num2) {
        for (num2; num2 >= num1; num2--) {
            div9.innerHTML += num2 + ' ';
        }
    } else {
        alert(' первое число больше второго ');
    }
}

//task 10
//Выведите на страницу все четные годы в промежутке от 1901 до 1950.
let div10 = document.querySelector('#divtack10');
for (let i = 1901; i <= 1950; i++) {
    if (i % 2 != 0) continue;
    div10.innerHTML += i + ' ';
}

//task 11
//Создайте несколько div.one. С помощью length выведите количество div.one на странице.
let one = document.getElementsByClassName('one');
let div11 = document.querySelector('#divtack11');
for (let i = 0; i <= one.length; i++) {
    div11.innerHTML = 'Количество элементов div.one на одной странице =   ' + i + ' ';
}

//task 12
//Создайте несколько div.one. С помощью length выведите количество div.one на странице.
let but12 = document.querySelector('#buttask12');
but12.onclick = () => {
    for (let i = 0; i <= one.length; i++) {
        one[i].style.color = "orange";
    }
}

//task 13
//Создайте кнопку, при нажатии на которую запускается функция. 
// Функция выводит в консоль содержимое всех div.one.

let but13 = document.querySelector('#buttask13');
but13.onclick = () => {
    let dione = document.getElementsByClassName('one');
    for (let i = 0; i < dione.length; i++) {
        console.log(dione[i].outerText);
    }
}

//task14 
//Создайте кнопку, при нажатии на которую запускается функция.
// Функция для всех input[type="text"] устанавливает свойство placeholder = 'Введите данные'
let inp14 = document.querySelectorAll('input[type="text"]');
let but14 = document.querySelector('#buttask14');
console.log(inp14);
but14.onclick = () => {
    for (let i = 0; i < inp14.length; i++) {
        inp14[i].placeholder = 'Введите данные';
    }
}

//task15 
//Создайте кнопку, при нажатии на которую запускается функция.
//  Функция выводит в консоль количество input[type="text"]

let inp15 = document.querySelectorAll('input[type="text"]');
let but15 = document.querySelector('#buttask15');
console.log(inp15);
let j = " ";
but15.onclick = () => {
    for (let i = 0; i < inp14.length; i++) {
        j = i;
    }
    console.log(` количество  input[type="text"] = ${j}`)
}

//task16 
//Создайте три связанных radiobutton[name="p1"]. 
// Задайте им value. При нажатии на кнопку выводите на страницу
// value выбранного
let inprad16 = document.getElementsByName('p1');
let but16 = document.querySelector('#buttask16');
let div16 = document.querySelector('.di16');

let a = " ";
console.log(inprad16);
but16.onclick = () => {
    for (let i = 0; i < inprad16.length; i++) {
        if (inprad16[i].checked) {
            a = inprad16[i].value;
        }
        div16.innerHTML = a;
    }
}

//task 17 
//Добавьте кнопку. При нажатии кнопки делайте первый 
// из созданных radiobutton в примере выше - checked.
let but17 = document.querySelector('#buttask17');
but17.onclick = () => {
    for (let i = 0; i < inprad16.length; i++) {
        if (inprad16[i].checked) {
            inprad16[0].checked = 'true';
        }

    }
}

//task 18
// Получите все radiobutton[name="p1"].
// C помощью цикла замените в них value. 
// Первому элементу присвойте value = 0, второму value = 1 и т.д.
let but18 = document.querySelector('#buttask18');
but18.onclick = () => {
    for (let i = 0; i < inprad16.length; i++) {
        inprad16[i].value = `${i}`;
        console.log(inprad16[i].value);
    }
}

//task 19 
// Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при нажатии на котору проверяйте value выбранного элемента. Если оно не равно 6 - выводите false, если равно - true.
let inprad19 = document.getElementsByName('p2');
let but19 = document.querySelector('#buttask19');
let div19 = document.querySelector('.di19');
but19.onclick = () => {
    for (let i = 0; i < inprad19.length; i++) {
        if (inprad19[i].checked) {
            if (inprad19[i].value != "6") {
                div19.innerHTML = 'false';
            } else if (inprad19[i].value == "6") {
                div19.innerHTML = 'true';
            }
        }

    }
}

//task 20
// Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. При изменении
//состояния input - выводите в консоль текст "был изменен input"

let inprad20 = document.getElementsByName('p3');
console.log(inprad20)
for (let i = 0; i < inprad20.length; i++) {
    inprad20[i].oninput = two;
}

function two() {
    console.log('был изменен input');
}