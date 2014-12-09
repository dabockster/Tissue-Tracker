//tells JS linter to shut up since Node follows its own Javascript conventions
/* jslint node: true  */ 

//nothing can be used without declaring it as a var
'use strict';

//dependencies
var express				= require('express'), //Express.js webserver
	app_root			= __dirname + "/client", //placeholder for folder path
	fs					= require('fs'), //Node.js filesystem library
	morgan				= require('morgan'),	//HTTP request console logger
	errorhandler		= require('errorHandler'),
	mongoose			= require('mongoose'),
	tissueController 	= require('./server/controllers/tissue-controller'); //build/stack error dumper

//initialize db connection
mongoose.connect('mongodb://localhost:27017/343-demo');

//initialize Express server
var app = express();

//log EVERY HTTP request to the console
app.use(morgan('dev'));

//log ALL build/runtime errors
app.use(errorhandler( { dumpExceptions: true, showStack: true } ) );

//HTTP request to index.html
app.get('/', function(req, res){
	//send index.html on GET request
	res.sendFile(app_root + '/views/index.html');
});

//redirect HTTP requests to correct directories
app.use('/js', express.static(app_root + '/js'));
app.use('/css', express.static(app_root + '/css'));

//API
app.get('/api/tissues', tissueController.list);
app.post('/api/tissues', tissueController.create);

//listener - param is port number
app.listen(3000, function(){
	console.log('Express.js server now listening on port 3000...');
});