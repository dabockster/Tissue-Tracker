var mongoose = require('mongoose');

//initialize db schema
module.exports = mongoose.model('Tissues', {
	issue: String
});