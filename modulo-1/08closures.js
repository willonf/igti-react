function IMC() {
    let altura = 1.80;

    function calcula() {
        let peso = 70;
        console.log(`IMC: ${peso / Math.pow(altura, 2).toFixed(3)}`);
    }

    return calcula();
}

// IMC();

function Carro() {
    this.proprietario = "Willon";
    let ano = 2021;
    this.getAno = () => ano
    this.setAno = function (a) {
        ano = a;
    }
}

let carro = new Carro();

console.log(`Proprietário: ${carro.proprietario}`)
console.log(`Ano do carro: ${carro.ano}`)
console.log(`Ano do carro: ${carro.getAno()}`)
