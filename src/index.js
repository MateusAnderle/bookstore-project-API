require('dotenv').config()
const app = require('./app');
const Loaders = require('./loaders');
const cors = require('cors');

Loaders.start();

app.use(cors());

app.listen(process.env.PORT || 3333);