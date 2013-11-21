module.exports.controller = function(app) {

  app.get('/calendar', function(req, res) {

    if (req.session.loggedIn) {
      // user is logged in.
      console.log('Logged in');
      var calendarModel = require('../models/calendar');

      calendarModel.get_calendar(function(results){

        var data = {};
        data.results = results;

        res.render('calendar', data);
      });
    }
    else {
      // user is not logged in.
      console.log('Not logged in');
      res.redirect('login');
    }
  });

  app.get('/event/day', function(req, res) {

     if (req.session.loggedIn) {
      // user is logged in.
      console.log('Logged in');

      var calendarModel = require('../models/calendar');

      var day = req.query.id;

      calendarModel.get_day(day, function(results){

        var data = {};
        data.results = results;

        res.render('event', data);
      });
    }
    else {
      // user is not logged in.
      console.log('Not logged in');
      res.redirect('login');
    }
  });

   app.get('/event/event', function(req, res) {

    if (req.session.loggedIn) {
      // user is logged in.
      console.log('Logged in');

      var calendarModel = require('../models/calendar');

      var id = req.query.id;

      calendarModel.get_event(id, function(results){

        var data = {};
        data.results = results;

        res.render('eventEdit', data);
      });
    }
    else {
      // user is not logged in.
      console.log('Not logged in');
      res.redirect('login');
    }
  });
}