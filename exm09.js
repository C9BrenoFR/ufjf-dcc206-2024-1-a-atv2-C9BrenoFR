function fazTarefa2() {

    return new Promise(
        function (resolve, reject) {
        setTimeout(
            function() {
                resolve("Tarefa 2");
            }, 3000);
        }
    );
}

console.log('Tarefa 1');
const valor2 = fazTarefa2();
valor2.then(function(valor) {
    console.log(valor);
}).then(() => {
    console.log('Tarefa 3');
});