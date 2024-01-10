import express from 'express';

const test = {
    test: 'Hello world'
}

const port = process.env.PORT || 3000;
const server = express()
    .get(
        "/inspections",
        (_req, res) => res.json(test)
    )
    .listen(
        port,
        () => console.log(`Express listening at http://localhost:${port}`)
    );

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
