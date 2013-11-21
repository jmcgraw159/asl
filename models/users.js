var mysql      = require('mysql');
var connection = mysql.createConnection({
   port     :  8889,
   host     : 'localhost',
   database : 'calendar',
   user     : 'root',
   password : 'root',
   multipleStatements: true,
});

module.exports.add_user = function(email, password, event) {

	connection.query('insert into users(email, password)values("'+ email + '", "' + password + '");' , function(err, result) {
		event(result);
	});

};

module.exports.get_user = function(email, password, event) {

	connection.query('select * from users where email = "' + email + '" and password = "' + password + '";', function(err, result) {
		event(result);
	});

};
