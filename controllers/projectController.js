const projectService = require('../services/projectServices');
const { isValidObjectId } = require('mongoose');

const getProjects = async (req, res) => {
	const allProject = await projectService.getProjects();
	return res.status(200).json({
		status: 'success',
		data: allProject,
	});
};

const projectCount = async (req, res) => {
	const allProject = await projectService.getProjects();
	return res.status(200).json({
		status: 'success',
		data: allProject.length,
	});
};

const getProjectById = async (req, res) => {
	const id = req.params.id;
	if (!isValidObjectId(id)) return res.status(400).json({ status: 'failed', message: 'The id must be an ObjectID' });

	const project = await projectService.getProjectById(id);
	if (!project) return res.status(404).json({ status: 'failed', message: 'The project was not found' });

	return res.status(200).json({ status: 'success', data: project });
};

const addProject = async (req, res) => {
	const { name, image, link, desc } = req.body;
	console.log(req.body);
	if (!name || !image || !link || !desc) return res.status(450).json({ status: 'failed', message: 'Missing fields' });

	const project = await projectService.getProjectByName(name);
	if (project) return res.status(460).json({ status: 'failed', message: 'This project already exists' });

	await projectService.createProject(name, image, link, desc);

	return res.status(201).json({
		status: 'success',
		message: 'Project created',
	});
};

const deleteProject = async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(400).json({ status: 'failed', message: 'Missing fields' });

	const project = await projectService.getProjectById(id);
	if (!project) return res.status(400).json({ status: 'failed', message: 'Project not found' });

	await projectService.deleteProject(id);

	return res.status(200).json({ status: 'success', message: 'Project deleted' });
};

module.exports = {
	getProjects,
	projectCount,
	getProjectById,
	addProject,
	deleteProject,
};
