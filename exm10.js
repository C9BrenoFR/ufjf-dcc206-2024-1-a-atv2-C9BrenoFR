function fazTarefa1() {

    return new Promise(
        function (resolve, reject) {
        setTimeout(
            function() {
                resolve("Tarefa 1");
            }, 300);
        }
    );
}

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

fazTarefa1().then(t => console.log(t));
fazTarefa2().then(t => console.log(t));
fazTarefa3().then(t => console.log(t));
