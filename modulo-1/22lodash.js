import _ from 'lodash';

let cars = ['Palio','Uno', 'Gol', 'Saveiro', 'Hb20', 'Creta', 'Nivus'];

// Primeiro elemento
console.log(_.first(cars));
// Último elemento
console.log(_.last(cars));
// n-Elemento
console.log(_.nth(cars, 3));
// n-Elemento ao contrário
console.log(_.nth(cars, -3));
// Elemento aleatório
console.log(_.sample(cars))

// Embaralhar o array
console.log(`Embaralhando 1: ${_.shuffle(cars)}`)
console.log(`Embaralhando 2: ${_.shuffle(cars)}`)
console.log(cars)


// Gerar um número aleatório
console.log(_.random( 10));
console.log(_.random(1, 10));

// Repetição de execução de funções

_.times(3, () => {
    console.log("Repetindo...")
})

// Delay na função

_.delay(() => {
    console.log("Atrasado, desculpa.")
}, 2000)
console.log("Sequência")

// Validar tipo da variável

let a = 1;
let b = 'Carro';
let c = [1, 2];
let d = {name: "Willon"}

console.log(_.isNumber(a))
console.log(_.isNumber(d))
console.log(_.isString(b))
console.log(_.isArray(c))
console.log(_.isObject(d))

// Min e máx
let numbers = [-4, 3, 2, 6, 19, 15, -8]

console.log(_.min(numbers))
console.log(_.max(numbers))
console.log(_.sum(numbers))


// Curring
function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] [${message}]`);
}
const logCurrying = _.curry(log);
logCurrying(new Date())("Debug")("Exemplo de currying")