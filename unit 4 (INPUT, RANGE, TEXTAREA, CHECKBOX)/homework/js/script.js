// Unit 4 
// Вохмянин Владислав
// Работаем с формами: input, range, textarea, checkbox...


// task 1 
// Создайте button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.button-1').onclick = () => {
    alert('task 1');
}

// task 2 
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.
document.querySelector('#in-but').onclick = () => {
    alert('task 2');
}

// task 3 
// Создайте p - при нажатии на него выводите alert с номером задачи.
document.querySelector('#p-ta3').onclick = function () {
    alert('Task 3');
}

// task 4 
// Создайте input(checkbox) и button 
// - при нажатии на него выводите true если checkbox выбран и false если нет.
document.querySelector('#but-tas4').onclick = () => {
    console.log(document.querySelector('#task-check4').checked);
}

// task 5 
// Создайте input(checkbox) и button. Добавьте value для checkbox.
//  При нажатии на него выводите value если checkbox выбран и false если нет.
document.querySelector('#but-tas5').onclick = () => {
    let checktas5 = document.querySelector('#task-check5');
    if (checktas5.checked == true) {
        console.log(checktas5.value);
    } else if (checktas5.checked == false) {
        console.log(checktas5.checked);
    }
}

// task 6 
// Создайте input(hidden) 
// и button - при нажатии на него выводите alert с value прописанным в input.
document.querySelector('#but-tas6').onclick = () => {
    alert(document.querySelector('#task-check6').value);
}

// task 7 
// Создайте input(password) и button -
//  при нажатии на него выводите alert с value прописанным в input. 
// Выводите в консоль предупреждение, если длина пароля меньше 6 символов.
document.querySelector('#but-tas7').onclick = () => {
    let inpassw = document.querySelector('#task-check7');
    if (inpassw.value.length <= 6) {
        alert('Длинна пароля меньше 6 символов');
    } else if (inpassw.value.length > 6) {
        alert(inpassw.value.length);
    }
}

// task 8 
// Создайте div и кнопку. 
// При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML).
//  Добавьте на созданную кнопку событие - при клике выводить
//   alert c содержимым созданного input.
let but8 = document.querySelector('#but-tas8');
let div8 = document.querySelector('#dv-task8');
but8.onclick = () => {
    div8.innerHTML = '<input type="text"  value=" write " id="task-check8"> <br> <button id="but-tas81">task 8 check 2</button>'
    let but81 = document.querySelector('#but-tas81');
    // let inp8 = document.querySelector('#task-check8')
    but81.onclick = () => {
        alert(document.querySelector('#task-check8').value);
    }
}

// task 9
// Создайте один input(radio) .//  и button
//  - при нажатии на button выводите alert
//   с value прописанным в активном 
//   (если он активен, если нет - то alert - false) radiobutton.
let inp9 = document.querySelector('#in9rad');
document.querySelector('#but-tas9').onclick = () => {
    if (document.querySelector('#in9rad').checked == true) {
        alert(inp9.value);
        console.log(inp9.value);
    } else if (document.querySelector('#in9rad').checked != true) {
        alert('false');
    }
}

// task 10 
// Создайте input(color) и button 
// - при нажатии на него окрашивайте div выбранным цветом.
let but10 = document.querySelector('#but-tas10');
let inp10 = document.querySelector('#task10');
but10.onclick = () => {
    but10.innerHTML = ' </br> <div id="div10"> hgvhgv </div>';
    document.querySelector('#div10').style.background = inp10.value;
    // but10.style.background  = inp10.value;
}

// task 11
// Создайте input(color) - два элемента и button 
// - при нажатии на кнопку присвойте цвет из первого input в value второго.
let but11 = document.querySelector('#but-tas11');
let inpold = document.querySelector('#task11-1').value;
let inpnew = document.querySelector('#task11-2').value;
but11.onclick = () => {
    inpnew.value == inpold.value;
    console.log('change');
}

// task 12
// Создайте input(date) и button
//  - при нажатии на кнопку выводите на страницу выбранную дату.

let inp12 = document.querySelector('#task12').value;
document.querySelector('#but-tas12').onclick = () => {
    document.querySelector('.divtask12').innerHTML += inp12;

    console.log(inp12);
}

// document.querySelector('button.date').onclick = () => {
//     console.log(document.querySelector('#one_date').value);
// }

// task 13
// Создайте input(range) и button
//  - при нажатии на кнопку выводите на страницу значение из input.
//   Добавьте событие oninput на range и тоже выводите значение на страницу.
let inp13 = document.querySelector('#inp13');
document.querySelector('#but-tas13').onclick = () => {
    document.querySelector('.divtask13').innerHTML = document.querySelector('#inp13').value;
}
inp13.oninput = () => {
    document.querySelector('#span13').innerHTML = document.querySelector('#inp13').value;
}

// task 14 
// Создайте text-area и button
//  - при нажатии на кнопку выводите на страницу значение из textarea.
let texar14 = document.querySelector('#textar14');
let but14 = document.querySelector('#but-tas14');
but14.onclick = () => {
    document.querySelector('.dv14').innerHTML = texar14.value;
    console.log(texar14.value);
}

// task 15
// Создайте text-area, input и button - 
// при нажатии на кнопку выводите текст из input в textarea и на страницу.
let texar15 = document.querySelector('#textar15');
let inpu15 = document.querySelector('#inp15');
let but15 = document.querySelector('#but15');
but15.onclick = () => {
    texar15.innerHTML += inpu15.value;
    console.log(inpu15.value);
}

//task 16
// Создайте select и button - 
// при нажатии на кнопку выводите на страницу value выбраннов в select option.
let select16 = document.querySelector('#sel16');
let but16 = document.querySelector('#but16');
let div16 = document.querySelector('.dv16');
but16.onclick = () => {
    div16.innerHTML += select16.value;
    console.log(sel16.value);
}

// task17
// Эту задачу пока не делаем!!!!!

// task 18
// Создайте select добавьте на него событие onchange.
//  По данному событию выводите value выбранного option на страницу.
let select18 = document.querySelector('#sel18');
let div18 = document.querySelector('.dv18');
select18.onchange = () => {
    div18.innerHTML = select18.value;
    console.log(select18.value);
}

// task 19 
// Создайте форму. В ней input(text) и input(password)
//  - и кнопку. По нажатию кнопки выводите значение text
//   и password в консоль!.
document.querySelector('#but19').onclick = function (event) {
    event.preventDefault();
    let form = document.querySelector('#form19');
    console.log(form);
    console.log(document.querySelector('#inp19text').value);
    console.log(document.querySelector('#inp19pass').value);
}

// task 20 
// Создайте форму. В ней input(text) и input(password)
//  - и кнопку. По нажатию кнопки выводите значение text
//   и password в консоль! Используйте
//    form.elements (читать)
document.querySelector('#but20').onclick = function (event) {
    event.preventDefault();
    let form = document.querySelector('#form20');
    console.log(form);
    console.log(form.elements.inp20text.value);
    console.log(form.elements.inp20pass.value);
}