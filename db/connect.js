const mongoose = require('mongoose');
require('dotenv').config()
const connectString = process.env.MONGO_URI;

module.exports = () => mongoose.connect(connectString)

