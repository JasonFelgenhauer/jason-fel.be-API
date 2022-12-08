const HardSkills = require('../models/hardSkills');

const getHardSkills = async () => {
	return await HardSkills.find();
};

const getHardSkillsByName = async (name) => {
	return await HardSkills.findOne({ name });
};

const getHardSkillsById = async (id) => {
	return await HardSkills.findById(id);
};

const createHardSkills = async (name) => {
	return await HardSkills.create({ name });
};

const deleteHardSkills = async (id) => {
	return await HardSkills.findByIdAndDelete(id);
};

module.exports = {
	getHardSkills,
	getHardSkillsByName,
	getHardSkillsById,
	createHardSkills,
	deleteHardSkills,
};
