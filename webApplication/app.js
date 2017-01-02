var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.listen(8080 ,function(){
	console.log("started");
});

app.use(express.static(path.join(__dirname, 'public')));
var days = ['Monday' , 'Tuesday' , 'WednesDay' , 'Thursday' , 'Friday'];
var serviceDays = days.slice(0);

app.get('/day' ,function(req , res){
	res.sendFile(__dirname+'/public/server_http.html');
});
app.get('/reset/days' ,function(req , res){
	serviceDays = days.slice(0);
	res.json(serviceDays);
});
app.post('/remove/day',function(req,res){
	if(serviceDays.length>2){
		serviceDays.splice(serviceDays.indexOf(req.body.day) , 1);
		console.log(days);
		res.json(serviceDays);
	}else{
		res.json(400 , {msg:'You must leave 2 days'});
	}
});