
// ассоциативный массив с городами 
let arrcountey = {
    Moscow: '524901',
    Istanbul: '745044',
    Kiev: '703448',
    ['New York']: '5128638',

}
let selec = document.querySelector('#list');
for (let key in arrcountey) {
    // for (let prop in a19[key]) {
    optin = document.createElement('option');
    optin.innerHTML = key;
    optin.value = arrcountey[key];
    selec.appendChild(optin);
}
document.querySelector('#list').onchange = () => {
    code = document.querySelector('#list').value;
    console.log('code');
    console.log(code);
    url = `http://api.openweathermap.org/data/2.5/weather?id=${code}&appid=dc0f950528eb56f064dc772c452e4e92`;
    console.log(url);

    fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            //подключаем название города 
            document.querySelector('.package-name').textContent = data.name;
            //вывод температуры
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + "&deg;";
            // знак градусы &deg;
            document.querySelector('.country').innerHTML = data.sys.country + '<br> Country ';
            //disclaimer 
            //описание 
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];

            //выводим иконку
            document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

            //Wind
            document.querySelector('.Wind').innerHTML = 'Wind  ' + data.wind.speed + ' m/s';
            //Pressure
            document.querySelector('.Pressure').innerHTML = 'Pressure  ' + data.main.pressure;

        })
        .catch(function () {
            // catch any errors
        });
}