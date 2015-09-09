//HTTP FILE SERVER

var http = require('http');

var port =process.argv[2];









// //time server
// var strftime = require('strftime')
// var net = require('net');

// var port = process.argv[2];

// var srv = net.createServer(function(socket) {
// 	var date = new Date();
// 	//console.log(strftime('%F %H:%M', date));
// 	socket.write(strftime('%F %H:%M', date));
// 	socket.end();
// });


// srv.listen(port);





// // juggling async
// var urls = [process.argv[2], process.argv[3], process.argv[4]];
// var count = 0;
// var responses = ['', '', ''];

// for(var i = 0; i < urls.length; i++) {
// 	getUrl(urls[i], i);
// }



// function getUrl(url, index) {
// 	http.get(url, function(res) {
// 		res.setEncoding('utf8');
// 		var temp = "";
// 		res.on("data", function(data) {
// 			temp = temp + data;
// 		});
// 		res.on("end", function() {
// 			responses[index] = temp;
// 			count++;


// 			if(count >= urls.length) {				
// 				for( var j = 0; j < responses.length; j++) {
// 					console.log(responses[j])
// 				}
// 			}
// 		});
// 	});
// }

