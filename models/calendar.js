var mysql      = require('mysql');
var connection = mysql.createConnection({
   port     :  8889,
   host     : 'localhost',
   database : 'calendar',
   user     : 'root',
   password : 'root',
   multipleStatements: true,
});

module.exports.get_calendar = function(cal) {

	connection.query('select d, dt, monthName, holidayDescr, dw, m, y from calendar where m = month(curdate()) and y = year(curdate()); select dt, user_id, et.text, et.m, et.y, id, et.d from calendar right join event_table as et on et.dt_id = 1;', function(err, result) {
		console.log(result);
		cal(result);
	});
};

module.exports.get_day = function(day, fn) {

	connection.query('select * from calendar where dt ="' + day + '"', function(err, result) {
		fn(result);
	});
};

module.exports.get_event = function(id, fn) {

	connection.query('select * from event_table where id =' + id, function(err, result) {
		fn(result);
	});
};