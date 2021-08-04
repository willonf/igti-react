// Escopo bloco

// if(true) {
//     const message = "Olá"
// console.log(message);
// }
// console.log(message);

// for (const color of ['verde', 'azul', 'yellow']) {
//     const message = "Olá"
//     console.log(color)
//     console.log(message)
// }
// console.log(color)
// console.log(message)

// Escopo de bloco com var. "var" não cria escopo de bloco
// if (true) {
//     var count = 0;
//     console.log(count);
// }
// console.log(count);

// Dentro de uma função o var cria um escopo local
// function executar1() {
//     var message = "Escopo local com var";
//     console.log(message)
// }
//     console.log(message)
// executar1();

// Escopo local com let e const
// function executar2() {
//     let count = 0;
//     const test = 2;
//
//     function executar3(){}
//     console.log(count)
//     console.log(test)
//     console.log(executar3)
// }
// executar2();
// console.log(count)
// console.log(test)
// console.log(executar2)


// Escopo aninhado
// const glob = 'Global'
// function executar4() {
//     const txt = 'Escopo aninhado'
//
//     if(true) {
//         const name = 'Carro';
//         console.log(txt)
//         console.log(name)
//         console.log(glob)
//     }
//         console.log(name)
// }
// executar4()

// Escopo global
let gName = "willon"
// console.log(gName)

// Hoisting: chamada antes da declaração
printName();

function printName(){
    console.log(`Nome: ${gName}`)
}