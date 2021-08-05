// ASSINCRONIA

// Promises são ações executadas no futuro, que podem ou não acontecer;
// Estados:
// Pending: Pendente
// Fulfill: promise aceita
// Reject: promise não ocorreu
// Toda promise retorna 2 métodos: then (resolvida) e catch (não resolvida)
// Também é possível encadear promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso 1'), 3000)
})

p1.then((res) => {
    console.log((res))
}, (rej) => {
})

new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso 2'), 2000)
}).then((res) => {
    console.log(res)
}, (rej) => {
})

// USANDO O CATCH PARA REJEIÇÃO DA PROMISE
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso 2'), 4000)
})

p2.then((res) => {
    console.log(res)
})
p2.catch((rej) => {
    console.log('Erro')
})

p2.then((res) => {
    console.log(res)
}).catch((rej) => {
})


const p3 = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve("Sucesso P3")
    }
    reject("Falha P3")
})

p3.then(console.log).catch(console.error)

const p4 = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve("Sucesso P4")
    }
    reject("Falha P4")
})

// Nesse caso, o catch (por último) é invocado sempre que qualquer "then" falhe

p4.then(function acao1(res) {
    console.log(`${res} da ação 1`);
    return res;
})
    .then(function acao2(res) {
        console.log(`${res} da ação 2`);
        return res;
    })
    .then(function acao3(res) {
        console.log(`${res} da ação 3`);
        return res;
    })
    .catch(function erro(rej) {
        console.error(rej)
    });


const p5 = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve("Sucesso P5")
    }
    reject("Falha P5")
})


p5.then(function acao1(res) {
    console.log(`${res} da ação 1`);
    return res;
})
    .catch(function erro1(rej) {
        console.error('Erro no 1º catch');
        return rej;
    })
    .then(function acao2(res) {
        console.log(`${res} da ação 2`);
        return res;
    })
    .then(function acao3(res) {
        console.log(`${res} da ação 3`);
        return res;
    })
    .catch(function erro(rej) {
        console.error(rej)
    });


const p6 = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve("Sucesso P6")
    }
    reject("Falha P6")
})


p6.catch(function erro1(rej) {
    console.error('Erro 1 no 1º catch');
    return rej;
})
p6.catch(function erro2(rej) {
    console.error('Erro 2 no 1º catch');
})

p6.then(function acao1(res) {
    console.log(`${res} da ação 1`);
    return res;
})
    .then(function acao2(res) {
        console.log(`${res} da ação 2`);
        return res;
    })
    .then(function acao3(res) {
        console.log(`${res} da ação 3`);
        return res;
    })

const p7 = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
        resolve("Sucesso P6")
    }
    reject("Falha P6")
})

p7.catch(function erro1(rej) {
    console.error('Erro 1 no 1º catch');
    return rej;
})

p7
    .then(function acao1(res) {
        console.log(('Promessa rejeitada na acao1'));
        throw new Error('error');
    })
    .catch(
        function erro2(rej) {
            console.error('Tratamento das rejeições em P7 ou ação 1');
            return rej;
        })
    .then(function acao2(res) {
        console.log(`${res} da ação 2`);
        return res;
    })
    .then(function acao2(res) {
        console.log(`${res} da ação 2`);
        return res;
    })
    .catch(
        function erro2(rej) {
            console.error('Tratamento das rejeições em ação 2 e ação 3')
        })

