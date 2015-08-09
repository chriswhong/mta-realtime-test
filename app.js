//based on https://github.com/yuningalexliu/mta-realtime, this app exposes the NYC GTFS-realtime 'entities' as JSON

var express = require('express')
var morgan = require('morgan')
var http = require('http')
var swig = require('swig')
var socketio = require('socket.io')
var ProtoBuf = require('protobufjs')
var _ = require('underscore')

var app = express()
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

//options to be used in http request.  See config.sample
var options = require('./config').options


var transit = ProtoBuf.loadProtoFile("nyct-subway.proto.txt").build("transit_realtime");

//process the response
var processBuffers = function(response) {
	var data = [];
	response.on('data', function (chunk) {
		data.push(chunk);
	});

	response.on('end', function () {
		data = Buffer.concat(data);
		var decodedFeedMessage = transit.FeedMessage.decode(data);
		tripData = decodedFeedMessage.entity;

	});
}

var tripData;
app.get('/', function(req, res) {
	http.request(options, processBuffers).end(function(){
		res.json(tripData);
	});
	
})

//Run the server
var server = app.listen(3000);