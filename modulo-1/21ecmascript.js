// // ES11
//
// // Tipo BigInt
//
// console.log(Number.MAX_SAFE_INTEGER)
// let number1 = 1n;
// let number2 = BigInt(2);
//
//
// console.log(number1);
// console.log(number2);
// console.log(98213192837198273981239817239n)
//
// let sumBC = number1 + number2;
// console.log(sumBC)
//
//
// // Promise.allSettled()
// console.log(this)
//
//
// // Optional chaining
// // Verifica se há uma propriedade
// const entity = {
//     car: {
//         model: "Palio",
//         owner: "Will",
//         lastName: "da Silva",
//         idade: 26
//     },
//     brand: "Fiat"
// }
//
// let lastName = entity.car.owner && entity.car.owner.lastName
// let lastName2 = entity.car?.owner?.lastName;
//
//
// // Nullish coalescing operator (??)
//
// const chassi = entity.car.chassi || "9b12w";
// console.log(chassi);

// Em alguns contextos o operador OR (||) pode ficar ambíguo, principalmente com variáveis booleans

let request = {
    header: {
        type: '',
        timeout: 0,
        active: false,
    }
}
console.log(request.header.type || 'GET');
console.log(request.header.timeout || 300);
console.log(request.header.active || true);
console.log('----------------\n');
console.log(request.header.type ?? 'GET');
console.log(request.header.timeout ?? 300);
console.log(request.header.active ?? true);

