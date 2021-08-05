const api = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve('Sucesso');
    }
    reject('Falha');
});

function request1() {
    api.then(console.log)
        .catch(console.error)
}

request1();

async function request2() {
    const retorno = await api;
    console.log(retorno);
}

request2();

async function request3() {
    try {
        const retorno = await api;
        console.log(retorno);
    } catch (err) {
        console.error(err);
    }
}

request3();

function base2s(x) {
    return new Promise(resolve => {

        return setTimeout(() => {
            return resolve(2 ** x);
        }, 2000)
    })
}

base2s(10).then((res) => {
    console.log(res)
});

let sum = base2s(1) + base2s(2) + base2s(3);

console.log(sum);

base2s(1).then((res) => {
    console.log(res + base2s(2)
        .then((res) => {
            console.log(res + base2s(3)
                .then((res) => {
                    console.log(res)
                }))
        }))
})


function somaPromises() {
    return new Promise(resolve => {
        base2s(1)
            .then((a) =>{base2s(2)
                .then((b) => {base2s(3)
                    .then((c) => {
                        resolve(a+b+c);
                    })
                })
        })
    })
}

somaPromises().then((y) =>{console.log(y)})

// O async await evita o "Promisse hell" acima (muitos then's encadeados)


async function somaPromises2(){
    const a = await base2s(1);
    const b = await base2s(2);
    const c = await base2s(3);
    return a + b + c;
}

somaPromises2().then((res) => {
    console.log(res);
})