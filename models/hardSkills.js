const { Schema, model } = require('mongoose');

const hardSkillsSchema = new Schema({
	name: { type: String, default: 'No skills name' },
});

module.exports = model('HardSkills', hardSkillsSchema);
