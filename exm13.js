import http from 'node:http';

const PORTA = 3000;
const server = http.createServer(requisicao);

server.listen(PORTA);
console.log(`Servidor rodando na porta http://127.0.0.1:${PORTA}`);

function requisicao(req, res) {
    res.writeHead(200, {'Content-Type': 'apllication/json, charset=utf-8'});
    const obj = {name: 'Informação', min: 1, max: 10};
    res.write(JSON.stringify(obj));
    res.end();
}

