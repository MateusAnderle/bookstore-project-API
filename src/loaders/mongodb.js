const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('');
}

module.exports = startDB;