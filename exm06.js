import http from 'node:http';

const PORTA = 3000;
const server = http.createServer(requisicao);

server.listen(PORTA);
console.log(`Servidor rodando na porta http://127.0.0.1:${PORTA}`);

function requisicao(req, res) {
    res.write("<h1>Hello World!</h1>");
    res.end();
}

