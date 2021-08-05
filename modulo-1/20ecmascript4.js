// ES10

// String.prototype.trimStart() e String.prototype.trimEnd()

console.log("    teste@teste.com".trimStart())
console.log("teste@teste.com      ".trimEnd())
console.log("     teste@teste.com  aaa    ".trimLeft());


// Parâmetro opcional do catch

const api = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve('Sucesso');
    }
    reject('Falha');
});

async function request3() {
    try {
        const retorno = await api;
        console.log(retorno);
    } catch  { // Antes catch(err) era obrigatório
        console.error('Error');
    }
}
request3();


// Operações em array: Array.flat() e Array.map()
// Transforma o vetor para um nível abaixo
let arr = [1, 2, 3, 4, [5, 6]];
let arr2 = [1, 2, [3, 4, [5,6]]];
let arr3 = [1, 2, , 3, 4, 5];

console.log(arr.flat())
console.log(arr2.flat(0))
console.log(arr2.flat(1))
console.log(arr2.flat(2))
console.log(arr3.flat())
