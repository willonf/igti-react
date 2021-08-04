// Proxy é um objeto que representa outro objeto

let Carro = {
    proprietario: "Will",
    ano: "2021"
};

const handler = {
    get(target, prop, receive) {
        console.log(`GET ${prop}`);
        if (prop in target) {
            return target[prop];
        }
        return "Propriedade inexistente!";
    }
}

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.ano);
console.log(carroProxy.ano);
console.log('-----------------')
console.log(Carro.modelo); // Resultado padrão: undefined.
console.log(carroProxy.modelo); // Resultado padrão: undefined. Com o proxy é possível mudar isso
console.log('-----------------')

let translate = {
    'Carro': 'Car',
    'Ano': 'Year'
};

let handlerTranslate = {
    get(target, prop, receive) {
        if (prop in target){
            return target[prop];
        }
        return prop;
    },
    set(target, prop, receive) {
        if(typeof receive == 'string'){
            target[prop] = receive;
            return true; // Obrigatório ter esse retorno
        } else {
            return false;
        }
    }
}

let translateProxy = new Proxy(translate, handlerTranslate)


console.log(translateProxy['Carro']);
console.log(translateProxy['Ano']);
console.log(translateProxy['Nome']);

translateProxy['Modelo'] = 'Model';
translateProxy['Marca'] = 123456;
console.log(translateProxy['Modelo']);
console.log(translateProxy['Marca']);
