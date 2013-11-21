module.exports.controller = function(app) {

  app.get('/', function(req, res) {

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
      res.render('index')
  	}
  });
}