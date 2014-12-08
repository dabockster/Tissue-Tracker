//This builds a RESTful API
var Tissue = require('../models/tissue');

module.exports.create = function(req, res){
	var tissue = new Tissue(req.body);
	tissue.save(function(err, result){
		res.json(result);
	});
};

module.exports.list = function(res){
	Tissue.find({}, function(err, results){
		res.json(results);
	});
};