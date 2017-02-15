var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var mongoose = require('./server/config/mongoose.js');
var moment = require('moment');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/bower_components"));

var routeSetter = require('./server/config/routes.js')(app);

var server = app.listen(5000, function(){
  console.log("running on 5000");
});

var io = require('socket.io').listen(server);


var messages = ["Chatroom has started"];

// io.on("connection", function(socket){
//   console.log("new connection on socket ID:" + socket.id);
//
// })
