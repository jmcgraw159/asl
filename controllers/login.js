module.exports.controller = function(app) {

  app.get('/login', function(req, res) {
    res.render('login')
  });

  app.get('/logout', function(req, res) {
  	req.session.loggedIn = false;
  	res.render('index')
  });

  app.post('/getUser', function(req, res){

    var userModel = require('../models/users');
    var email = req.body.email;
    var password = req.body.password;

  	userModel.get_user(email, password, function(results){
  		var data = {};
  		data.results = results;

      var userID = data.results[0].id;

  		console.log(data.results.length);

  		if(data.results.length === 0){

  			console.log('No user');

		    res.render('login');

  		}else {

  			var calendarModel = require('../models/calendar');
		  	calendarModel.get_calendar(function(results){

	  		var data = {};
	  		data.results = results;

	  		req.session.loggedIn = true;

	  		res.render('calendar', data);
		  	});
  		}
  	});
  });
}