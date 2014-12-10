var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

//initialize db schema
var schema = new Schema({
	issue: String
});

//return reference to db
module.exports = mongoose.model('Tissue', schema);