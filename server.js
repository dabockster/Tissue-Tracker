/*
	Steven Bock
	12-2-2014
	CSCE 343

	SOURCES:
	- https://www.youtube.com/watch?v=AEE7DY2AYvI
	- https://github.com/hakimel/reveal.js/
	- https://github.com/grant/MEAN-Stack-Slides
	- https://developers.google.com/speed/libraries/devguide
	- https://developers.google.com/speed/articles/javascript-dom
	- http://expressjs.com/
	- http://browsenpm.org/package.json
	- http://www.w3schools.com/js/js_strict.asp
	- http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
	- https://github.com/expressjs/morgan
	- https://docs.npmjs.com/cli/install
	- http://stackoverflow.com/questions/4462478/jslint-is-suddenly-reporting-use-the-function-form-of-use-strict
	- http://www.learn-angular.org/
	- http://mongoosejs.com/docs/
	- https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript
	- http://www.law.berkeley.edu/faculty/rubinfeldd/Profile/publications/Antitrust_stories_Microsoft.pdf


	BUGS:
	- Inline CSS in /client/views/index.html is a little unpredictable sometimes
*/

//tells JS linter to shut up since Node follows its own Javascript conventions
/* jslint node: true  */ 

//nothing can be used without declaring it as a var
'use strict';

//dependencies
var express				= require('express'), //Express.js webserver
	app_root			= __dirname, //placeholder for folder path
	fs					= require('fs'), //Node.js filesystem library
	morgan				= require('morgan'),	//HTTP request console logger
	errorhandler		= require('errorHandler'), //error logger
	mongoose			= require('mongoose'), //MongoDB DBMS driver
	bodyParser			= require('body-parser'), //easy reading of JSON encoding
	tissueController 	= require('./server/controllers/tissue-controller'); //AngularJS controller (MVC style)

//initialize db connection
mongoose.connect('mongodb://localhost:27017/343-demo');

//initialize Express server
var app = express();

//JSON dependency
app.use(bodyParser.json());

//log EVERY HTTP request to the console
app.use(morgan('dev'));

//log ALL build/runtime errors
app.use(errorhandler( { dumpExceptions: true, showStack: true } ) );

//HTTP request to index.html
app.get('/', function(req, res){
	//send index.html on GET request
	res.sendFile(app_root + '/client/views/index.html');
});

//redirect HTTP requests to correct directories
app.use('/js', express.static(app_root + '/client/js'));
app.use('/css', express.static(app_root + '/client/css'));

//API
app.get('/api/tissues', tissueController.list);
app.post('/api/tissues', tissueController.create);

//listener - param is port number
app.listen(3000, function(){
	console.log('Express.js server now listening on port 3000...');
});