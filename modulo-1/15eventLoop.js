// Event Loop

console.log('Início...');
setTimeout(function getLog(){
    console.log("Fim")
}, 5000);

console.log("Aguarde...");
Promise.resolve("Sucesso").then((res) => {console.log(res)}, (rej)=>{})