//task2
const express = require('express');
const app = express();

// const Sentry = require('@sentry/node');
// const Tracing = require('@tracing/node');

// app.use(Sentry.Handlers.requestHandler());
// app.use(Sentry.Handlers.errorHandler());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sentry.init({dsn: "твой персональный URL"});

const port = 2000;

const routes = require('./routes/index');
app.use('/api', routes);

app.listen(port, () => console.log('Start server'));
