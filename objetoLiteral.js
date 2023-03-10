const user = {
    nome: 'Márcio',
    email: 'marcio@marcio.com',
    nascimento: '1974/09/22',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'mgm@m.com',
    role: 'admin'.replace,
    criarCurso(){
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
