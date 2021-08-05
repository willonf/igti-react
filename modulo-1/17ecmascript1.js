//ES6

if (true) {
    var numero1 = 1;
}

console.log(numero1)

// if (true){
//     let numero2 = 2;
// }
//
// console.log(numero2) // not defined

// const PI = 3.1415
// console.log(PI)
// PI = 3.14
// console.log(PI)

// const Aluno = {
//     nome: "Willon",
//     idade: 26
// }
//
// console.log(Aluno.nome)
// Aluno.nome = "Lily";
// console.log(Aluno.nome)
// Aluno = {nome: "Naty", idade: 26}

// Classes

class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, estepe) {
        super(marca, modelo);
        this.estepe = estepe;
    }

    getInfo() {
        return `Marca: ${super.getMarca()}, Modelo:${super.getModelo()}`;
    }
}


carro1 = new Carro("Hyundai", "HB20", true);
console.log(carro1.getMarca());
console.log(carro1.getInfo());


// Destructing e Swap

let [a, b] = ["Willon", "Naty"];
console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);

const c1 = {modelo: "Onix", ano: 2021}
const {modelo, ano} = c1;
console.log(modelo);
console.log(ano);

// Iterators: for in, for of, prop in, prop of, map, reduce,


//ES7

// Operador de exponenciação

const area = (raio) => {
    return 3.14 * (raio ** 2)
}
console.log(`Área do círculo de raio = 1: ${area(1)}`)


// Array.prototype.includes()
console.log([1, 2, 3].includes(1))
console.log([1, 2, 3].includes(4))
console.log([1, 2, 3, 4, 5, 6, 7, 8].includes(4, 0))
console.log([1, 2, 3, 4, 5, 6, 7, 8].includes(4, 4))
console.log([1, 2, 3, 4, 5, 6, 7, 8].includes(4, -1))
console.log('--------------------');


//ES8
// String paddings

console.log('Willon'.padStart(1));
console.log('Willon'.padStart(7));
console.log('Willon'.padEnd(1));
console.log('Willon'.padEnd(10, '*'));
console.log('Willon'.padEnd(10, ' Ferreira'));
console.log('--------------------');

// Object.entries()

const tipoLogradouro = {
    A: 'Área',
    AER: 'Aeroporto',
    AL: 'Avenida',
    BC: 'Beco',
    R: 'Rua'
}

console.log(Object.entries(tipoLogradouro))
console.log(Object.values(tipoLogradouro))
console.log(Object.keys(tipoLogradouro))
console.log(Object.getOwnPropertyDescriptor(tipoLogradouro, 'BC'))
console.log('--------------------');


// Trailing commas

function Carro(arg1, arg2, arg3, arg4) {

}



