/* function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Márcio', 'm@m.com')
// console.log(novoUser.exibirInfos());

function Admin(role) {
    User.call(this, 'Marcio', 'm@m.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin');

console.log(novoUser.exibirInfos());
console.log(novoUser.role);
 */

const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    }, 

    exibirInfos: function() {
        return this.nome
    }
}

const novoUser = Object.create(user);
novoUser.init('Marcio', 'm@m.com');
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('Márcio'));
// console.log(user.isPrototypeOf(novoUser));


