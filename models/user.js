const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	email: { type: String, default: 'No user email' },
	password: { type: String, default: 'No user password' },
	token: { type: Array },
});

module.exports = model('User', userSchema);
