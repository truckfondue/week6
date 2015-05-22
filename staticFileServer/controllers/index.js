var indexController = {
	index: function(req, res) {
		res.render('index');
		//res.header('Content-Type', 'text/html');
	}
};

module.exports = indexController;