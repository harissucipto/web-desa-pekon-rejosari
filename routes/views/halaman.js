var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = req.params.slug;
	console.log(locals.section);

	// load Halman data

	view.on('init', function (next) {
		keystone
			.list('Halaman')
			.model.findOne({ slug: req.params.slug })
			.exec(function (err, results) {
				locals.halaman = results;
				next(err);
			});
	});

	// Render the view
	view.render('halaman');
};
