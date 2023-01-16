const app = require('./app');
const Loaders = require('./loaders');
require('dotenv').config()

Loaders.start();

app.listen(3333, () => console.log('Server is running'));