var mysql      = require('mysql');
var connection = mysql.createConnection({
   port     :  8889,
   host     : 'localhost',
   database : 'calendar',
   user     : 'root',
   password : 'root',
   multipleStatements: true,
});

module.exports.add_event = function(month, year, day, text, event) {

	connection.query('insert into event_table(user_id, m, d, y, text)values(1, ' + month + ', ' + day + ', ' + year + ',' + '"' + text + '");' , function(err, result) {
		event(result);
	});

};

module.exports.update_event = function(month, year, day, text, id, event) {

	connection.query('update event_table set m = ' + month + ', y = ' + year + ', d = ' + day + ', text = "' + text + '" where id =' + id, function(err, result) {
		event(result);
	});

};

module.exports.delete_event = function(id, event) {

	connection.query('delete from event_table where id =' + id, function(err, result) {
		event(result);
	});

};