import 'dotenv/config'
import express from 'express';
import {boot, getData} from './helpers/data-fetcher';

const port = process.env.PORT || 3000;
const server = express()
    .get("/inspections", (_req, res) => res.json(getData()))
    .listen(port, () => boot());

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
