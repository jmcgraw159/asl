module.exports.controller = function(app) {

  app.get('/calendar', function(req, res) {


  	var calendarModel = require('../models/calendar');

  	calendarModel.get_calendar(function(results){

  		var data = {};
  		data.results = results;

  		res.render('calendar', data);
  	
  	});

  });

}