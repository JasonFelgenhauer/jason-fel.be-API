const { Router } = require('express');
const router = Router();
const projectController = require('../controllers/projectController');

router.get('/projects', async (req, res) => {
	await projectController.getProjects(req, res);
});

router.get('/projectCount', async (req, res) => {
	await projectController.projectCount(req, res);
});

router.get('/getProjectById/:id', async (req, res) => {
	await projectController.getProjectById(req, res);
});

router.post('/addProject', async (req, res) => {
	await projectController.addProject(req, res);
});

router.delete('/deleteProject/:id', async (req, res) => {
	await projectController.deleteProject(req, res);
});

module.exports = router;
