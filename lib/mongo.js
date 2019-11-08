const db = require('mongoose');
const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
const MongoDb = db.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connection successful');

module.exports = MongoDb
