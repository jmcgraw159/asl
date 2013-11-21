module.exports.controller = function(app) {

  app.get('/register', function(req, res) {
    res.render('register')
  });

  app.post('/addUser', function(req, res){

    var userModel = require('../models/users');

    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;

    if(password !== confirmPassword){
    	res.render('register');
    }else{

    	userModel.add_user(email, password, function(results){
    	var data = {};
    	data.results = results;

    	var calendarModel = require('../models/calendar');

    	calendarModel.get_calendar(function(results){

        var data = {};
        data.results = results;

        req.session.loggedIn = true;

        res.render('calendar', data);
    	 });
  	 });
    }
  });
}