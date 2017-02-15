var mongoose = require("mongoose");

var MessageSchema = new mongoose.Schema({

	content: {
		type: String,
		required: [true, "Cannot send a blank message"],
    expires: 7200
	}
})

mongoose.model('Message', MessageSchema);
