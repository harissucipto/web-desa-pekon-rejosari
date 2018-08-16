var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Halaman = new keystone.List('Halaman', {
	map: { name: 'jenisHalaman' },
	autokey: { path: 'slug', from: 'jenisHalaman', unique: true },
	nocreate: true,
	nodelete: true,
	track: true,
});

Halaman.add({
	judulHalaman: { type: String, required: true },
	jenisHalaman: { type: String, noedit: true },
	gambarBackground: { type: Types.CloudinaryImage },
	image: { type: Types.CloudinaryImage },
	keteranganHalaman: { type: Types.Html, wysiwyg: true, height: 100 },
	isiHalaman: { type: Types.Html, wysiwyg: true, height: 400 },
});

Halaman.defaultColumns = 'jenisHalaman|30%  judulHalaman|30% updatedAt|30%';
Halaman.register();
