require('dotenv').config();

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    // mongo
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
}

module.exports = config