// process.env.UV_THREADPOOL_SIZE = 1;
// const cluster = require('cluster');
const crypto = require('crypto');

// console.log(cluster.isMaster);

// Is the file being executed in master mode?
// if (cluster.isMaster) {
    // Cause index.js to be executed *again* in child mode.
    // cluster.fork();
// } else {
    // I'm a child, i'm going to act as a server and do nothing else.
        const express = require('express');
        const app = express();

        // server
        app.get('/', (req, res) => {
            crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
                res.send('Hi there');
            });
        });

        app.get('/fast', (req, res) => {
            res.send('This was fast');
        });

        app.listen(3000);
    // }