// USANDO PROXY COM REFLECT

let translate = {
    'Carro': 'Car',
    'Ano': 'Year'
};

let handlerTranslate = {
    get(target, prop, receive) {
        if (prop in target) {
            return Reflect.get(target, prop);
        }
        return prop;
    },
    set(target, prop, receive) {
        if (typeof receive == 'string') {
            return Reflect.set(target, prop, receive);
        } else {
            return false;
        }
    }
}

translate = new Proxy(translate, handlerTranslate)

console.log(translate['Carro']);
console.log(translate['Ano']);
console.log(translate['Nome']);
translate['Modelo'] = 'Model';
translate['Marca'] = 123456;
console.log(translate['Modelo']);
console.log(translate['Marca']);
console.log('-----------------')

const hideProp = (target, prefix = '_') => {
    return new Proxy(target, {
            has: (target, prop) => {
                prop.startsWith(prefix) && (prop in target);
            },
            get: (target, prop, receiver) => {
                prop in receiver ? target[prop] : undefined;
            },
            ownKeys: (target) => {
                Reflect.ownKeys(target).filter(prop => (!prop.startsWith(prefix) || (typeof prop !== "string")));
            }
        }
    )
}

let Carro = hideProp({
    Ano: 2020,
    Modelo: 'Polo',
    _proprietario: "Will"
})

console.log(Carro._proprietario);
console.log('_proprietario' in Carro);
console.log(Object.keys(Carro))
