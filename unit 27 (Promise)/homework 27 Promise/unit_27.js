
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let a = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1')
            .then(data => {
                resolve(data.text());
            })
    })
    let b = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Vlad')
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([a, b]).then(value => {
        console.log(value);
        document.querySelector('.out-1').innerHTML += value[0] + "<br>" + value[1];

        console.log(value[0]);
        console.log(value[1]);
    })
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;
// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {

    let a = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=1&num2=25')
            .then(data => {
                resolve(data.text());
            })
    })
    let c = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=1&num2=25')
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([a, c]).then(value => {
        document.querySelector('.out-2').innerHTML = value[0] + "<br>" + value[1];

        console.log(value[0]);
        console.log(value[1]);
    })
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let p1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5')
            .then(data => {
                resolve(data.text())
            })
    })
    let p2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=1&num2=56')
            .then(data => {
                resolve(data.text())
            })
    })
    Promise.all([p1, p2]).then(value => {
        document.querySelector('.out-3').innerHTML = value[0] + "<br>" + value[1];

        console.log(value[0]);
        console.log(value[1]);
    })
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let p1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7')
            .then(data => {
                resolve(data.text());
            })

    })
    let p2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1998')
            .then(data => {
                resolve(data.text());
            })

    })
    Promise.all([p1, p2]).then(value => {
        document.querySelector('.out-4').innerHTML = value[0] + "<br>" + value[1];
        console.log(value[0]);
        console.log(value[1]);
    });
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let p1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=1',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    let p2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Vlad', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Vlad',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([p1, p2]).then(value => {
        document.querySelector('.out-5').innerHTML = value[0] + "<br>" + value[1];
        console.log(value[0]);
        console.log(value[1]);
    })
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;
// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let p1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=59&num2=289', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=59&num2=289',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    let p2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=59&num2=289', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=59&num2=289',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([p1, p2]).then(value => {
        document.querySelector('.out-6').innerHTML = value[0] + "<br>" + value[1];
        console.log(value[0]);
        console.log(value[1]);
    })
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let p1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=5',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    let p2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=59&num2=289', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=59&num2=289',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([p1, p2]).then(value => {
        document.querySelector('.out-7').innerHTML = value[0] + "<br>" + value[1];
        console.log(value[0]);
        console.log(value[1]);
    })
}


// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let p1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=7',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    let p2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=2001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=2001',
        })
            .then(data => {
                resolve(data.text());
            })
    })
    Promise.all([p1, p2]).then(value => {
        document.querySelector('.out-8').innerHTML = value[0] + "<br>" + value[1];
        console.log(value[0]);
        console.log(value[1]);
    })
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;
