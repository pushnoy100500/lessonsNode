//var fs = require('fs');
module.exports = function() {
var a = 1;
var b = 2;
return {
	logA: function() {
		console.log(a);
	},
	logB: function() {
		console.log(b);
	}
}

}();
