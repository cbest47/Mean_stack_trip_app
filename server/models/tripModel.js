var mongoose = require("mongoose");

var TripSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, "Please, give the name of your trip"]
	},
	country: {
		type: String,
		required: [true, "Please list a Country"]
	},
	city: {
		type: String,
		required: true,
		minlength: [2, "Please include the full city name"]
	},
	date: {
		type: Date,
		required: true
	}
})

mongoose.model('Trip', TripSchema);
