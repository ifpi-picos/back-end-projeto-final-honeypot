const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/index')
const database = require('./src/config/database');

const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.listen(3000), () => {
    database();
    console.log("App Online");
}