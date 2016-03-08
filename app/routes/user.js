var db = require('../models')

exports.signUp = function(req, res) {
	res.render('signup');
}

exports.register = function(req, res){
	console.log('!!!REGISTER', req.body, db.User);
	 db.User.find({where: {username: req.username}}).then(function (user){
		if(!user) {
			db.User.create({username: req.body.username, password: req.body.password}).error(function(err){
				console.log('^^^^^^^^^^^^^',err);
			});
		} else {
			res.redirect('/signup')
		}
		return null;
	})
	res.redirect('/pdx')
};