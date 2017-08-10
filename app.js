var express = require('express');
var bodyparser = require('body-parset');
var config = require('./config');
var session = require('express-session');
var s_router = require('./Router/System/route');
var u_router = require('./Router/User/route');
var conn = require('./Database/connection');
var app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));

app.session({
    key: 'visualkey',
    secret: 'secrete',
    resave: false
});

app.use(bodyparser.json());
app.use('/', s_router);
app.use('/', u_router);


app.listen(config.port, () => {
    console.log(config.port + ' on!');
    conn.init(app, config);
});