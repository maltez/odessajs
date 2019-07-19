const { createServer } = require('http');
const { OK } = require('http-status-codes');

const server = createServer((req, res) => {
    res.write(`Hello world is ok - ${OK} \n`);
    res.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server listen on port 3000');
});

