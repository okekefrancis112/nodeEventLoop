const cluster = require('cluster');

// console.log(cluster.isMaster);

// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* in child mode.
    cluster.fork();
} else {
    // I'm a child, i'm going to act as a server and do nothing else.
        const express = require('express');
        const app = express();


        function doWork(duration) {
            const start = Date.now();
            while(Date.now() - start < duration) {}
        }

        // server
        app.get('/', (req, res) => {
            doWork(5000);
            res.send('Hi there');
        });

        app.listen(3000);
    }