logApp.factory('tripsFactory', function($http){
	console.log("trips factory loaded up");
	var factory = {};
	var trips = {};

	factory.getTrips = function(callback){
		console.log("I am here in trips factory");
		$http.get('/trips').then(function(response){
			trips = response.data;
			callback(trips);
		})
	}

	factory.newTripCommand = function(newTrip, callback, errorCallback){
		console.log(newTrip);
		$http.post('/trips/new', newTrip).then(callback, errorCallback);
	}

	factory.showTrip = function(id, callback){
		console.log("I am getting inside the factory for show");
		$http.get(`/trips/${id}`).then(function(response){
			console.log('hi', response);
			callback(response.data);
		})
	}

	factory.DeleteTrip = function(id, callback){
		$http.delete(`/trips/delete/${id}`).then(function(response){
			console.log("Im in the callback")
			callback();
		})
	}

	


	return factory;
})
