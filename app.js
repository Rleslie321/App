const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const routes = require('./routes');

app.use('/app', routes);

app.listen(port);
