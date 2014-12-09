var mongoose = require('mongoose');

//initialize db schema
module.exports = mongoose.model('Tissue', {
	issue: String
});