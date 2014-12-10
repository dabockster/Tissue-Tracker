var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

//initialize db schema

/*
module.exports = mongoose.model('Tissue', {
	issue: String
});
*/

var schema = new Schema({
	issue: String
});

module.exports = mongoose.model('Tissue', schema);