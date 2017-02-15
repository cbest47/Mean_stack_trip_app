var users = require('./../controllers/users.js');
var trips = require('./../controllers/trips.js');
var message = require('./../controllers/message.js');

module.exports = function(app){
	console.log('routes imported');
	app.post('/users', users.create);
	app.post('/login', users.login);
	app.get('/trips', trips.index);
	app.post('/trips/new', trips.create);
	app.get('/trips/:id', trips.show);
	app.delete('/trips/delete/:id', trips.delete);
	app.post('/trips/:id/groupchat', message.create); 
}
