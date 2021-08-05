// // ES9
//
// // Promise.prototype.finally()
//
// const api = new Promise((resolve, reject) => {
//     if (Math.random() >= 0.5) {
//         resolve('Sucesso');
//     }
//     reject('Falha');
// });
//
// // api
// //     .then(resolve => {
// //         console.log(resolve);
// //         log();
// //     })
// //     .catch(rej => {
// //         console.error();
// //         log();
// //     })
//
// function logA() {
//     console.log("Chamada concluída!")
// }
//
// // Para evitar repetição de código, usamos o Finnaly:
// api
//     .then(res => {
//         console.log(res);
//     })
//     .catch(rej => {
//         console.error();
//     })
//     .finally(
//         logA
//     )
//
//
// // Operadores Rest/Spread
//
// const valores = {
//     x: 1, y: 2, a: 3, b: 4
// };
//
// const {x, y, ...z} = valores;
// console.log(x);
// console.log(y);
// console.log(z);


// Asynchronous iteration

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
]
// Não preserva a ordem das URL's
async function getTodo() {
    await urls.forEach(async (url, index) => {
        let todo = await fetch(url);
        console.log(`Retorno todo ${index + 1}: ${todo}`);
    })
}

// Preserva a ordem das URL's
async function getTodo2() {
    for (const [index, url] of urls.entries()){
        const todo = await fetch(url);
        console.log(`Retorno todo ${index + 1}: ${todo}`);
    }
}

