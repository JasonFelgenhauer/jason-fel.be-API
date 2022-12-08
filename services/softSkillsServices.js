const SoftSkills = require('../models/softSkills');

const getSoftSkills = async () => {
	return await SoftSkills.find();
};

const getSoftSkillsByName = async (name) => {
	return await SoftSkills.findOne({ name });
};

const getSoftSkillsById = async (id) => {
	return await SoftSkills.findById(id);
};

const createSoftSkills = async (name) => {
	return await SoftSkills.create({ name });
};

const deleteSoftSkills = async (id) => {
	return await SoftSkills.findByIdAndDelete(id);
};

module.exports = {
	getSoftSkills,
	getSoftSkillsByName,
	getSoftSkillsById,
	createSoftSkills,
	deleteSoftSkills,
};
