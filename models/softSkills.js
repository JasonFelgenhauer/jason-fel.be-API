const { Schema, model } = require('mongoose');

const softSkillsSchema = new Schema({
	name: { type: String, default: 'No skills name' },
});

module.exports = model('SoftSkills', softSkillsSchema);
