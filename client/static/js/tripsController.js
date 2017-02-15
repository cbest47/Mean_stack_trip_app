logApp.controller('tripsController', ['tripsFactory', '$location', '$cookieStore','$routeParams', function(tripsFactory, $location, $cookieStore, $routeParams){
	console.log("trips controller loaded");

	var self = this;
	this.validationErrors;
	this.trips = [];
	this.OneTrip = [];

	this.getTrips = function(){
		tripsFactory.getTrips(function(trips){
			console.log(trips);
			self.trips = trips;
		})
	}

	this.newTripCommand = function(){
		console.log(self.newTrip);
		tripsFactory.newTripCommand(self.newTrip, function(data){
		this.trips = data;
		console.log(data);
		$location.url('/trips');

	}, function(error){
		console.log("second callback");
		console.log(error);
		self.validationErrors = error.data.data.errors;
	})
}

	this.showTrip = function(){
	tripsFactory.showTrip($routeParams.id, function(trip){
	self.OneTrip = trip;
	console.log(self.OneTrip);
	self.OneTrip.date = new Date(self.OneTrip.date);

	})

}

	this.DeleteTrip = function(id){
		console.log(id);
		tripsFactory.DeleteTrip(id, function(){
			console.log("about to redirect")
			$location.url('/trips');
		})
	}




}]);
