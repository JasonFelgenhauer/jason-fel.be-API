const Project = require('../models/project');

const getProjects = async () => {
	return await Project.find();
};

const getProjectByName = async (name) => {
	return await Project.findOne({ name });
};

const getProjectById = async (id) => {
	return await Project.findById(id);
};

const createProject = async (name, image, link, desc) => {
	return await Project.create({ name, image, link, desc });
};

const deleteProject = async (id) => {
	return await Project.findByIdAndDelete(id);
};

module.exports = {
	getProjects,
	getProjectByName,
	getProjectById,
	createProject,
	deleteProject,
};
