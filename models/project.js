const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
	name: { type: String, default: 'No project name' },
	image: { type: String, default: 'No project image' },
	desc: { type: String, default: 'No project desc' },
	link: { type: String, default: 'No project link' },
});

module.exports = model('Project', projectSchema);
