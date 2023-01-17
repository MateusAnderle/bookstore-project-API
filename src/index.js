require('dotenv').config()
const app = require('./app');
const Loaders = require('./loaders');

Loaders.start();

app.listen(process.env.PORT || 3333);