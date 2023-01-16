const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect(process.env.MONGO_URL);
}

module.exports = startDB;