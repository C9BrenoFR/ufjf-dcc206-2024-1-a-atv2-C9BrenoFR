Tarefa01();
setImmediate(Tarefa02);
setImmediate(Tarefa03);
console.log('Linha livre!');

function Tarefa01() {
  console.log('Tarefa 01');
}

function Tarefa02() {
  console.log('Tarefa 02 Inicio');
  for (let i = 0; i < 1e10; i++) { }
  console.log('Tarefa 02 Fim');
}

function Tarefa03() {    
  console.log('Tarefa 03');
}