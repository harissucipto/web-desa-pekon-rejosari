var keystone = require('keystone');
const beranda = 'beranda';

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// load Halman data

	view.on('init', function (next) {
		keystone
			.list('Halaman')
			.model.find({ jenisHalaman: { $ne: beranda } })
			.exec(function (err, results) {
				locals.halaman = results;
				next(err);
			});

		// get data beranda
	});

	view.on('init', function (next) {
		keystone
			.list('Halaman')
			.model.findOne({ jenisHalaman: beranda })
			.exec(function (err, results) {
				locals.home = results;
				next(err);
			});
	});

	view.on('init', function (next) {
		keystone
			.list('Post')
			.model.find().limit(3).select('title slug')
			.exec(function (err, results) {
				locals.kabar = results;
				next(err);
			});
	});

	// Render the view
	view.render('index');
};
