// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
class Valid2 extends Valid {
    constructor(email, password, isValid, emaiError, passwordError) {
        super(email, password, isValid)
        this.emaiError = emaiError;
        this.passwordError = passwordError;
    }
    validate() {
        this.email.trim();
        this.password.split('');
        if (this.email == ' ') {
            this.isValid = 'false';
            console.log(`this.isValid =  ${this.isValid}`);
            this.emailError = 'email empty';
            console.log(`this.emailError  = ${this.emailError}`);
        }
        else if (this.email != '') {
            this.emaiError = 'false';
            console.log(`this.emaiError = ${this.emaiError}`);
            console.log(`this.email = ${this.email}`);
        }
        if (this.password.length < 6) {
            this.passwordError = 'true';
            console.log(`password min length 6, this.passwordError  ${this.passwordError}`);
        }
        else if (this.password.length > 6) {
            this.passwordError = 'false';
            console.log(`password ok, this.passwordError  ' + ${this.passwordError}`);
            console.log(`this.password   ${this.password}`);
        }
    }

}