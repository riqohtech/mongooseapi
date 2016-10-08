var mongoose = require('mongoose');

var zombieSchema = new mongoose.Schema({
	Season: {
		type: Number
	},
	Episode: {
		type: Number
	},
	SeriesNumber: {
		type: Number
	},
	Title: {
		type: String
	},
	FirstAirDate: {
		type: String
	},
	USViewers: {
		type: Number
	}
});

mongoose.model('Zombie', zombieSchema);