const express = require('express');
const app = express();
var cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { testConnection } = require('./chat-service');
const { END_POINTS } = require('./constants');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Testing Product Server: We are Up !!')
})

app.get('/product', (req, res) => {
    testConnection('http://product-detail:4000/product-detail').then(resp => {
        res.send({
            productName: "Gucci Facade",
            resp
        });
    });
})

app.get('/api/v1/product', (req, res) => {
    res.send({
        productName: "Gucci Facade",
        resp: "I am working as expected"
    });
})

server.listen(3000, () =>
    console.log(`server running on port 3000!`));