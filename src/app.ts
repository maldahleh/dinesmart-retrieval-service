import 'dotenv/config'
import express from 'express';
import {loadData, getData} from './helpers/data-fetcher';

const DEFAULT_PORT = 3000;
const INSPECTIONS_ENDPOINT = "/inspections";
const TWO_MINUTES_IN_MS = 60 * 2 * 1000;

const port = process.env.PORT || DEFAULT_PORT;
const server = express()
    .get(INSPECTIONS_ENDPOINT, (_req, res) => res.json(getData()))
    .listen(port, () => loadData());

server.keepAliveTimeout = TWO_MINUTES_IN_MS;
server.headersTimeout = TWO_MINUTES_IN_MS;
