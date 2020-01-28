// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
class Goods2 extends Goods {
    constructor(name, amount, image, count, out, sale) {
        super(name, amount, image, count)
        this.sale = sale;
        this.out = out;
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<div class='outt3'> <i class="material-icons">     ${this.image} </i>     ${this.amount}  Sale ${this.sale}</div>`;
    }
}