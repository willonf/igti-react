const carModel = [
    'Onix',
    'T-Cross',
    'HB20',
    'Palio'
];

// Podemos iterar em cima de carModel usando um laço "for", "for of", "for in", "while"

for (let index = 0; index < carModel.length; index++) {
    console.log(carModel[index]);
}
console.log('-----------------------');
(function spread(...carModel) {
    console.log(carModel)
    console.log(carModel[0][0])
})(carModel)
console.log('-----------------------');

const carModelAll = {
    allModels: {
        'Fiat': ['Palio', 'Cronos', 'Toro'],
        'Wolksvagen': ['Gol', 'Up', 'Nivus', 'Tiguan'],
        'Chevrolet': ['Onix', 'Tracker', 'Corsa']
    },
    // Criando o iterator:
    [Symbol.iterator]() {
        const brands = Object.values(this.allModels);
        let currentModelIndex = 0;
        let currentBrandIndex = 0;
        return {
            next() {
                // Lista de todos os modelos da marca
                const models = brands[currentBrandIndex];

                if (!(currentModelIndex < models.length)){
                    currentBrandIndex++;
                    currentModelIndex = 0;
                }

                if(!(currentBrandIndex < models.length)) {
                    return {
                        value: undefined,
                        done: true
                    }
                }

                    return {
                        value: brands[currentBrandIndex][currentModelIndex++],
                        done: false
                    }
            }
        }
    }
}

for (const car of carModelAll) {
    console.log(car);
}


