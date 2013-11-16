var mysql      = require('mysql');
var connection = mysql.createConnection({
   port     :  8889,
   host     : 'localhost',
   database : 'calendar',
   user     : 'root',
   password : 'root',
});

module.exports.get_calendar = function(cal) {

	connection.query('select d, monthName, dw from calendar where m = month(curdate()) and y = year(curdate());', function(err, result) {
		cal(result);
	});

};