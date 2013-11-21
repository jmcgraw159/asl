module.exports.controller = function(app) {

  app.post('/addEvent', function(req, res) {

  	var eventModel = require('../models/event');

  	var month = req.body.month;
  	var year = req.body.year;
  	var day = req.body.day;
  	var text = req.body.text;

  	eventModel.add_event(month, year, day, text, function(results){

  		var data = {};
  		data.results = results;

      var calendarModel = require('../models/calendar');

      calendarModel.get_calendar(function(results){

      var data = {};
      data.results = results;

      res.render('calendar', data);
    
     });
  	});
  });

  app.post('/updateEvent', function(req, res){

  	var eventModel = require('../models/event');

  	var month = req.body.month;
  	var year = req.body.year;
  	var day = req.body.day;
  	var text = req.body.text;
    var id = req.query.id;

  	eventModel.update_event(month, year, day, text, id, function(results){
  		var data = {};
  		data.results = results;

  		 var calendarModel = require('../models/calendar');

      calendarModel.get_calendar(function(results){

      var data = {};
      data.results = results;

      res.render('calendar', data);
    
     });
  	});
  });

  app.get('/deleteEvent', function(req, res){

    var eventModel = require('../models/event');

    var id = req.query.id;

    eventModel.delete_event(id, function(results){
      var data = {};
      data.results = results;

      var calendarModel = require('../models/calendar');

      calendarModel.get_calendar(function(results){

      var data = {};
      data.results = results;

      res.render('calendar', data);

      });
    });
  });
}