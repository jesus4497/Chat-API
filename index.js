const express = require('express');
const app = express();
const server = require('http').Server(app)
const config = require('./config/config');

const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('./socket');
const router = require('./network/routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
socket.connect(server)

router(app)


app.use('/app', express.static('public'))

server.listen(config.port, () => {
    console.log(`The app is open in ${config.host}:${config.port}`)
})
