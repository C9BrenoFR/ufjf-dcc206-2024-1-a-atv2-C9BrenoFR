Tarefa01();
setTimeout(Tarefa02, 0);
Tarefa03();

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