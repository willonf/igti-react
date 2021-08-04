// IIFE Immediately Invoked Function Expression

// Function declaration:
// function myFunction() {
// }

// Function expression:
// let myFunc = function () {
// }

// IIFE syntax: (function(){}) ();

(function exemplo() {
    console.log("Executando o IIFE")
})();

const unicoID = (function () {
    let count = 0;
    return function (){
        ++count;
        return `id_${count}`;
    }
})();

console.log(unicoID());
console.log(unicoID());