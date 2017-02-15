var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');

module.exports = function(){
	console.log("trips controller loaded up");
	return {
		create: function(req,res){
			console.log(req.body);
			var newTrip = new Trip(req.body);
			newTrip.save(function(err, data){
				if(err){
					console.log("*****GOT ERROR*****")
					console.log(err);
					res.status(422);
					res.json(err);
				}
				else{
					console.log(data);
					res.json(data);
				}
			})
		},

		index: function(req, res){
			Trip.find({}, function(err, results){
				res.json(results);
			});
		},

		show: function(req, res){
      Trip.findOne({_id: req.params.id}, function(err, trip){
        if(err){
          console.log(err);
          res.statusCode = 422;
          res.json(err);
        }
        else{
          res.json(trip);
        }

      });
    },

		delete: function(req, res){
			Trip.remove({_id: req.params.id}, function(err){
				console.log("Trip was deleted");
				res.json("Trip was deleted");
			});
		}




	}
}();
