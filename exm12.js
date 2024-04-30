function fazTarefa1() {

    return new Promise(
        function (resolve, reject) {
        setTimeout(
            function() {
                resolve("Tarefa 1");
            }, 3000);
        }
    );
}

function fazTarefa2() {

    return new Promise(
        function (resolve, reject) {
        setTimeout(
            function() {
                resolve("Tarefa 2");
            }, 2000);
        }
    );
}

function fazTarefa3() {

    return new Promise(
        function (resolve, reject) {
        setTimeout(
            function() {
                resolve("Tarefa 3");
            }, 1000);
        }
    );
}

async function fazTudo(){
const t1 = await fazTarefa1();
const t2 = await fazTarefa2();
const t3 = await fazTarefa3();
console.log(t1, t2, t3);
}

console.log('INICIO');
fazTudo();
console.log('FIM');