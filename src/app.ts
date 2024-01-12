import "dotenv/config";
import express from "express";
import * as Sentry from "@sentry/node";
import {loadData, inspectionData} from "./helpers/data-fetcher";
import {ProfilingIntegration} from "@sentry/profiling-node";

const DEFAULT_PORT = 3000;
const INSPECTIONS_ENDPOINT = "/inspections";
const TWO_MINUTES_IN_MS = 60 * 2 * 1000;

const port = process.env.PORT || DEFAULT_PORT;
const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({tracing: true}),
    new Sentry.Integrations.Express({app}),
    new ProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.get(INSPECTIONS_ENDPOINT, (_req, res) => res.json(inspectionData));

app.use(Sentry.Handlers.errorHandler({
  shouldHandleError(error) {
    return true;
  },
}));

app.use((_err, _req, res, _next) => {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

const server = app.listen(port, () => loadData());
server.keepAliveTimeout = TWO_MINUTES_IN_MS;
server.headersTimeout = TWO_MINUTES_IN_MS;
