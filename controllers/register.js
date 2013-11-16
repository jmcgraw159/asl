module.exports.controller = function(app) {

  app.get('/register', function(req, res) {
      res.render('register')
  });

}