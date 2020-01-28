// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект.
class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image; //картинка 
        this.count = count; // количество на складе
    }
    //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
    draw() {
        document.querySelector('.out-4').innerHTML = `<div class='outt3'> <i class="material-icons">     ${this.image} </i>     ${this.amount} </div>`;
    }
}
