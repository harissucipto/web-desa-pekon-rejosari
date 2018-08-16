/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{
			'name.first': 'Admin',
			'name.last': 'User',
			'email': 'admin@rejosari.com',
			'password': 'adminrejosari',
			'isAdmin': true,
		},
	],
	Halaman: [
		{
			_id: 'halaman1',
			slug: 'beranda',
			jenisHalaman: 'beranda',
			judulHalaman: 'beranda',
			__v: 0,
		},
		{
			_id: 'halaman2',
			slug: 'profil',
			jenisHalaman: 'profil',
			judulHalaman: 'profil',
			__v: 0,
		},
		{
			_id: 'halaman3',
			slug: 'peta',
			jenisHalaman: 'peta',
			judulHalaman: 'peta',
			__v: 0,
		},
		{
			_id: 'halaman4',
			slug: 'potensi',
			jenisHalaman: 'potensi',
			judulHalaman: 'potensi',
			__v: 0,
		},
		{
			_id: 'halaman5',
			slug: 'kabar',
			jenisHalaman: 'kabar',
			judulHalaman: 'kabar',
			__v: 0,
		},
		{
			_id: 'halaman6',
			slug: 'galery',
			jenisHalaman: 'galery',
			judulHalaman: 'galery',
			__v: 0,
		},
		{
			_id: 'halaman7',
			slug: 'kontak',
			jenisHalaman: 'kontak',
			judulHalaman: 'kontak',
			__v: 0,
		},
	],
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var async = require('async');
var User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin (admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function (err) {
		if (err) {
			console.error('Error adding admin ' + admin.email + ' to the database:');
			console.error(err);
		} else {
			console.log('Added admin ' + admin.email + ' to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(admins, createAdmin, done);
};

*/
