require('dotenv').config()
const app = require('./app');
const Loaders = require('./loaders');
const cors = require('cors');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000")
    app.use(cors());
    next();
})

Loaders.start();

app.listen(process.env.PORT || 3333);