// CURRYING

function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] [${message}]`);
}

log(new Date(), "debug", "Exemplo de função sem currying");


// Fazendo o processo de currying:
const logCurrying = date => type => message => console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] [${message}]`)
logCurrying(new Date())("Debug")("Exemplo de Currying")

let logNow = logCurrying(new Date())
logNow("Debug")("Exemplo de currying com parâmetros fixos");

let logDebugNow = logNow("Debug")

logDebugNow("2º exemplo de currying com parâmetros fixos")
