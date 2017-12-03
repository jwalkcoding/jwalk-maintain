var express = require('express');
var app = express();
var settings = require('../settings');
var ctlr = require('../controllers/applications');

/*************SET UP*************/
var bodyParser = require('body-parser');

var port = process.env.PORT || settings.webPort;

//path to static assets
app.use('/assets', express.static('public'));

app.use(bodyParser.json()); //parse out json in the http req body
app.use(bodyParser.urlencoded({ extended: true })); //handle characters converted to % #

//set up view engine
app.set('view engine', 'ejs');

/**************APIs/Routes******************/
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api/applications', function(req, res) {
    ctlr.getApplicationList(req, res);
});

app.listen(port);