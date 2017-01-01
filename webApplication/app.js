var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.listen(8080);

var days = ['Monday' , 'Tuesday' , 'WednesDay' , 'Thursday' , 'Friday'];
var serviceDays = days.slice(0);
app.get('/reset/days' ,function(res ,req){
	serviceDays = days.slice(0);
	res.json(serviceDays);
});
app.post('remove/day',function(res,req){
	if(serviceDays.length>2){
		serviceDays.splice(serviceDays.indexOf(req.body.day) , 1);
		console.log(days);
		res.json(serviceDays);
	}else{
		res.json(400 , {msg:'You must leave 2 days'});
	}
});