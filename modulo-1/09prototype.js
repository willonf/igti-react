function Carro() {
    this.proprietario = "Willon";
    this.ano = 2019;
}

Carro.prototype.getAno = function () {
    return this.ano;
}

function Pessoa(nome) {
    if (!nome) {
        this.nome = "Sem nome";
    } else {
        this.nome = nome;
    }
    this.dizerOla = function () {
        console.log(`Olá, ${this.nome}`)
    }
}
console.log("-----------------------------------");
Pessoa.digaOla = () => console.log(`Olá! Meu nome é ${this.nome}`)

let carObject = new Carro();
console.log(`Ano do carro: ${carObject.getAno()}`)
console.log(carObject.toString())
console.log("-----------------------------------");
let pessoaA = new Pessoa('Willon')
let pessoaB = new Pessoa('Lily')
let pessoaC = new Pessoa('Naty')

try {
    pessoaA.digaOla();
} catch (e) {
    console.log(`Falha no pessoaA.digaOla: ${e}`)
}

try {
    pessoaB.digaOla();
} catch (e) {
    console.log(`Falha no pessoaB.digaOla: ${e}`)
}
console.log("-----------------------------------");
pessoaB.digaOla = () => console.log(`Olá! Meu nome é ${pessoaB.nome}`)
try {
    pessoaA.digaOla();
} catch (e) {
    console.log(`Falha no pessoaA.digaOla: ${e}`)
}

try {
    pessoaB.digaOla();
} catch (e) {
    console.log(`Falha no pessoaB.digaOla: ${e}`)
}
console.log("-----------------------------------");
Pessoa.prototype.digaOla = function () {
    console.log(`Olá! Meu nome é ${this.nome}`)
}
try {
    pessoaC.digaOla();
} catch (e) {
    console.log(`Falha no pessoaA.digaOla: ${e}`)
}
console.log("-----------------------------------");
Pessoa.prototype.dizerOla = function () {
    console.log(`${this.nome} vou dizer outro "Olá!"`)
}

pessoaB.dizerOla = function () {
    console.log(`${this.nome} consigo dizer outro "Olá!"`)
}

try {
    pessoaA.dizerOla();
} catch (e) {
    console.log(`Falha no pessoaB.dizerOla: ${e}`)
}

try {
    pessoaB.dizerOla();
} catch (e) {
    console.log(`Falha no pessoaB.dizerOla: ${e}`)
}

try {
    pessoaC.dizerOla();
} catch (e) {
    console.log(`Falha no pessoaA.dizerOla: ${e}`)
}
console.log("-----------------------------------");

// Ordem de busca: escopo da instância -> escopo prototype -> escopo do object