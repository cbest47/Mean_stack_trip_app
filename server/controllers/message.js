var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = function(){
	console.log("trips controller loaded up");
	return {
		create: function(req,res){
			console.log(req.body);
			var newMessage = new Message(req.body);
			newMessage.save(function(err, data){
				if(err){
					console.log("*****GOT ERROR*****")
					console.log(err);
					res.status(422);
					res.json(err);
				}
				else{
					console.log(data);
          // io.emit('new_message', req.body);
					res.json(data);
				}
			})
		}






	}
}();
