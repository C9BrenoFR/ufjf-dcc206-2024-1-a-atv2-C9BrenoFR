function fazTarefa2() {
    setTimeout(function() {
        return "Tarefa 2";
    }, 1000);
}

console.log('Tarefa 1');
const valor2 = fazTarefa2();
console.log(valor2); 
console.log('Tarefa 3');