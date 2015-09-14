var http = require('http');
var urlMod = require('url');
var port = process.argv[2];

var srv = http.createServer(function(req, res) {
	var format =  urlMod.parse(req.url);
	var timeString = Date.parse(format.search.substring(5, format.search.length-1));
	var time = new Date(timeString);
	if(format.pathname.indexOf("parsetime") !== -1) {
		var timeObj = {
			"hour": time.getHours(),
			"minute": time.getMinutes(),
			"second": time.getSeconds()
		}
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(timeObj));
		res.end();
	} else {
		res.writeHead(200, {'Content-Type': 'application/json'});
		var tm = { "unixtime": timeString }
		res.write(JSON.stringify(tm));
		res.end();
	}

});
srv.listen(port);