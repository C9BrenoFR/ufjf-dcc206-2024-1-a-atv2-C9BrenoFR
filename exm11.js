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

Promise.all([fazTarefa1(), fazTarefa2(), fazTarefa3()]).then(t => console.log(t));
