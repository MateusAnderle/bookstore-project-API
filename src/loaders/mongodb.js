const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://mateusanderle:a1b2c3d4e5@cluster0.b6m7qh4.mongodb.net/test');
}

module.exports = startDB;