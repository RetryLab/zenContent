function generateUUID() {
	return require('node-uuid').v4().replace(/-/gm, '');
}

exports.generateUUID = generateUUID;

if (!module.parent) {
	console.log(generateUUID());
}