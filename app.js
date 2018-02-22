const ActionsSdkApp = require('actions-on-google').DialogflowApp;

var googleresp=require('./googlerichresponse');
var request = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var incident = require('./restapimethods');
app.post('/', function (req, res) {

  googleresp.basicCard(req,res);

});

app.listen(portC, function () {
  console.log('AGENT is running my app on  PORT: ' + portC);
});