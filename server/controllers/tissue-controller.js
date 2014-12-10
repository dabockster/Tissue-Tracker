//This builds a RESTful API
var Tissue = require('../models/tissue');

module.exports.create = function(req, res){
	//create new tissue based on request data from client
	var tissue = new Tissue(req.body);

	//save to database
	tissue.save(function (err, result) {
		//send as JSON
    	res.json(result);
	});
};

module.exports.list = function (req, res){
	//grab tissues from database
	Tissue.find({}, function (err, tissues) {
		//recieve as JSON
    	res.json(tissues);
  });
};